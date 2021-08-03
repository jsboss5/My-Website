import React, { useEffect } from "react";
import NavigationBar from "../Components/NavigationBar";
import Footer from  "../Components/Footer";
import ContentSection from "../Components/ContentSection";
import { SocialIcon } from 'react-social-icons';

import SidePhoto from "../../images/side-profile-bridge.jpeg";
import MainPhoto from "../../images/in-the-canyon.jpeg";


import "../../css/main.scss";

const HomePage = (props) => {
  const [isMobile, setIsMobile] = React.useState(false);

  //  responsible for change to mobile view
  const onWindowChange = () => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 810);
    }, false);
    console.log(isMobile, window.innerWidth);
  };
  React.useEffect(onWindowChange);

  return (
    <section className="page-container">
      <NavigationBar />
      <ContentSection
        isMobile = {isMobile}
        columnOne =
          {
            <div className="profile-photo">
              <img src={MainPhoto} alt="opening-pic" />
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
            </div>
          }
        columnTwo=
        {
          <div className="side-profile">
            <img src={SidePhoto} alt="side-pic" />
          </div>
        }
      />
      <section className="social-media-section">
        <ul className="nav-content-box">
          <li>
            <SocialIcon
              url="https://www.linkedin.com/in/joshua-boss/"
              bgColor="#e2eaec"
              />
          </li>
          <li>
            <SocialIcon
              url="https://github.com/jsboss5"
              bgColor="#e2eaec"
            />
          </li>
          <li>
          <SocialIcon
            url="mailto: joshua.boss@duke.edu"
            bgColor="#e2eaec"
            />
          </li>
        </ul>
      </section>
      <Footer/>
    </section>
  );
};

export default HomePage;
