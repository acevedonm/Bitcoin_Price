import React, { useState } from "react";
import image from "../../assets/Bitcoin.jpg"


const BitcoinPrice = () => {
    const [price,setPrice]=useState("--")

  const getPrice = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/bitcoin`);
      const data = await res.json();
      setPrice("USD " + data);
    } catch (e) {
      console.log("Error al buscar datos: ", e);
      setPrice("Not Found");
    }
  };

  return (
    <div className="card"  style={{width: "40vh", minHeight:"60vh"}}>
      <div className="card-body" >
        <img className="card-img-top" src={image}></img>
        <button className="btn btn-success col-12" onClick={getPrice}>
          Give me the current price
        </button>
        <h4 className="card-title">Actual Price:</h4>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default BitcoinPrice;
