import React from "react";
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
            <Link to="/about">about me</Link>

          </li>
          <li>
            <Link to="/interests">interests</Link>
          </li>
          <li>
            <Link to="/experience">professional experience</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
