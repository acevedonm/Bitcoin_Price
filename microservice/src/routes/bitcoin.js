const router = require("express").Router();
const axios = require("axios");
const fs = require("fs")


//Primer endpoint
router.get("/", (req, res) => {
  axios.get("https://cex.io/api/last_price/BTC/USD").then((price) => {
    msg = `El Precio es ${price.data.lprice}`;
    res.json({ msg });
  });
  //msg = `Hello ${req.query.name || "World"}`;
});

//Segundo endpoint
//Retorna todo el historial de precios
router.get("/record", (req, res) => {
  const json_prices = fs.readFileSync("src/record.json", 'utf-8')
  const prices = JSON.parse(json_prices)
  //const json_prices = JSON.stringify(prices)
  res.json({prices})
});

//Tercer endpoint
router.get('/price', (req,res)=>{
  const year = req.query.year
  const mouth = req.query.mouth
  const day = req.query.day
  const hour =req.query.hour
  const min = req.query.min
  const sec = "00"
  const json_prices = fs.readFileSync("src/record.json", 'utf-8')
  const prices = JSON.parse(json_prices)
  const date = year+"-"+mouth+"-"+day+"_"+hour + ":" + min + ":"+sec;
  if(!prices[date]){
    res.status(404).send("Error 404, date not found");
  }else{
    res.json(prices[date])
  }


})

module.exports = router;
