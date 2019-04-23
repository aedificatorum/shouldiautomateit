import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super() 
    this.state = {
      frequency: 0,
      unit: '',
      automationTime: 0
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    // this.setState = (this.state)
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Should I automate</h1>

        <div className="row">
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="row">
              <label htmlFor="automate-time">Time to complete manually</label>
              </div>
              <div className="row">
              <label htmlFor="automate-time">Frequency</label>
              <input
                type="number"
                id="automate-time"
                placeholder="Frequency"
                onChange={this.handleChange}
              />
            <label htmlFor="automate-time">Frequency</label>
            <select type="text" id="unit" onChange={this.handleChange}>
              <option value="days">Day</option>
              <option value="week">Week</option>
              <option value="two-week">Biweekly</option>
              <option value="month">Month</option>
            </select>
            </div>
          
            <div className="row">
              <label htmlFor="complete-time">Time to automate</label>
              <input
                type="text"
                id="complete-time"
                placeholder="Time in minutes"
                onChange={this.handleChange}
              />
            </div>
            <div className="row">
              <label htmlFor="times-month">Times per month</label>
              <input
                type="text"
                id="times-month"
                placeholder="Time in minutes"
              />
            </div>
            <button className="row" type="submit">
                  Submit
                </button>
          </form>
        </div>

      </div>
    );
  }
}

export default App;
