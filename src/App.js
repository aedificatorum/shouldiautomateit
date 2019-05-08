import React, { Component } from "react";
import "./App.css";
import Pluralize from "./Pluralize";
import Calculator from "./Calculator";
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

    const { unit, frequency, duration, automationTime } = this.state;
    let numberOfTimesPerMonth = frequency * Number(unit);

    let calculationTable = Calculator(
      duration,
      automationTime,
      numberOfTimesPerMonth
    );

    this.setState({
      calculationsTable: calculationTable
    });
  };

  canBeSubmitted = () => {
    const { duration, automationTime, frequency, unit } = this.state;

    return frequency > 0 && unit !== "" && duration > 0 && automationTime > 0;
  };

  render() {
    const {
      calculationsTable,
      duration,
      automationTime,
      frequency,
      unit
    } = this.state;
    let displayResult =
      calculationsTable.length > 1 ? (
        <CalculationsTable table={calculationsTable} />
      ) : (
        ""
      );
    const isCalculateDisabled = !this.canBeSubmitted();

    return (
      <div className="container">
        <div className="row">
          <form className="col m6 s12">
            <div className="row blue-grey lighten-5 form-color">
              <input
                type="number"
                id="frequency"
                placeholder="1, 2, 3..."
                onChange={this.handleChange}
              />
              <span>
                {" "}
                <Pluralize count={frequency}>time</Pluralize> every{" "}
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
                onChange={this.handleChange}
              />
              <span>
                {" "}
                <Pluralize count={duration}>minute</Pluralize>
              </span>

              <div className="form-label">
                And to automate the task would take...
              </div>
              <input
                type="number"
                id="automationTime"
                placeholder="30, 60, 90..."
                onChange={this.handleChange}
              />
              <span>
                {" "}
                <Pluralize count={automationTime}>minute</Pluralize>
              </span>

              <div className="button">
                <button
                  className="waves-effect waves-light btn"
                  disabled={isCalculateDisabled}
                  onClick={this.handleClick}
                >
                  Should I automate it?
                </button>
              </div>
            </div>
          </form>

          <form className="col m5 offset-m1">
            <div className="row blue-grey lighten-5 form-color">
              <div>Advanced options</div>
              <label>Max Speed</label>
              <input
                type="number"
                step="0.1"
                id="maxSpeedUp"
                placeholder="0.3, 0.5, 0.7..."
                onChange={this.handleChange}
              />
            </div>
          </form>

          {displayResult}
        </div>
      </div>
    );
  }
}

export default App;
