import React from "react";
import Hour from "./selectors/Hour";
import Minutes from "./selectors/Minutes";
import Day from "./selectors/Day";
import Mouth from "./selectors/Mouth";
import Year from "./selectors/Year";
import Seconds from "./selectors/Seconds";

const BitcoinForm = ({ getPrice }) => {
  return (
    <div className="card card-body">
      <form onSubmit={getPrice}>
        <Year></Year>
        <Mouth></Mouth>
        <Day></Day>
        <span>--</span>
        <Hour></Hour>
        <Minutes></Minutes>
        <Seconds></Seconds>
        <button className="btn btn-success col-12 btn-block">Get Price</button>
      </form>
    </div>
  );
};

export default BitcoinForm;
