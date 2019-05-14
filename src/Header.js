import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <nav>
        <div className="nav-wrapper blue-grey lighten-2">
          <NavLink to="/" className="navbar-title">
            Should I automate it?
          </NavLink>
          <a to="/" data-target="mobile-nav" className="sidenav-trigger">
            <i className="fas fa-bars" />
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
    </React.Fragment>
  );
};

export default Header;
