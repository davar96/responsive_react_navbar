import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3 className="logo">Logo</h3>

      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/services">
          <li>Services</li>
        </Link>
        <Link to="/skills">
          <li>Skills</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
