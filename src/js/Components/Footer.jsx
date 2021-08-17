import React from "react";
import {Link} from "react-router-dom";
import "../../css/main.scss";

export default function Footer({changePageOnClick}){

//  enum for page types coppied from App.jsx
    const pages = {
        HOME: "home",
        ABOUT: "about",
        INTERESTS: "interests",
        WORK: "experience"
  };

    return (
        //  see navbar.scss for more styling
        <div className="footer-container">
            <div className="nav-content-box-wrapper">
                <div className="wide-nav-content-box-container">
                    <ul className="nav-content-box">
                        <li>
                            <Link
                                to="/home"
                                onClick={
                                    ()=>changePageOnClick(pages.HOME)
                                }
                            >
                                home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                onClick={
                                    ()=>changePageOnClick(pages.ABOUT)
                                }
                            >
                                    about
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/interests"
                                onClick={
                                    ()=>changePageOnClick(pages.INTERESTS)
                                }
                            >
                                interests
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/experience"
                                onClick={
                                    ()=>changePageOnClick(pages.WORK)
                                }
                            >
                                professional experience
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <h3 className="footer-stamp">Joshua Boss - 2021</h3>
        </div>

    );
}