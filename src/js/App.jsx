import React from "react";
import HomePage from "../js/Pages/HomePage.jsx";
import AboutPage from "../js/Pages/AboutPage";
import InterestsPage from "./Pages/InterestsPage.jsx";
import NavigationBar from "../js/Components/NavigationBar.jsx";
import SocialMediaSection from "./Components/SocialMediaSection.jsx";
import PortfolioPage from "./Pages/PortfolioPage.jsx";
import Footer from "../js/Components/Footer";
import { Route, Switch, Link } from "react-router-dom";
import { Redirect } from 'react-router'


import "../css/main.scss";

export default function App() {
  const [navIsDropped, setNavIsDropped] = React.useState(false);

  const dropDownNav = (isExpanded) => {
    setNavIsDropped(isExpanded);
  };

  const navDropDown = (
    <ul className="nav-content-box drop-down-nav">
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
        <Link to="/experience">
          professional experience
        </Link>
      </li>
    </ul>
  );


  return (
    <div>
      <NavigationBar
        navDropDownCallback={dropDownNav}
        />
      {navIsDropped && navDropDown}
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route render={()=><HomePage/>}  path="/home"/>
        <Route render={()=><AboutPage/>} path="/about"/>
        <Route render={()=><InterestsPage/>} path="/interests"/>
        <Route render={()=><PortfolioPage/>} path="/experience"/>
      </Switch>
      <SocialMediaSection/>
      <Footer/>
    </div>
  );
};