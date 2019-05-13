import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Help from "./Help"

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
          <a href="#!" className="navbar-title">
            Should I automate it?
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink to="/help">Help</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-nav">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/help">Help</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/help" component={Help} />
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </React.Fragment>
  );
};

export default Header;
