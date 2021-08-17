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
  const pages = {
    HOME: "home",
    ABOUT: "about",
    INTERESTS: "interests",
    WORK: "experience"
  };

  //  use the current url to determine the initial page. This is used for highlighting the proper nav title.
  let startingPage = "";
  //  get rid of the first forward slash.
  const currentURLExtension = window.location.pathname.substr(1);
  //  Switch statement determines initial selected page. THis is only necessary to make sure url is correct. Might just replace with the one line solution
  switch(currentURLExtension){
    case pages.HOME:
      startingPage = pages.HOME;
      break;

    case pages.ABOUT:
      startingPage = pages.ABOUT;
      break;

    case pages.INTERESTS:
      startingPage = pages.INTERESTS;
      break;

    case pages.WORK:
      startingPage = pages.WORK;
      break;

    default:
      startingPage = pages.HOME;
  };

  const [navIsDropped, setNavIsDropped] = React.useState(false);
  const [currentPageSelected, setCurrentPageSelected] =
    React.useState(startingPage);

  console.log(window.location.pathname.substr(1));

  //  determines when nav bar shifts to hamburger (and no-highlight rules for other pages)
  const NAV_MOBILE_THRESH = 800;

  const dropDownNav = (isExpanded) => {
    setNavIsDropped(isExpanded);
  };

  //  when new page button is clicked from drop down.
  //  param should be a page type from enum above
  const onNavButtonEnter = (pageType) => {
    setNavIsDropped(false);
    setCurrentPageSelected(pageType);
    console.log(pageType);
  };

  const navIsDroppedGetter = () => {
    return navIsDropped;
  };

  const navDropDown = (
    <ul className="nav-content-box drop-down-nav">
      <li>
        <Link
          onClick={() => onNavButtonEnter(pages.HOME)}
          to="/">
            home
        </Link>
      </li>
      <li>
        <Link
          onClick={() => onNavButtonEnter(pages.ABOUT)}
          to="/about">
            about me
        </Link>
      </li>
      <li>
        <Link
          onClick={() => onNavButtonEnter(pages.INTERESTS)}
          to="/interests">
            interests
        </Link>
      </li>
      <li>
        <Link
          onClick={() => onNavButtonEnter(pages.WORK)}
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
        selectedPage={currentPageSelected}
        changePageOnClick={setCurrentPageSelected}
        />
      {navIsDropped && navDropDown}
      <Switch>
        {/* Redirect base path to home */}
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route
          render={()=>
            <HomePage 
              navMobThresh={NAV_MOBILE_THRESH}
              onLearnMore={()=>setCurrentPageSelected(pages.ABOUT)}
            />}
          path="/home"
          />
        <Route
          render={()=>
            <AboutPage
              navMobThresh={NAV_MOBILE_THRESH}
              onLearnMore={()=>setCurrentPageSelected(pages.INTERESTS)}
            />}
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
      <Footer changePageOnClick={setCurrentPageSelected}/>
    </div>
  );
};