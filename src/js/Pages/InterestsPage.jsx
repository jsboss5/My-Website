import React, { useEffect } from "react";

import ContentSection from "../Components/ContentSection";
import SidePhoto from "../../images/side-profile-bridge.jpeg";
import MainPhoto from "../../images/in-the-canyon.jpeg";
import ButtonComponent from "../Components/ButtonComponent";


import "../../css/main.scss";

const InterestsPage = (props) => {
  const [isMobile, setIsMobile] = React.useState(false);

  //  responsible for change to mobile view
  const onWindowChange = () => {
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 900);
    }, false);
    console.log(isMobile, window.innerWidth);
  };
  React.useEffect(onWindowChange);

  //  when link is clicked it scrolls to top
  React.useEffect(()=> window.scrollTo(0,0));

  return (
    <section className="page-container">
      <ContentSection
        isMobile = {isMobile}
        columnOne =
          {
              <div>Hello</div>
          }
        columnTwo=
          {
              <div>there</div>
          }
      />
    </section>

  );
};

export default InterestsPage;
