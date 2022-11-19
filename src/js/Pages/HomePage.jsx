import React from "react";
import { useHistory } from 'react-router-dom'

import ContentSection from "../Components/ContentSection";
import SidePhoto from "../../images/side-profile-bridge.jpg";
import NewProfile from "../../images/professional-headshot-website.jpg";
import ButtonComponent from "../Components/ButtonComponent";


import "../../css/main.scss";

const HomePage = ({
  navMobThresh,
  onLearnMore,
}) => {
  const MOBILE_THRESH = 900;
  const REAL_MOBILE_THRESH = 500;

  const [isMobile, setIsMobile] =
    React.useState(window.innerWidth<MOBILE_THRESH);
  const [isRealMobile, setIsRealMobile] =
    React.useState(window.innterWidth<REAL_MOBILE_THRESH);
  const [navIsMobile, setNavIsMobile] =
    React.useState(window.innerWidth<navMobThresh);

  //  this is css class for actual mobile phone
  const realMobileClass = isRealMobile ? 'real-mobile' : '';

  //  creates histoory object to be used for button callback
  const history = useHistory();

  //  makes sure component is mounted before changing state.
  const componentIsMounted = React.useRef(true)
    React.useEffect(() => {
        return () => {
            componentIsMounted.current = false
        }
    }, []);

  //  responsible for change to mobile view
  const onWindowChange = () => {
    window.addEventListener('resize', () => {
      if(componentIsMounted.current){
        setIsMobile(window.innerWidth < MOBILE_THRESH);
        setNavIsMobile(window.innerWidth < navMobThresh);
        setIsRealMobile(window.innerWidth< REAL_MOBILE_THRESH);
      }
    }, false);
  };
  React.useEffect(onWindowChange, [navMobThresh]);

  //  when link is clicked it scrolls to top and resizes if necessary
  React.useEffect(()=> window.scrollTo(0,0), []);
  React.useEffect(()=> setIsMobile(window.innerWidth < MOBILE_THRESH), []);
  React.useEffect(()=> setIsRealMobile(window.innerWidth < REAL_MOBILE_THRESH), []);


  return (
    <section className="page-container">
      {/* <NavigationBar /> */}
      <ContentSection
        isMobile = {isMobile}
        disableHover={navIsMobile}
        columnOne =
          {
            <div className="profile-photo">
              <img src={NewProfile} alt="opening-pic" />
            </div>
          }
        columnTwo=
          {
            <div className={"title-section " + realMobileClass}>
              <h1>hi, i'm josh</h1>
              <h2 className="subtitle">
                software engineer
              </h2>
            </div>
          }
      />
      <ContentSection
        isMobile={isMobile}
        columnOne =
          {
            <div className="about-me">
              <h2 className="subtitle">
                about me
              </h2>
              <p className="personal-blurb">
                I'm a graduate of Duke University where I studied Computer Science and Math. Experienced in fullstack, infrastructure, and ML engineering, I'm passionate about building technology that helps people. Take a poke around my custom built React website to learn more about my experience, interests, and goals!
              </p>
              <ButtonComponent
                text='learn more!'
                onClick= {() => {
                  history.push('/about');
                  onLearnMore();
                }}
                />
            </div>
          }
        columnTwo=
        {
          <div className={"side-profile " + realMobileClass}>
            <img src={SidePhoto} alt="side-pic" />
          </div>
        }
      />
    </section>
  );
};

export default HomePage;
