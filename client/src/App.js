import { useState } from "react";
import BitcoinForm from "./components/BitcoinForm";
import BitcoinInfo from "./components/BitcoinInfo.js";
import BitcoinPrice from "./components/BitcoinPrice";
import BitcoinRecord from "./components/BitcoinRecord";


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
        `http://localhost:8080/bitcoin/price?year=${yearValue}&mouth=${mouthValue}&day=${dayValue}&hour=${hourValue}&min=${minutesValue}`
      );
      const data = await res.json();
      setPrice("USD " + data);
    } catch (e) {
      console.log("Error al buscar datos: ", e);
      setPrice("Not Found");
    }
  };

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-4" >
          <BitcoinPrice></BitcoinPrice>
        </div>
        <div className="col-md-4">
          <BitcoinForm getPrice={getPrice}></BitcoinForm>
          <BitcoinInfo price={price}></BitcoinInfo>
        </div>
        <div className="col-md-4" >
          <BitcoinRecord></BitcoinRecord>
        </div>
      </div>
    </div>
  );
}

export default App;
