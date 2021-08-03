import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";
import "../../css/main.scss";

const NavigationBar = (props) => {

  return (
    <nav className="navbar">
      <div className="nav-content-box-container">
        <ul className="nav-content-box">
          <li>
            <Link to="/">home</Link>

          </li>
          <li>
            <Link to="/about">about</Link>

          </li>
          <li>
            <Link to="/experience">experience</Link>
          </li>
          <li>
            <Link to="/contact">contact me</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
