import React, { useState } from "react";
import Hour from "./selectors/Hour";
import Minutes from "./selectors/Minutes";
import Day from "./selectors/Day";
import Mouth from "./selectors/Mouth";
import Year from "./selectors/Year";
import Seconds from "./selectors/Seconds";
import BitcoinInfo from "./BitcoinInfo";
import image from "../../assets/Date.jpg";

const BitcoinForm = () => {
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
        `${process.env.REACT_APP_API_URL}/bitcoin/price?year=${yearValue}&mouth=${mouthValue}&day=${dayValue}&hour=${hourValue}&min=${minutesValue}`
      );
      const data = await res.json();
      setPrice("USD " + data);
    } catch (e) {
      console.log("Error al buscar datos: ", e);
      setPrice("Not Found");
    }
  };

  return (
    <div className="card" style={{ width: "40vh", minHeight: "60vh" }}>
      <div className="card-body">
        <img className="card-img-top" src={image}></img>
        <form onSubmit={getPrice}>
          <button className="btn btn-success col-12 btn-block">
            Get Price
          </button>
          <h4>Price by date:</h4>
          <p>Date:</p>
          <Year></Year>
          <Mouth></Mouth>
          <Day></Day>
          <br></br>
          <p>Time:</p>
          <Hour></Hour>
          <Minutes></Minutes>
          <Seconds></Seconds>
        </form>
        <BitcoinInfo price={price}></BitcoinInfo>
      </div>
    </div>
  );
};

export default BitcoinForm;
