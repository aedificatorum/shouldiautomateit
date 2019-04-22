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
          <table>
            <tr>
              <th>test</th>
            </tr>
          </table>
          {/* <div className="row">
        </div> */}
      </div>
      </div>
    );
  }
}

export default App;
