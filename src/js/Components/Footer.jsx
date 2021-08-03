import React from "react";
import {Link} from "react-router-dom";
import "../../css/main.scss";

export default function Footer(props){
    return (
        //  see navbar.scss for more styling
        <div className="footer-container">
            <div className="nav-content-box-container">
                <ul className="nav-content-box">
                    <li>
                        <Link to="/home">home</Link>
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
            <h3 className="footer-stamp">Joshua Boss - 2021</h3>
        </div>

    );
}