import React, { Component } from "react";
import Pluralize from "./Pluralize";
import Calculator from "./Calculator";
import CalculationsTable from "./CalculationsTable";
import queryString from "query-string";

class Home extends Component {
  constructor(props) {
    super(props);

    const parsed = queryString.parse(props.location.search);

    // TODO: Advanced parameters
    const frequency = parsed.f || 1;
    const unit = parsed.u || 20;
    const duration = parsed.s || 20;
    const automationTime = parsed.a || 2400;

    this.state = {
      frequency,
      unit,
      duration,
      automationTime,
      maxSpeedUp: 0.75,
      maxSlowDown: 2.0,
      numberOfMonths: 36,
      calculationsTable: []
    };
  }

  handleChangeNumber = event => {
    this.setState({
      [event.target.id]: Number(event.target.value)
    });
  };

  handleSubmit = event => {
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
    let numberOfTimesPerMonth = frequency * unit;

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

  getShareUrl = () => {
    const urlBase = `${window.location.protocol}//${window.location.host}${
      window.location.pathname
    }#/`;

    // TODO: Advanced parameters

    const { duration, automationTime, frequency, unit } = this.state;
    const url = `${urlBase}?f=${frequency}&u=${unit}&s=${duration}&a=${automationTime}`;
    return url;
  };

  shareButtonClick = () => {
    const shareUrl = document.getElementById("share-url");
    shareUrl.select();
    document.execCommand("copy");
  };

  render() {
    const url = this.getShareUrl();

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
                onChange={this.handleChangeNumber}
              />
              <span>
                {" "}
                <Pluralize count={frequency}>time</Pluralize> every{" "}
              </span>
              <select
                type="text"
                id="unit"
                className="browser-default"
                onChange={this.handleChangeNumber}
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
                onChange={this.handleChangeNumber}
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
                onChange={this.handleChangeNumber}
              />
              <span>
                {" "}
                <Pluralize count={automationTime}>minute</Pluralize>
              </span>

              <div className="button">
                <button
                  className="waves-effect waves-light btn teal lighten-2"
                  disabled={isCalculateDisabled}
                  onClick={this.handleSubmit}
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
                onChange={this.handleChangeNumber}
                className="tooltipped"
                data-tooltip="How many months to forecast"
              />
              <label>Number Of Months</label>
              <input
                type="number"
                value={maxSpeedUp}
                step="0.1"
                id="maxSpeedUp"
                placeholder="0.3, 0.5, 0.7..."
                onChange={this.handleChangeNumber}
                className="tooltipped"
                data-tooltip="How much faster the automation could be"
              />
              <label>Max Speed Up</label>
              <input
                type="number"
                id="maxSlowDown"
                value={maxSlowDown}
                placeholder="1, 2, 3..."
                onChange={this.handleChangeNumber}
                className="tooltipped"
                data-tooltip="How much slower the automation could be"
              />
              <label>Max Slow Down</label>
            </div>
          </form>

          {displayResult}
        </div>
        <a className="share-button-float  modal-trigger" href="#modal1">
          <i className="fas fa-share-alt small my-button" />
        </a>

        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>Share</h4>
            <input type="text" id="share-url" value={url} readOnly />
          </div>
          <div className="modal-footer">
            <button
              className="waves-effect waves-green btn-flat"
              onClick={this.shareButtonClick}
            >
              Copy to Clipboard
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
