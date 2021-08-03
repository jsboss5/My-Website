import React from "react";
import ReactDOM from "react-dom";
import "../../css/main.scss";

const NavigationBar = (props) => {

  return (
    <nav className="navbar">
      <div className="nav-content-box-container">
        <ul className="nav-content-box">
          <li>
            <a href="/home">home</a>
          </li>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="/experience">experience</a>
          </li>
          <li>
            <a href="/contact">contact me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
