import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import "./App.css";
import "../node_modules/materialize-css/dist/css/materialize.css";
import "../node_modules/materialize-css/dist/js/materialize.js";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
