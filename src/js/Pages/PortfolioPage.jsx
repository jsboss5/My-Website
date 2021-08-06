import React from "react";
import ContentSection from "../Components/ContentSection";
import DropDownSection from "../Components/DropDownSection";
import NYC from '../../images/nyc-scape.png';
import YextLogo from '../../images/yext-logo.png';
import AryeoLogo from '../../images/aryeo_logo.png';
import DamlLogo from '../../images/daml-logo.png';
import PhoenixLogo from '../../images/phoenix-logo.png';
import BloonsLogo from '../../images/bloons-logo.png';
import SpecialOlympicsLogo from '../../images/special-olympics-logo.png'
import ButtonComponent from "../Components/ButtonComponent";
import "../../css/main.scss";

const PortfolioPage = (props) => {
  const MOBILE_THRESH = 1000;
  const NAV_MOBILE_THRESH = 800;

  const [isMobile, setIsMobile] =
    React.useState(window.innerWidth<MOBILE_THRESH);
  const [navIsMobile, setNavIsMobile] =
    React.useState(window.innerWidth<NAV_MOBILE_THRESH);

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
        setNavIsMobile(window.innerWidth < NAV_MOBILE_THRESH);
      }
    }, false);
  };
  React.useEffect(onWindowChange, []);

  const nameMobileClass = isMobile ? 'mobile' : '';

  //  on load it makes sure links to top and resizes if necessary;
  React.useEffect(()=> window.scrollTo(0,0), []);
  React.useEffect(()=> setIsMobile(window.innerWidth < MOBILE_THRESH), []);

  return (
    <section className="page-container">
      <ContentSection
        isMobile={isMobile}
        //  hardcoded (should be same pixels as nav MOBILE_THRESH)
        disableHover={navIsMobile}
        columnOne=
          {
            <div className="work-title-text-wrapper">
              <h1>work portfolio</h1>
              <div className={"download-resume-wrapper " + nameMobileClass}>
                <ButtonComponent text="Download Resume ∨"/>
              </div>
            </div>
          }
        columnTwo=
          {
            <div className="work-title-photo-wrapper">
              <img src={NYC} alt="cityScape"/>
            </div>
          }
      />
      {/* WORK EXPERIENCE SECTION */}
      <DropDownSection
        text="work experience"
        isOpen={true}
        content =
        {
          <div className="drop-down-content-wrapper">
             {/* Yext Internship */}
            <ContentSection
              isMobile={isMobile}
              disableHover={true}
              columnOne={
                  <div className="company-logo-wrapper">
                    <img src={YextLogo}/>
                  </div>
              }
              columnTwo={
                  <div className="experience-description-text-wrapper" >
                    <h1 className="company-text">Yext</h1>

                    <h2 className="experience-title-text">
                      Software Engineering Intern <span className="dates">(summer 2021)</span>
                    </h2>
                    <p className="experience-description-text">
                      Lorum ipsum delor impuasldkjflakjsdf ;asdkjf;laskj asd;lfkj skdfas;dlfkjas;ldkjf a;sldkfj a;lskdjf ;alskjdf ;alksjd f;laskj fd;laksjd f;lakjs d;flakjs d;flkajs d;flkajs ;dlkfj as;lkdfj a;slkdjfadkkdkkdkd kdkdfj skdfj sdkfjs dfkj sdkfj skjf skdjf ksdjf ksdjf ksdj fksj fksdjf ksdjf ksdjf lasd;f lasjkf ;laskjf ;laksjfd ;laksdjf a;lksjdf ;laksdjf ;alskjdf ;alskjdf ;alskjd f;laksj fd;lakdjs f;laskjf ;alskjfd l;askjf ;laskjf ;alksjdf ;laskjdf ;aslkdjf ;aslkdj fa;lskdjf ;alsdkfj a;slkdfj ;alskdjf a;lksdjf ;alksdjf ;alkdjsf ;alksdjf ;alskjdf ;laskdjf ;alskdjf ;alskdjf ;alskdjf ;alskdjf ;alskjdf ;alkdjf ;alskjf ;alsdkfj ;alskfj ;alskdfj ;aslkdjf ;aslkfj ;aslkfj ;aslkfdj ;aldkjf ;aslkjfd ;aslkdfj a;
                    </p>
                  </div>
              }
            />

            {/* Aryeo section */}
            <ContentSection
              isMobile={isMobile}
              disableHover={true}
              columnOne={
                  <div className="company-logo-wrapper">
                    <img src={AryeoLogo}/>
                  </div>
              }
              columnTwo={
                  <div className="experience-description-text-wrapper" >
                    <h1 className="company-text">Aryeo</h1>
                    <h2 className="experience-title-text">
                      Machine Learning Intern <span className="dates">(summer 2020)</span>
                    </h2>
                    <p className="experience-description-text">
                      Lorum ipsum delor impuasldkjflakjsdf ;asdkjf;laskj asd;lfkj skdfas;dlfkjas;ldkjf a;sldkfj a;lskdjf ;alskjdf ;alksjd f;laskj fd;laksjd f;lakjs d;flakjs d;flkajs d;flkajs ;dlkfj as;lkdfj a;slkdjfadkkdkkdkd kdkdfj skdfj sdkfjs dfkj sdkfj skjf skdjf ksdjf ksdjf ksdj fksj fksdjf ksdjf ksdjf lasd;f lasjkf ;laskjf ;laksjfd ;laksdjf a;lksjdf ;laksdjf ;alskjdf ;alskjdf ;alskjd f;laksj fd;lakdjs f;laskjf ;alskjfd l;askjf ;laskjf ;alksjdf ;laskjdf ;aslkdjf ;aslkdj fa;lskdjf ;alsdkfj a;slkdfj ;alskdjf a;lksdjf ;alksdjf ;alkdjsf ;alksdjf ;alskjdf ;laskdjf ;alskdjf ;alskdjf ;alskdjf ;alskdjf ;alskjdf ;alkdjf ;alskjf ;alsdkfj ;alskfj ;alskdfj ;aslkdjf ;aslkfj ;aslkfj ;aslkfdj ;aldkjf ;aslkjfd ;aslkdfj a;
                    </p>
                  </div>
              }
            />
          </div>
        }
        />

        {/* Campus Leadership Section */}
        <DropDownSection
        text="campus leadership"
        isOpen={true}
        content =
        {
          <div className="drop-down-content-wrapper">
             {/* DAML section */}
            <ContentSection
              isMobile={isMobile}
              disableHover={true}
              columnOne={
                  <div className="company-logo-wrapper daml">
                    <img src={DamlLogo}/>
                  </div>
              }
              columnTwo={
                  <div className="experience-description-text-wrapper" >
                    <h1 className="company-text">duke applied machine learning</h1>

                    <h2 className="experience-title-text">
                      Director <span className="dates">(november 2020 - present)</span>
                    </h2>
                    <p className="experience-description-text">
                      Lorum ipsum delor impuasldkjflakjsdf ;asdkjf;laskj asd;lfkj skdfas;dlfkjas;ldkjf a;sldkfj a;lskdjf ;alskjdf ;alksjd f;laskj fd;laksjd f;lakjs d;flakjs d;flkajs d;flkajs ;dlkfj as;lkdfj a;slkdjfadkkdkkdkd kdkdfj skdfj sdkfjs dfkj sdkfj skjf skdjf ksdjf ksdjf ksdj fksj fksdjf ksdjf ksdjf lasd;f lasjkf ;laskjf ;laksjfd ;laksdjf a;lksjdf ;laksdjf ;alskjdf ;alskjdf ;alskjd f;laksj fd;lakdjs f;laskjf ;alskjfd l;askjf ;laskjf ;alksjdf ;laskjdf ;aslkdjf ;aslkdj fa;lskdjf ;alsdkfj a;slkdfj ;alskdjf a;lksdjf ;alksdjf ;alkdjsf ;alksdjf ;alskjdf ;laskdjf ;alskdjf ;alskdjf ;alskdjf ;alskdjf ;alskjdf ;alkdjf ;alskjf ;alsdkfj ;alskfj ;alskdfj ;aslkdjf ;aslkfj ;aslkfj ;aslkfdj ;aldkjf ;aslkjfd ;aslkdfj a;
                    </p>
                  </div>
              }
            />

            {/* Special Olympics */}
            <ContentSection
              isMobile={isMobile}
              disableHover={true}
              columnOne={
                  <div className="company-logo-wrapper">
                    <img src={SpecialOlympicsLogo}/>
                  </div>
              }
              columnTwo={
                  <div className="experience-description-text-wrapper" >
                    <h1 className="company-text">Duke Special Olympics</h1>
                    <h2 className="experience-title-text">
                      President <span className="dates">(april 2020 - present)</span>
                    </h2>
                    <p className="experience-description-text">
                      Lorum ipsum delor impuasldkjflakjsdf ;asdkjf;laskj asd;lfkj skdfas;dlfkjas;ldkjf a;sldkfj a;lskdjf ;alskjdf ;alksjd f;laskj fd;laksjd f;lakjs d;flakjs d;flkajs d;flkajs ;dlkfj as;lkdfj a;slkdjfadkkdkkdkd kdkdfj skdfj sdkfjs dfkj sdkfj skjf skdjf ksdjf ksdjf ksdj fksj fksdjf ksdjf ksdjf lasd;f lasjkf ;laskjf ;laksjfd ;laksdjf a;lksjdf ;laksdjf ;alskjdf ;alskjdf ;alskjd f;laksj fd;lakdjs f;laskjf ;alskjfd l;askjf ;laskjf ;alksjdf ;laskjdf ;aslkdjf ;aslkdj fa;lskdjf ;alsdkfj a;slkdfj ;alskdjf a;lksdjf ;alksdjf ;alkdjsf ;alksdjf ;alskjdf ;laskdjf ;alskdjf ;alskdjf ;alskdjf ;alskdjf ;alskjdf ;alkdjf ;alskjf ;alsdkfj ;alskfj ;alskdfj ;aslkdjf ;aslkfj ;aslkfj ;aslkfdj ;aldkjf ;aslkjfd ;aslkdfj a;
                    </p>
                  </div>
              }
            />
          </div>
        }
        />
        {/* Campus Leadership Section */}
      <DropDownSection
        text="featured projects"
        isOpen={true}
        content =
        {
          <div className="drop-down-content-wrapper">
             {/* Yext Internship */}
            <ContentSection
              isMobile={isMobile}
              disableHover={true}
              columnOne={
                  <div className="company-logo-wrapper bloons">
                    <img src={BloonsLogo}/>
                  </div>
              }
              columnTwo={
                  <div className="experience-description-text-wrapper" >
                    <h2 className="experience-title-text">
                    Bloons Tower Defense Game <span className="dates">(october - december 2020)</span>
                    </h2>
                    <p className="experience-description-text">
                      Lorum ipsum delor impuasldkjflakjsdf ;asdkjf;laskj asd;lfkj skdfas;dlfkjas;ldkjf a;sldkfj a;lskdjf ;alskjdf ;alksjd f;laskj fd;laksjd f;lakjs d;flakjs d;flkajs d;flkajs ;dlkfj as;lkdfj a;slkdjfadkkdkkdkd kdkdfj skdfj sdkfjs dfkj sdkfj skjf skdjf ksdjf ksdjf ksdj fksj fksdjf ksdjf ksdjf lasd;f lasjkf ;laskjf ;laksjfd ;laksdjf a;lksjdf ;laksdjf ;alskjdf ;alskjdf ;alskjd f;laksj fd;lakdjs f;laskjf ;alskjfd l;askjf ;laskjf ;alksjdf ;laskjdf ;aslkdjf ;aslkdj fa;lskdjf ;alsdkfj a;slkdfj ;alskdjf a;lksdjf ;alksdjf ;alkdjsf ;alksdjf ;alskjdf ;laskdjf ;alskdjf ;alskdjf ;alskdjf ;alskdjf ;alskjdf ;alkdjf ;alskjf ;alsdkfj ;alskfj ;alskdfj ;aslkdjf ;aslkfj ;aslkfj ;aslkfdj ;aldkjf ;aslkjfd ;aslkdfj a;
                    </p>
                  </div>
              }
            />

            {/* Aryeo section */}
            <ContentSection
              isMobile={isMobile}
              disableHover={true}
              columnOne={
                  <div className="company-logo-wrapper">
                    <img src={PhoenixLogo}/>
                  </div>
              }
              columnTwo={
                  <div className="experience-description-text-wrapper" >
                    {/* <h1 className="company-text">The Phoenix Project</h1> */}
                    <h2 className="experience-title-text">
                    The Phoenix Project <span className="dates">(summer 2020, 2021)</span>
                    </h2>
                    <p className="experience-description-text">
                      Lorum ipsum delor impuasldkjflakjsdf ;asdkjf;laskj asd;lfkj skdfas;dlfkjas;ldkjf a;sldkfj a;lskdjf ;alskjdf ;alksjd f;laskj fd;laksjd f;lakjs d;flakjs d;flkajs d;flkajs ;dlkfj as;lkdfj a;slkdjfadkkdkkdkd kdkdfj skdfj sdkfjs dfkj sdkfj skjf skdjf ksdjf ksdjf ksdj fksj fksdjf ksdjf ksdjf lasd;f lasjkf ;laskjf ;laksjfd ;laksdjf a;lksjdf ;laksdjf ;alskjdf ;alskjdf ;alskjd f;laksj fd;lakdjs f;laskjf ;alskjfd l;askjf ;laskjf ;alksjdf ;laskjdf ;aslkdjf ;aslkdj fa;lskdjf ;alsdkfj a;slkdfj ;alskdjf a;lksdjf ;alksdjf ;alkdjsf ;alksdjf ;alskjdf ;laskdjf ;alskdjf ;alskdjf ;alskdjf ;alskdjf ;alskjdf ;alkdjf ;alskjf ;alsdkfj ;alskfj ;alskdfj ;aslkdjf ;aslkfj ;aslkfj ;aslkfdj ;aldkjf ;aslkjfd ;aslkdfj a;
                    </p>
                  </div>
              }
            />
          </div>
        }
        />
    </section>
  );
};

export default PortfolioPage;
