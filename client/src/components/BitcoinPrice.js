import React, { useState } from "react";


const BitcoinPrice = () => {
    const [price,setPrice]=useState("--")

  const getPrice = async () => {
    try {
      const res = await fetch(`http://localhost:8080/bitcoin`);
      const data = await res.json();
      setPrice("USD " + data);
    } catch (e) {
      console.log("Error al buscar datos: ", e);
      setPrice("Not Found");
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Actual Price:</h4>

        <span>{price}</span>

        <button className="btn btn-success col-12" onClick={getPrice}>
          Give me the current price
        </button>
      </div>
    </div>
  );
};

export default BitcoinPrice;
