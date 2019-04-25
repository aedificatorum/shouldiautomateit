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
    let pluralize = this.state.frequency === '1' ? '' : 's'
    console.log(this.state);
    console.log(this.props)
    return (
      <div>
        <h1>Should I automate</h1>

        <div className="row">
          <form className="form" onSubmit={this.handleSubmit}>
              <input
                type="number"
                id="frequency"
                placeholder="1,2,3"
                onChange={this.handleChange}
              />
              <span> time{pluralize} every </span>
              <select type="text" id="unit" onChange={this.handleChange} value={this.state.value}>
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
                placeholder="10,15,20"
                onChange={this.handleChange}
              />
              <span> minutes</span>
            <div className="row">
            </div>

            <div className="row">
              <span>And to automate the task would take...</span>
              <input
                type="text"
                id="automationTime"
                placeholder="Time in minutes"
                onChange={this.handleChange}
              />
              <span> minutes</span>
            </div>
            
            <button className="row" onClick={() => alert('lol')}>
              Should I automate it?
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
