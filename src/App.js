import React, { Component } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Help from "./Help"
import "./App.css";
import "../node_modules/materialize-css/dist/css/materialize.css";
import "../node_modules/materialize-css/dist/js/materialize.js";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            {/* <Route path="/help" component={Help} /> */}
            {/* <Route path="*" component={NotFound} /> */}
          </Switch>
        </main>
        <Footer />
      </HashRouter>
    );
  }
}

export default App;
