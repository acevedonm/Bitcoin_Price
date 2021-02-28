import { useState } from "react";
import "./App.css";
import BitcoinForm from "./components/BitcoinForm";
import BitcoinInfo from "./components/BitcoinInfo.js";

function App() {
  const [price, setPrice] = useState("####");

  const getPrice = async (e) => {
    e.preventDefault();
    const { year, mouth, day, hour, minutes } = e.target.elements;
    const yearValue = year.value.trim();
    const mouthValue = mouth.value.trim();
    const dayValue = day.value.trim();
    const hourValue = hour.value.trim();
    const minutesValue = minutes.value.trim();

    try {
      const res = await fetch(
        `http://localhost:3001/bitcoin/price?year=${yearValue}&mouth=${mouthValue}&day=${dayValue}&hour=${hourValue}&min=${minutesValue}`
      );
      const data = await res.json();
      setPrice(data);
    } catch (e) {
      console.log("Error al buscar datos: ", e);
      setPrice("Not Found")
    }
  };

  return (
    <section className="App-content">
      <div className="container p-4">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <BitcoinForm getPrice={getPrice}></BitcoinForm>
            <BitcoinInfo price={price}></BitcoinInfo>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
