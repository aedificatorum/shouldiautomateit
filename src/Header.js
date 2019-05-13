import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper black">
          <a href="/" data-target="mobile-nav" className="sidenav-trigger">
            <i className="fas fa-bars" />
          </a>
          <a href="#!" className="navbar-title">
            Should I automate it?
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-nav">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
