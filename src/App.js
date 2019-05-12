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
      frequency: 1,
      unit: "20",
      duration: 20,
      automationTime: 2400,
      calculationsTable: [],
      maxSpeedUp: 0.75,
      maxSlowDown: 2.0,
      numberOfMonths: 36
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleClick = event => {
    event.preventDefault();

    const {
      unit,
      frequency,
      duration,
      automationTime,
      maxSlowDown,
      maxSpeedUp,
      numberOfMonths
    } = this.state;
    let numberOfTimesPerMonth = frequency * Number(unit);

    let calculationTable = Calculator(
      duration,
      automationTime,
      numberOfTimesPerMonth,
      numberOfMonths,
      maxSpeedUp,
      maxSlowDown
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
      unit,
      maxSpeedUp,
      maxSlowDown,
      numberOfMonths
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
            <div className="row blue-grey lighten-5 basic-form">
              <h5>Basic options</h5>
              <input
                type="number"
                id="frequency"
                placeholder="1, 2, 3..."
                value={frequency}
                className="tooltipped"
                data-tooltip="How often you do it"
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
              <span> I could save </span>
              <input
                type="number"
                id="duration"
                className="tooltipped"
                data-tooltip="Time saved"
                placeholder="10, 15, 20..."
                value={duration}
                onChange={this.handleChange}
              />
              <span>
                {" "}
                <Pluralize count={duration}>minute</Pluralize> through
                automation. That automation would take...
              </span>
              <input
                type="number"
                id="automationTime"
                className="tooltipped"
                data-tooltip="How long to automate"
                placeholder="30, 60, 90..."
                value={automationTime}
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
            <div className="row blue-grey lighten-5 advanced-form">
              <h5>Advanced options</h5>
              <input
                type="number"
                id="numberOfMonths"
                value={numberOfMonths}
                placeholder="1, 2, 3..."
                onChange={this.handleChange}
              />
              <label>Number Of Months</label>
              <input
                type="number"
                value={maxSpeedUp}
                step="0.1"
                id="maxSpeedUp"
                placeholder="0.3, 0.5, 0.7..."
                onChange={this.handleChange}
              />
              <label>Max Speed Up</label>
              <input
                type="number"
                id="maxSlowDown"
                value={maxSlowDown}
                placeholder="1, 2, 3..."
                onChange={this.handleChange}
              />
              <label>Max Slow Down</label>
            </div>
          </form>

          {displayResult}
        </div>
      </div>
    );
  }
}

export default App;
