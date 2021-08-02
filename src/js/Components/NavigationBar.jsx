import React from "react";
import ReactDOM from "react-dom";
import "../../css/main.scss";

const NavigationBar = (props) => {

  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-content-box">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/experience">Experience</a>
          </li>
          <li>
            <a href="/contact">Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
