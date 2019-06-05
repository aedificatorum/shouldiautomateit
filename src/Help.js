import React from "react";
import { ai } from "./Components/TelemetryService";
import { withAITracking } from '@microsoft/applicationinsights-react-js';


const Help = () => {
  return (
    <div className="container">
      <h3>How to use Should I automate it?</h3>
      <h5>Basic Options</h5>
      <ul>
        <li>How often</li>
        <li>With what frequency</li>
        <li>How much time could be saved</li>
        <li>How long would it take to automate</li>
      </ul>
      <h5>Advanced Options</h5>
      <ul>
        <li>How many months to forecast</li>
        <li>How much faster might the automation be</li>
        <li>How much slower might the automation be</li>
      </ul>
    </div>
  );
};

export default withAITracking(ai.reactPlugin, Help);
