import React from "react";
import ContentSection from "../Components/ContentSection";
import ButtonComponent from "../Components/ButtonComponent";
import {useHistory} from 'react-router-dom';
import WithYsanne from "../../images/with-ysanne.jpg";
import FirstDay from "../../images/first-day-of-work.jpg";
import FlorencePhoto from "../../images/florence_profile.jpg";
import MainPhoto from "../../images/in-the-canyon.jpg";
import WakeSurf from "../../images/wake-surf-photo.jpg"



import "../../css/main.scss";

const AboutPage = ({
  navMobThresh,
  onLearnMore,
  }) => {
  const MOBILE_THRESH = 1000;
  const REAL_MOBILE_THRESH = 500;

  const [isMobile, setIsMobile] =
    React.useState(window.innerWidth<MOBILE_THRESH);
  const [isRealMobile, setIsRealMobile] =
    React.useState(window.innterWidth<REAL_MOBILE_THRESH);
  const [navIsMobile, setNavIsMobile] =
    React.useState(window.innerWidth<navMobThresh);

  //  this is css class for actual mobile phone
  const realMobileClass = isRealMobile ? 'real-mobile' : '';

  // create history object for button to interests page
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

  const nameMobileClass = isMobile ? 'mobile' : '';

  //  on load it makes sure links to top and resizes if necessary;
  React.useEffect(()=> window.scrollTo(0,0), []);
  React.useEffect(()=> setIsMobile(window.innerWidth < MOBILE_THRESH), []);
  React.useEffect(()=> setIsRealMobile(window.innerWidth < REAL_MOBILE_THRESH), []);

  return (
    <section className="page-container">
      <ContentSection
        disableHover={navIsMobile}
        isMobile={isMobile}
        columnOne =
          {
            <div className={"about-me-title-wrapper " + realMobileClass}>
              <h1 className="about-me-title">
                about me
              </h1>
              <h1 className={"name-header " + nameMobileClass}>
                josh boss
              </h1>
            </div>
          }
        columnTwo=
        {
          <div className="canyon-photo-wrapper">
            <img src={MainPhoto} alt="side-pic" />
          </div>
        }
      />
       <ContentSection
        isMobile={isMobile}
        columnOne=
        {
          <div className="ysanne-photo-wrapper">
            <img src={WithYsanne} alt="side-pic" />
            <p className="photo-caption">
              My friend Ysanne and I in front of the Duke Chappel
            </p>
          </div>
        }
        columnTwo=
        {
          <div className="about-me-content-one-wrapper">
            <h2 className="subtitle">who am I ?</h2>
            <p className="about-me-content">
              I am a recent graduate of Duke University where I enjoyed studying Computer Science and Mathematics. Experienced in software engineering, applied machine learning, and product management, I am always looking for ways to leverage technology for social innovation. At Duke, I spent my time in a few unique areas. I helped lead the Duke Applied Machine Learning Group (DAML), a project-based undergraduate tech organization focused on bringing machine learning to small businesses. In addition to running DAML, I TA'd for CS classes and helped run Duke's undergraduate Special Olympics chapter which holds annual flag football and basketball leagues with local Special Olympics athletes. 
            </p>
          </div>
        }
      />
      <ContentSection
        isMobile={isMobile}
        columnOne=
        {
          <div className="about-me-content-one-wrapper">
            <h2 className="subtitle">what am I up to?</h2>
            <p className="about-me-content">
              A lot - Since graduating, I’ve been super busy! After school finished in May, I went on a mini tour of Europe with some friends where I explored a ton of new cities and cultures. My favorite spot was in the Azores, a small island chain off the coast of Portugal. I got to go surfing, hiking, and even learned to drive a manual car!
            </p>
            <br/>
            <p className="about-me-content">
              After the endless summer finally ended in September, I started my job as a SWE at Meta (Facebook) in NYC. I learned so much, and met so many cool people in my first few months! Unfortunately, due to Meta’s mass layoffs, (they let go of all new joiners without performance review), I recently lost my job and am now on the hunt for new opportunities. I'm looking at the situation as an opportunity to find a company working on something I'm more excited about!
            </p>
          </div>
        }
        columnTwo=
        {
          <div className="first-day-photo-wrapper">
            <img src={FlorencePhoto} alt="side-pic" />
            <p className="photo-caption">
              Smiling my heart out in Florence!
            </p>
          </div>
        }
      />
      <ContentSection
        isMobile={isMobile}
        columnOne=
        {
          <div className="wake-surf-photo-wrapper">
            <img src={WakeSurf} alt="side-pic" />
            <p className="photo-caption">
              Wakesurfing at camp Skylemar where I worked after my Freshman year!
            </p>
          </div>
        }
        columnTwo=
        {
          <div className="about-me-content-one-wrapper">
            <h2 className="subtitle">what am I into ?</h2>
              <p className="about-me-content">
                Outside of school and work, I have a number of different passions and interests in a variety of areas. Whether it's surfing, running, lifting, or pickup basketball, I love to stay active. In addition, I've played piano my entire life and recently discovered a new found passion for jazz music and improvisation. I've recently become obsessed with poker and have always been a die hard Miami sports fan.
              </p>
              <ButtonComponent
                text="my interests!"
                onClick= {()=> {
                  history.push("/interests");
                  onLearnMore();  //  callback function which highlights proper page.
              }}
              />
          </div>
        }
      />
    </section>
  );
};

export default AboutPage;
