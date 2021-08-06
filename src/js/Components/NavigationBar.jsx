import React from "react";
import {Link} from "react-router-dom";
import HamburgerIcon from "../../images/hamburger-icon.png";
import "../../css/main.scss";

const NavigationBar = ({
  navDropDownCallback,
  navIsDroppedGetter,
  navMobileThresh,
}) => {
  const MOBILE_THRESH = navMobileThresh;

  const [isMobile, setIsMobile] =
    React.useState(window.innerWidth<MOBILE_THRESH);

  const checkNavAutoClose = React.useCallback(
    () => {
        console.log("outside");
        console.log("navisDropped", navIsDroppedGetter());
      if(!isMobile && navIsDroppedGetter()){
        navDropDownCallback(false); //  close it
        console.log("Inside");
        console.log("isMobile", isMobile);
        console.log("navisDropped", navIsDroppedGetter());
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
    // console.log(currentDropDownStatus);
    // setDropDownOpen(!currentDropDownStatus);
    navDropDownCallback(!currentDropDownStatus);
  };


  const isOpenCssClass = navIsDroppedGetter() ? 'is-open' : '';

  const navList = (
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
