import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <div class="nav-wrapper black">
          <a href="#!" class="navbar-title">
            Should I automate it?
          </a>
          <a href="/" data-target="mobile-nav" class="sidenav-trigger">
            <i class="fas fa-bars" />
          </a>
          <ul class="right hide-on-med-and-down">
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>
      </nav>
      <ul class="sidenav" id="mobile-nav">
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
