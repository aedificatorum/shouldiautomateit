import React, { Component } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import styled from "@emotion/styled";
import { useTheme } from "./ThemeContext"
import Home from "./Home";
import About from "./About";
import Help from "./Help"
import "./App.css";
import "../node_modules/materialize-css/dist/css/materialize.css";
import "../node_modules/materialize-css/dist/js/materialize.js";


const Wtf = styled("main")`
background-color: ${props => props.theme.background};
color: ${props => props.theme.mainFontColor};
`;

const App = () => {

  const themeState = useTheme();

  return (
    <HashRouter>
      <header>
        <Header />
      </header>
      <Wtf>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/help" component={Help} />
          {/* <Route path="*" component={NotFound} /> */}
        </Switch>
        <button onClick={() => themeState.toggle()} >Make it more (or less) disco</button>
      </Wtf>
      <Footer />
    </HashRouter>
  );
}

export default App;
