import React from "react";
import {Link} from "react-router-dom";
import HamburgerIcon from "../../images/hamburger-icon.png";
import {CSSTransition} from 'react-transition-group';
import "../../css/main.scss";

const NavigationBar = ({
  navDropDownCallback,
  navIsDroppedGetter,
  navMobileThresh,
  selectedPage,
  changePageOnClick,
}) => {
  //  enum for page types coppied from App.jsx
  const pages = {
    HOME: "home",
    ABOUT: "about",
    INTERESTS: "interests",
    WORK: "experience"
  };

  const MOBILE_THRESH = navMobileThresh;

  const [isMobile, setIsMobile] =
    React.useState(window.innerWidth<MOBILE_THRESH);

  const checkNavAutoClose = React.useCallback(
    () => {
      if(!isMobile && navIsDroppedGetter()){
        navDropDownCallback(false); //  close it
      }
    },
    [isMobile, navDropDownCallback, navIsDroppedGetter]);

  const onWindowChange = () => {
    window.addEventListener('resize', () => {
      const newMobileStatus =window.innerWidth < MOBILE_THRESH;
      if((newMobileStatus) !== isMobile){
        setIsMobile(window.innerWidth < MOBILE_THRESH);
      }
      checkNavAutoClose();

    }, false);
  };

  //  Constantly checks for window size change
  React.useEffect(
    (onWindowChange),
    [checkNavAutoClose, navMobileThresh, isMobile, MOBILE_THRESH]
  );

  const handleBurgerClick = () => {
    const currentDropDownStatus = navIsDroppedGetter();
    navDropDownCallback(!currentDropDownStatus);
  };


  const isOpenCssClass = navIsDroppedGetter() ? 'is-open' : '';

  const navList = (
    <ul className="nav-content-box">
      <li>
        <Link
          to="/"
          className={selectedPage===pages.HOME ? "selected":""}
          onClick={()=>changePageOnClick(pages.HOME)}
          >
            home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className={selectedPage===pages.ABOUT ? "selected":""}
          onClick={()=>changePageOnClick(pages.ABOUT)}
          >
            about me
        </Link>

      </li>
      <li>
        <Link
          to="/interests"
          className={selectedPage===pages.INTERESTS ? "selected":""}
          onClick={()=>changePageOnClick(pages.INTERESTS)}
        >
            interests
        </Link>
      </li>
      <li>
        <Link
          to="/experience"
          className={selectedPage===pages.WORK ? "selected":""}
          onClick={()=>changePageOnClick(pages.WORK)}
        >
          professional experience
        </Link>
      </li>
    </ul>
    );

  const wideNavContent = (
    <div className="wide-nav-content-box-container">
      {navList}
    </div>
  );

  const mobileNavContent = (
    <div className={"mobile-nav-content-box-container " + isOpenCssClass}>
      <div className="burger-icon-container">
        <img
          src={HamburgerIcon} alt="hamburger"
          onClick={handleBurgerClick}
          />
      </div>
    </div>
  );


  const navContent = isMobile ?  mobileNavContent : wideNavContent;
  return (
    <nav className="navbar">
      <div className="nav-content-box-wrapper">
        {navContent}
      </div>
    </nav>
  );
};

export default NavigationBar;
