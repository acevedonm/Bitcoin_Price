const express = require("express");
const cors = require("cors");
const routes = require("./src/routes/index.js");
const fs = require("fs");
const axios = require("axios");
const cron = require("node-cron");
const getDateTime = require("./src/utils/getDateTime.js");
require("dotenv").config();

const { json, urlencoded } = express;
const app = express();

//Opciones de cors, para que cualquiera pueda acceder al servicio y no tener problemas.(solo a efectos practicos)
const corsOptions = {
  origin: "*", //aca iria la FRONT_URL con permiso de acceso
  optionsSuccessStatus: 200,
};

//defino middlewares:
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors(corsOptions));
//rutas
app.use(routes);
app.use("/", (req, res) => {
  res.send("this is a microservice");
});
//handle error
app.use((req, res, next) => {
  res.status(404).send("Error 404, page not found");
});

//* * * MICROSERVICIO * * *

/* ATENCION: 
tenga en cuenta que si el archivo json es borrado o no existe el server fallara, 
debido a que en el proceso el programa intentara leerlo
 */

//* * Proceso que se ejecuta en loop cada 1 minuto * * //
cron.schedule("* * * * *", () => {
  const json_prices = fs.readFileSync("src/record.json", "utf-8");
  const prices = JSON.parse(json_prices);
  axios.get("https://cex.io/api/last_price/BTC/USD").then((price) => {
    const i = getDateTime();
    prices[i] = price.data.lprice;
    const json_prices = JSON.stringify(prices);
    fs.writeFileSync("src/record.json", json_prices, "utf-8");
  });
});

module.exports = app;
