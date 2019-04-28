import React, { Component } from "react";
import "./App.css";
import Pluralize from "./Pluralize";
import CalculationsTable from "./CalculationsTable";
import '../node_modules/materialize-css/dist/css/materialize.css'
import '../node_modules/materialize-css/dist/js/materialize.js'

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
    let numberOfTimesPerMonth = 0;
    if (this.state.unit === "" || this.state.unit === "everyday") {
      numberOfTimesPerMonth = this.state.frequency * 30;
      this.setState({
        calculationsTable: [
          ...this.state.calculationsTable,
          this.state.calculationsTable[0]
        ]
      });
      console.log(numberOfTimesPerMonth);
      console.log("state", this.state);
    } else if (this.state.unit === "businessDay") {
      numberOfTimesPerMonth = this.state.frequency * 20;
    } else if (this.state.unit === "week") {
      numberOfTimesPerMonth = this.state.frequency * 4;
    } else if (this.state.unit === "biWeekly") {
      numberOfTimesPerMonth = this.state.frequency * 2;
    } else {
      numberOfTimesPerMonth = this.state.frequency;
    }
    console.log("hey in Submit", this.state.frequency);
  };

  render() {
    const { calculationsTable } = this.state;
    let displayResult =
      this.state.calculationsTable.length > 1 ? (
        <CalculationsTable table={calculationsTable} />
      ) : (
        ""
      );

    return (
      <div>
        <h1>Should I automate it?</h1>
        <div className="row">
          <form className="form">
            <input
              type="number"
              id="frequency"
              placeholder="1, 2, 3..."
              onChange={this.handleChangeNumber}
            />
            <span>
              {" "}
              <Pluralize count={this.state.frequency}>
                time
              </Pluralize> every{" "}
            </span>
            <select
              type="text"
              id="unit"
              onChange={this.handleChange}
              value={this.state.value}
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
              <Pluralize count={this.state.duration}>minute</Pluralize>
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
                <Pluralize count={this.state.automationTime}>minute</Pluralize>
              </span>
            </div>
            <div className="row">
              <button className="row" onClick={this.handleClick}>
                Should I automate it?
              </button>
            </div>
          </form>
          {displayResult}
        </div>
      </div>
    );
  }
}

export default App;
