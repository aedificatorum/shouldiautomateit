import React from "react";

const Summary = ({ calculationsTable }) => {
  console.log(calculationsTable[1]);
  return (
    <div className="row summary">
      <div className="col">
        {calculationsTable[2]
          ? "3 months: " + calculationsTable[2].shouldIAutomate
          : ""}
      </div>
      <div className="col">
        {calculationsTable[5]
          ? "6 months: " + calculationsTable[5].shouldIAutomate
          : ""}
      </div>
      <div className="col">
        {calculationsTable[11]
          ? "12 months: " + calculationsTable[11].shouldIAutomate
          : ""}
      </div>
      <div className="col">
        {calculationsTable[23]
          ? "24 months: " + calculationsTable[23].shouldIAutomate
          : ""}
      </div>
      <div className="col">
        {calculationsTable[35]
          ? "36 months: " + calculationsTable[35].shouldIAutomate
          : ""}
      </div>
    </div>
  );
};

export default Summary;
