import React from "react";

const Summary = ({ calculationsTable }) => {
  console.log(calculationsTable[1]);
  return (
    <div className="row">
      <div className="col summary">
      <p>Summary</p>
      <p>
        {calculationsTable[2]
          ? "3 months: " + calculationsTable[2].shouldIAutomate
          : ""}
      </p>
      <p>
        {calculationsTable[5]
          ? "6 months: " + calculationsTable[5].shouldIAutomate
          : ""}
      </p>
      <p>
        {calculationsTable[11]
          ? "12 months: " + calculationsTable[11].shouldIAutomate
          : ""}
      </p>
      <p>
        {calculationsTable[23]
          ? "24 months: " + calculationsTable[23].shouldIAutomate
          : ""}
      </p>
      <p>
        {calculationsTable[35]
          ? "36 months: " + calculationsTable[35].shouldIAutomate
          : ""}
      </p>
      </div>
    </div>
  );
};

export default Summary;
