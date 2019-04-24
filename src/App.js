import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      frequency: 0,
      unit: "",
      duration: 0,
      automationTime: 0
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let numberOfTimesPerMonth = 0;
    if (this.state.unit === "" || this.state.unit === "everyday") {
      numberOfTimesPerMonth = this.state.frequency * 30
      console.log(numberOfTimesPerMonth)
    } else if (this.state.unit === "businessDay") {
      numberOfTimesPerMonth = this.state.frequency * 20
    } else if (this.state.unit === "week") {
      numberOfTimesPerMonth = this.state.frequency * 4
    } else if (this.state.unit === "biWeekly") {
      numberOfTimesPerMonth = this.state.frequency * 2
    } else {
      numberOfTimesPerMonth = this.state.frequency
    }
    console.log('hey in Submit', this.state.frequency)
  };

  
  render() {
    console.log(this.state);
    console.log(this.props)
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
                id="frequency"
                placeholder="Frequency"
                onChange={this.handleChange}
              />
              <label htmlFor="automate-time">per</label>
              <select type="text" id="unit" onChange={this.handleChange} value={this.state.value}>
                <option value="everyday">Everyday</option>
                <option value="businessDay">Every week day</option>
                <option value="week">Week</option>
                <option value="biWeekly">Biweekly</option>
                <option value="month">Month</option>
              </select>
              <label htmlFor="automate-time">Duration</label>
              <input
                type="number"
                id="duration"
                placeholder="Duration"
                onChange={this.handleChange}
              />
            </div>

            <div className="row">
              <label htmlFor="complete-time">Time to automate</label>
              <input
                type="text"
                id="automationTime"
                placeholder="Time in minutes"
                onChange={this.handleChange}
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
