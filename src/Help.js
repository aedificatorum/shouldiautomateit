import React from "react";
import { ai } from "./Components/TelemetryService";
import { withAITracking } from '@microsoft/applicationinsights-react-js';


const Help = () => {
  return (
    <div className="container">
      <h3>How to use Should I automate it?</h3>
      <p>
        The tool is designed to help evaluate whether or not it is worth investing time into
        automating (in whole or in part) a task.
      </p>
      <p>
        By using the inputs to determine how often the task is completed, how much time could be saved, and 
        how much time it would take to automate - the tool shows a table of the Return on Investiment (ROI).  
        This is computed as time saved (times the task is completed * time saved per task) less time to automate.  
        A positive value indicates that in that month the automation has 'paid off'.  A negative value indicates 
        that more time was spent automating than was saved.  The additional ROI columns represent the under or over 
        estimation cases.
      </p>
      <h5>Basic Options</h5>
      <p>
        Fill out the form so that reading the sentence correctly describes how often you do the
        task (e.g. 3 times every weekday), and the amount of time you could save <strong>each time </strong>
        is noted.  The final input is how long it would take to complete the automation.
      </p>
      <h5>Advanced Options</h5>
      <p>
        By default the tool assumes that the estimate might be potentially twice as long (0.5 - 50%) as
        it will actually take.  It also assumes that it may be underestimating by up to three times (3.0 - 300%).
        If you are more (or less) certain about your estimate adjust these values.
      </p>
      <p>
        The number of months forecasted can be customised, and defaults to 36.
      </p>
    </div>
  );
};

export default withAITracking(ai.reactPlugin, Help);
