import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Should I automate</h1>

        <div className="row">
          <form className="form">
            <label for="automate-time">Time to automate</label>
            <input type="text" id="automate-time" placeholder="Time in minutes" />
            <label for="complete-time">Time to complete</label>
            <input type="text" id="complete-time" placeholder="Time in minutes" />
            <label for="times-month">Times per month</label>
            <input type="text" id="times-month" placeholder="Time in minutes" />
          </form>
          <table id="frequency-helper">
            <tr>
              <th>Frequency</th>
              <th>Per Month</th>
            </tr>
            <tr>
              <td>Monthly</td>
              <td>1</td>
              </tr>
              <tr>
                <td>Weekly</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Daily(week)</td>
                <td>20</td>
              </tr>
              <tr>
                <td>2x Daily(week)</td>
                <td>40</td>
              </tr>
              <tr>
                <td>8x Daily(week)</td>
                <td>160</td>
              </tr>

           
          </table>
      </div>
      </div>
    );
  }
}

export default App;
