import React  from "react";

import ContentSection from "../Components/ContentSection";
import Piano from "../../images/best-piano.png";
import Fishing from "../../images/fishing.png"
import ChickenWaffles from "../../images/chicken-and-waffles.jpg";
import PianoPerformance from "../../images/piano-performance.png";

import "../../css/main.scss";

const InterestsPage = ({navMobThresh}) => {
  const MOBILE_THRESH = 1100;
  const [isMobile, setIsMobile] =
    React.useState(window.innerWidth<MOBILE_THRESH);
  const [navIsMobile, setNavIsMobile] =
    React.useState(window.innerWidth<navMobThresh);

  //  responsible for change to mobile view
  //  makes sure component is mounted before changing state.
  const componentIsMounted = React.useRef(true)
  React.useEffect(() => {
      return () => {
          componentIsMounted.current = false
      }
  }, []);

  //  resize listener
  const onWindowChange = () => {
    window.addEventListener('resize', () => {
      if(componentIsMounted.current){
        setIsMobile(window.innerWidth < MOBILE_THRESH);
        setNavIsMobile(window.innerWidth < navMobThresh);
      }
    }, false);
  };
  React.useEffect(onWindowChange, [navMobThresh]);

  //  when link is clicked it scrolls to top and resize if necessary.
  React.useEffect(()=> window.scrollTo(0,0), []);
  React.useEffect(()=> setIsMobile(window.innerWidth < MOBILE_THRESH), []);

  return (
    <section className="page-container">
      <ContentSection
        isMobile = {isMobile}
        disableHover={navIsMobile}
        columnOne =
          {
            <div className="interests-main-photo">
              <img src={Piano} alt="opening-pic" />
              {/* <p className="artist-caption">create by Christina Wang</p> */}
            </div>
          }
        columnTwo=
          {
              <div className="interests-title">
                <h2 className="subtitle">my</h2>
                <h1>interests</h1>
              </div>
          }
      />
       <ContentSection
        isMobile = {isMobile}
        columnOne =
          {
            <div className="content-description-text">
                <h2 className="subtitle">on the water</h2>
                <p>Raised in beautiful Jupiter, Florida, the ocean has always been my second home. I've enjoyed fishing with family and friends for as long as I can remember. More recently, I've developed a passion for surfing. When I'm home, I make it to the beach to surf more days than I don't. There's nothing like dawn patrol on a weekend morning! </p>
            </div>
          }
        columnTwo=
          {
            <div className="fishing-photo">
              <img src={Fishing} alt="fishing"/>
              <p className="photo-caption">me, fishing the jupiter inlet</p>
            </div>
          }
      />
      <ContentSection
        isMobile = {isMobile}
        columnOne=
          {
            <div className="performance-photo">
              <img src={PianoPerformance} alt="fishing"/>
              <p className="photo-caption">practicing my senior recital piece, khachaturian toccata, before the concert</p>
            </div>
          }
        columnTwo =
          {
            <div className="content-description-text">
                <h2 className="subtitle">musician at heart</h2>
                <p>I started playing piano when I was 8 years old after begging my parents to get me lessons. We lived by a local music store and my mom would always take me there to kill time. I majored in piano at public arts magnet schools in both middle and high school where I was classically trained. In class, I had 1-2 hours of practice time per day, and had opportunities to arrange and perform music in front of large audiences. Since coming to Duke, I've fallen in love with Jazz music, and started taking lessons with a local jazz pianist. I'm heavily influenced by some of the great jazz pianists like Oscar Peterson and Wynton Kelly. </p>
            </div>
          }
      />
      <ContentSection
        isMobile = {isMobile}
        columnOne =
          {
            <div className="content-description-text">
                <h2 className="subtitle">food food food</h2>
                <p> Over the past year I've gotten super into cooking and baking. Some of my favorites to make are burgers, salmon, tostones, and even chicken and waffles! Over quarantine, I, like everyone else, got really into baking sourdough breads. Throughout the year, I've tried my hand at learaning all different types of cuisine. I always make sure to include some vegetables though, as evidenced by the barely visible piece of cawliflower at the bottom of the adjacent photo.</p>
            </div>
          }
        columnTwo=
          {
            <div className="food-photo">
              <img src={ChickenWaffles} alt="fishing"/>

              <p className="photo-caption">chicken and waffles (and cawliflower)</p>
            </div>
          }
      />

    </section>

  );
};

export default InterestsPage;
