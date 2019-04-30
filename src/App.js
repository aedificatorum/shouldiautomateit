import React, { Component } from "react";
import "./App.css";
import Pluralize from "./Pluralize";
import CalculationsTable from "./CalculationsTable";
import "../node_modules/materialize-css/dist/css/materialize.css";
import "../node_modules/materialize-css/dist/js/materialize.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      frequency: 0,
      unit: "",
      duration: 0,
      automationTime: 0,
      calculationsTable: [
        {
          month: 1,
          timeSaved: 100,
          roiSlow: -3500,
          roiMed: -1100,
          roiFast: -500,
          shouldIAutomate: "No"
        }
      ]
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleClick = event => {
    event.preventDefault();
    const { unit, frequency, calculationsTable } = this.state;
    let numberOfTimesPerMonth = 0;
    console.log(unit)
    if (unit === "" || unit === "everyday") {
      numberOfTimesPerMonth = frequency * 30;
      this.setState({
        calculationsTable: [
          ...calculationsTable,
          calculationsTable[0]
        ]
      });
    } else if (unit === "businessDay") {
      numberOfTimesPerMonth = frequency * 20;
    } else if (unit === "week") {
      numberOfTimesPerMonth = frequency * 4;
    } else if (unit === "biWeekly") {
      numberOfTimesPerMonth = frequency * 2;
    } else {
      numberOfTimesPerMonth = frequency;
    }
    console.log(this.state.frequency)
  };

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
                onChange={this.handleChangeNumber}
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
                <option value="everyday">day</option>
                <option value="businessDay">week day</option>
                <option value="week">Week</option>
                <option value="biWeekly">Other Week</option>
                <option value="month">Month</option>
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
