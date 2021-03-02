import React from "react";
import BitcoinForm from "./Bitcoin/BitcoinForm";
import BitcoinInfo from "./Bitcoin/BitcoinInfo.js";
import BitcoinPrice from "./Bitcoin/BitcoinPrice";
import BitcoinRecord from "./Bitcoin/BitcoinRecord";

const ListCards = () => {
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-4">
          <BitcoinPrice></BitcoinPrice>
        </div>
        <div className="col-md-4">
          <BitcoinForm></BitcoinForm>
        </div>
        <div className="col-md-4">
          <BitcoinRecord></BitcoinRecord>
        </div>
      </div>
    </div>
  );
};

export default ListCards;
