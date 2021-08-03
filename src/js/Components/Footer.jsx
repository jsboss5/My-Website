import React from "react";
import ReactDOM from "react-dom";
import "../../css/main.scss";

export default function Footer(props){
    return (
        //  see navbar.scss for more styling
        <div className="footer-container">
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
            <h3 className="footer-stamp">Joshua Boss - 2021</h3>
        </div>

    );
}