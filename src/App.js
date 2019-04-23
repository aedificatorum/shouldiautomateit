import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Should I automate</h1>

        <div className="row">
          <form className="form">
            <div className="row">
              <label for="automate-time">Time to complete manually</label>
              </div>
              <div className="row">
              <label for="automate-time">Frequency</label>
              <input
                type="number"
                id="automate-time"
                placeholder="Frequency"
              />
            <label for="automate-time">Frequency</label>
            <select type="text" id="unit">
              <option value="days">Day</option>
              <option value="week">Week</option>
              <option value="two-week">Biweekly</option>
              <option value="month">Month</option>
            </select>
            </div>
          
            <div className="row">
              <label for="complete-time">Time to automate</label>
              <input
                type="text"
                id="complete-time"
                placeholder="Time in minutes"
              />
            </div>
            <div className="row">
              <label for="times-month">Times per month</label>
              <input
                type="text"
                id="times-month"
                placeholder="Time in minutes"
              />
            </div>
          </form>
          
        </div>
      </div>
    );
  }
}

export default App;
