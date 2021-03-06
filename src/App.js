import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./contents/Home";
import About from "./contents/About";
import Education from "./contents/Education";
import Skills from "./contents/Skills";
import Contact from "./contents/Contact";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navbar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/education">
            <Education />
          </Route>
          <Route exact path="/skills">
            <Skills />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
