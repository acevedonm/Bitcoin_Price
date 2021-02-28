import React from "react";

const BitcoinInfo = ({ price }) => {
  return (
    <div>
      {price == "Not Found" ? (
        <div className="alert alert-danger ">
          <p>Price: {price}</p>
        </div>
      ) : (
        <div className="card card-body">
          <p>Price: {price}</p>
        </div>
      )}
    </div>
  );
};

export default BitcoinInfo;
