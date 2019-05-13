import React from "react";
import { NavLink, HashRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const Header = () => {
  return (
    <React.Fragment>
      <nav>
        <div className="nav-wrapper black">
          <NavLink to="/" className="navbar-title">
            Should I automate it?
          </NavLink>
          <a href="/" data-target="mobile-nav" className="sidenav-trigger">
            <i className="fas fa-bars" />
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-nav">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>

      <Switch>
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </React.Fragment>
  );
};

export default Header;
