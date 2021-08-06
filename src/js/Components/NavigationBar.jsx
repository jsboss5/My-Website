import React from "react";
import {Link} from "react-router-dom";
import HamburgerIcon from "../../images/hamburger-icon.png";
import "../../css/main.scss";

const NavigationBar = ({navDropDownCallback}) => {
  const MOBILE_THRESH = 800;

  const [isMobile, setIsMobile] =
    React.useState(window.innerWidth<MOBILE_THRESH);
  const [dropDownOpen, setDropDownOpen] = React.useState(false);

  const checkNavAutoClose = () => {
    if(!isMobile && dropDownOpen){
      navDropDownCallback(false); //  close it
      setDropDownOpen(false);
    }
  };

  const onWindowChange = () => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < MOBILE_THRESH);
      console.log("dropdown", dropDownOpen);
      checkNavAutoClose();
    }, false);
  };

  React.useEffect((onWindowChange), []);
  //  this is used to auto close when nav is expanded
  React.useEffect((checkNavAutoClose), [dropDownOpen, isMobile, checkNavAutoClose]);

  const handleBurgerClick = () => {
    const currentDropDownStatus = dropDownOpen;
    console.log("currentDropDown",currentDropDownStatus)
    setDropDownOpen(!currentDropDownStatus);
    navDropDownCallback(!currentDropDownStatus);
    console.log(dropDownOpen);
  };


  const isOpenCssClass = dropDownOpen ? 'is-open' : '';

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
