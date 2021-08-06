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

  //  determines when nav bar shifts to hamburger (and no-highlight rules for other pages)
  const NAV_MOBILE_THRESH = 800;

  const dropDownNav = (isExpanded) => {
    setNavIsDropped(isExpanded);
  };

  const onNavButtonEnter = () => {
    setNavIsDropped(false);
  };

  const navIsDroppedGetter = () => {
    return navIsDropped;
  };

  const navDropDown = (
    <ul className="nav-content-box drop-down-nav">
      <li>
        <Link
          onClick={onNavButtonEnter}
          to="/">
            home
        </Link>
      </li>
      <li>
        <Link
          onClick={onNavButtonEnter}
          to="/about">
            about me
        </Link>
      </li>
      <li>
        <Link
          onClick={onNavButtonEnter}
          to="/interests">
            interests
        </Link>
      </li>
      <li>
        <Link
          onClick={onNavButtonEnter}
          to="/experience">
            professional experience
        </Link>
      </li>
    </ul>
  );


  return (
    <div>
      <NavigationBar
        navDropDownCallback={dropDownNav}
        navIsDroppedGetter={navIsDroppedGetter}
        navMobileThresh={NAV_MOBILE_THRESH}
        />
      {navIsDropped && navDropDown}
      <Switch>
        {/* Redirect base path to home */}
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route
          render={()=><HomePage navMobThresh={NAV_MOBILE_THRESH}/>}
          path="/home"
          />
        <Route
          render={()=><AboutPage navMobThresh={NAV_MOBILE_THRESH}/>}
          path="/about"
          />
        <Route
          render=
            {()=><InterestsPage navMobThresh={NAV_MOBILE_THRESH}/>}
          path="/interests"
          />
        <Route
          render=
            {()=><PortfolioPage navMobThresh={NAV_MOBILE_THRESH}/>}
          path="/experience"
          />
      </Switch>
      <SocialMediaSection/>
      <Footer/>
    </div>
  );
};