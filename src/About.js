import React from "react";
import { ai } from "./Components/TelemetryService";
import { withAITracking } from '@microsoft/applicationinsights-react-js';

const About = () => {
  return (
    <div className="container">
      <div className="about-container">
        <h3>About</h3>
        <div className="about-page">
          <p>
            <b>
              <i>Should I automate it?</i>
            </b>{" "}
            is designed for anyone interested to see when a manual process would
            benefit from being automated.
          </p>
          <h5 className="about-title">Inspiration</h5>
          <p>
            It was inspired by{" "}
            <a href="https://xkcd.com/1205/" target="blank">
              xkcd 1205
            </a>
            .
          </p>
          <h5 className="about-title">GitHub repository</h5>
          <p>
            <a
              href="https://github.com/aedificatorum/shouldiautomateit"
              target="blank"
            >
              Should I automate it?
            </a>
          </p>
          <h5 className="about-title">Built by</h5>
          <p>
            <a
              href="https://github.com/aedificatorum"
              target="blank"
            >
              Aedificatorum
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default withAITracking(ai.reactPlugin, About);
