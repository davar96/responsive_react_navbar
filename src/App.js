import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
const App = () => {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" components={Home} exact>
            <Home></Home>
          </Route>
          <Route path="/about" components={About} exact>
            <About></About>
          </Route>
          <Route path="/services" components={Services} exact>
            <Services></Services>
          </Route>
          <Route path="/skills" components={Skills} exact>
            <Skills></Skills>
          </Route>
          <Route path="/contact" components={Contact} exact>
            <Contact></Contact>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
