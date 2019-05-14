import React from "react";

const About = () => {
  return (
    <div className="container">
      <h3>About</h3>
      <div className="about-page">
        <p>
          <i>Should I automate it?</i> is designed for anyone interested to see
          when a manual process would benefit from being automated.
        </p>
        <p>
          It was inspired by{" "}
          <a href="https://xkcd.com/1205/" target="blank">
            xkcd 1205
          </a>
          .
        </p>
        <p>
          <a
            href="https://github.com/aedificatorum/shouldiautomateit"
            target="blank"
          >
            GitHub repository
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
