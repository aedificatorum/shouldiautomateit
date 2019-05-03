import React, { Component } from "react";
import "./App.css";
import Pluralize from "./Pluralize";
import Calculator from "./Calculator"
import CalculationsTable from "./CalculationsTable";
import "../node_modules/materialize-css/dist/css/materialize.css";
import "../node_modules/materialize-css/dist/js/materialize.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      frequency: 0,
      unit: "30",
      duration: 0,
      automationTime: 0,
      calculationsTable: []
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleClick = event => {
    event.preventDefault();

    const { unit, frequency } = this.state;
    let numberOfTimesPerMonth = frequency * Number(unit);

    // TODO: Pass required parameters to Calculator
    let calculationTable = Calculator();

    this.setState({
      calculationsTable: calculationTable
    });
  }

  render() {
    const { calculationsTable, duration, automationTime, frequency, unit } = this.state;
    let displayResult =
      calculationsTable.length > 1 ? (
        <CalculationsTable table={calculationsTable} />
      ) : (
        ""
      );

    return (
      <div className="container">
        <h1>Should I automate it?</h1>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <input
                type="number"
                id="frequency"
                placeholder="1, 2, 3..."
                onChange={this.handleChange}
              />
              <span>
                {" "}
                <Pluralize count={frequency}>
                  time
                </Pluralize> every{" "}
              </span>
              <select
                type="text"
                id="unit"
                className="browser-default"
                onChange={this.handleChange}
                value={unit}
              >
                <option value="30">day</option>
                <option value="20">week day</option>
                <option value="4">Week</option>
                <option value="2">Other Week</option>
                <option value="1">Month</option>
              </select>
              <span> I spend </span>
              <input
                type="number"
                id="duration"
                placeholder="10, 15, 20..."
                onChange={this.handleChangeNumber}
              />
              <span>
                {" "}
                <Pluralize count={duration}>minute</Pluralize>
              </span>
              <div className="row">
                <span>And to automate the task would take...</span>
                <input
                  type="number"
                  id="automationTime"
                  placeholder="30, 60, 90..."
                  onChange={this.handleChange}
                />
                <span>
                  {" "}
                  <Pluralize count={automationTime}>
                    minute
                  </Pluralize>
                </span>
              </div>
              <div className="row">
                <button
                  className="waves-effect waves-light btn"
                  onClick={this.handleClick}
                >
                  Should I automate it?
                </button>
              </div>
            </div>
          </form>
          {displayResult}
        </div>
      </div>
    );
  }
}

export default App;
