import React from "react";
import { ai } from "./Components/TelemetryService";
import { withAITracking } from '@microsoft/applicationinsights-react-js';


const Help = () => {
  return (
    <div className="container">
      <h3>How to use Should I automate it?</h3>
      <h5>Basic Options</h5>
      <h5>Advanced Options</h5>
    </div>
  );
};

export default withAITracking(ai.reactPlugin, Help);
