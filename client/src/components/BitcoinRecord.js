import React, { useState } from "react";


const BitcoinRecord = () => {

  const [prices, setPrices] = useState("")

  
const getRecord = async (e)=>{
  try {
    const res = await fetch(
      `http://localhost:3001/bitcoin/record`
    );
    const data = await res.json();
    const priceList = data.prices
    setPrices(JSON.stringify(priceList).replace(/,/g,"\n"));
  } catch (e) {
    console.log("Error al buscar datos: ", e);
    setPrices("Not Found");
  }
}

  return (
    <div className="card">
      <div className="card-body">
       
        <button className="btn btn-success col-12" onClick={getRecord}>Give me the record</button>
        <h4 className="card-title">Record:</h4>
        <span>{prices}</span>
      </div>
    </div>
  );
};

export default BitcoinRecord;
