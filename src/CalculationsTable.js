import React from "react";

const CalculationsTable = ({ table }) => {
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
