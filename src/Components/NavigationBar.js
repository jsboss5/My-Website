import React from "react";
import ReactDOM from "react-dom";
import "../css/NavigationBar.scss";

const NavigationBar = (props) => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-content-box">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">Past Work</a>
          </li>
          <li>
            <a href="#home">Goals</a>
          </li>
          <li>
            <a href="#home">Contact Me</a>
          </li>
        </ul>

        <ul className="nav-icons-box">
          <li>
            <a href="#home">Contact Me</a>
          </li>
          <li>
            <div className="social-media-container">
              <a href="#" class="fa fa-linkedin"></a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
