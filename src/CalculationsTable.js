import React from "react";

const CalculationsTable = ({ table }) => {
  return (
    <div className="row">
      <table className="striped">
        <thead>
          <tr>
            <th>Month</th>
            <th>Time Saved</th>
            <th>ROI Slow</th>
            <th>ROI</th>
            <th>ROI Fast</th>
            <th>Should I Automate It?</th>
          </tr>
        </thead>
        <tbody>
          {table.map((row, i) => {
            return (
              <tr key={i}>
                <td>{row.month}</td>
                <td>{row.timeSaved}</td>
                <td>{row.roiSlow}</td>
                <td>{row.roiMed}</td>
                <td>{row.roiFast}</td>
                <td className={row.shouldIAutomate.toLowerCase()}>{row.shouldIAutomate}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CalculationsTable;
