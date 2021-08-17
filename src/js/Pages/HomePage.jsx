import React from "react";
import { useHistory } from 'react-router-dom'

import ContentSection from "../Components/ContentSection";
import SidePhoto from "../../images/side-profile-bridge.jpeg";
import MainPhoto from "../../images/in-the-canyon.jpeg";
import NewProfile from "../../images/new_profile.png";
import ButtonComponent from "../Components/ButtonComponent";


import "../../css/main.scss";

const HomePage = ({
  navMobThresh,
  onLearnMore,
}) => {
  const MOBILE_THRESH = 900;
  const [isMobile, setIsMobile] =
    React.useState(window.innerWidth<MOBILE_THRESH);
  const [navIsMobile, setNavIsMobile] =
    React.useState(window.innerWidth<navMobThresh);

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
      }
    }, false);
  };
  React.useEffect(onWindowChange, [navMobThresh]);

  //  when link is clicked it scrolls to top and resizes if necessary
  React.useEffect(()=> window.scrollTo(0,0), []);
  React.useEffect(()=> setIsMobile(window.innerWidth < MOBILE_THRESH), []);


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
            <div className="title-section">
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
                I'm a senior at Duke University studying Computer Science and Math. I'm passionate about building technology that tackles some of societies greatest problems. Some of my primary areas of interest include making AI solutions more ethical, equitable, and accessible to everyone. Take a poke around to learn more about my experience, interests, and goals!
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
          <div className="side-profile">
            <img src={SidePhoto} alt="side-pic" />
          </div>
        }
      />
    </section>
  );
};

export default HomePage;
