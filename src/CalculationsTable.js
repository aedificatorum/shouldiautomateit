import React from "react";

const CalculationsTable = ({ table }) => {
  console.log(table[0].month);
  return (
    <div className="row">
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Time Saved</th>
            <th>ROI Slow</th>
            <th>ROI</th>
            <th>ROI Fast</th>
            <th>Should I automate?</th>
          </tr>
        </thead>
      </table>
      {table.length}
    </div>
  );
};

export default CalculationsTable;
