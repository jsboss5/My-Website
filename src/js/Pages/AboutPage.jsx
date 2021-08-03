import React, { useEffect } from "react";
import NavigationBar from "../Components/NavigationBar";
import Footer from  "../Components/Footer";
import ContentSection from "../Components/ContentSection";
import { SocialIcon } from 'react-social-icons';

import SidePhoto from "../../images/side-profile-bridge.jpeg";
import MainPhoto from "../../images/in-the-canyon.jpeg";


import "../../css/main.scss";

const AboutPage = (props) => {
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
      {/* <NavigationBar /> */}
      <ContentSection
        isMobile={isMobile}
        columnOne =
          {
            <div className="about-me">
              <h2 className="subtitle">
                about me
              </h2>
              <p className="personal-blurb">
               This is a new page lets fucking go.
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
    </section>
  );
};

export default AboutPage;
