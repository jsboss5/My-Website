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

const PortfolioPage = ({navMobThresh}) => {
  const MOBILE_THRESH = 1000;
  const RESUME_PATH = 'files/website-resume.pdf';

  const [isMobile, setIsMobile] =
    React.useState(window.innerWidth<MOBILE_THRESH);
  const [navIsMobile, setNavIsMobile] =
    React.useState(window.innerWidth<navMobThresh);

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
                <ButtonComponent
                  text="Download Resume ∨"
                  onClick={()=>window.open(RESUME_PATH)}
                  />
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
                    <img src={YextLogo} alt="yext"/>
                  </div>
              }
              columnTwo={
                  <div className="experience-description-text-wrapper" >
                    <h1 className="company-text">Yext</h1>

                    <h2 className="experience-title-text">
                      Software Engineering Intern <span className="dates">(summer 2021)</span>
                    </h2>
                    <p className="experience-description-text">
                      This summer, I had  the incredible opportunity to work as a Software Engineering Intern at Yext, a B2B software company focused on helping people find the information they're looking for on the internet. I worked on Yexts' new flagship product called Answers, which brings google quality search to the enterprise. By using Answers, companies can provide an AI and NLP driven search experience to their users hosted on their own individual platforms. With my interested in ML, it was a natural fit for me to work on this cutting edge technology. I interned on a 4-person full stack team called Juno, which owns the platform used by the answers administrators (representatives from a client company who configure and monitor the search experience).
                    </p>
                    <br/>
                    <p className="experience-description-text">
                      On team Juno, I was treated as a full-time software engineer and given the corresponding responsibilites. Rather than working on an isolated intern project all summer, I owned and implemented various full stack features now being used by millions of real users. I worked with PMs and designers to implement the front end portions of these features using react, javascript, html, and css. I also set up RPC endpoints using proto3 for these features and implemented the backend logic in java. I utilized SQL (insert java sql library) to make the necessary database fetches to integrate with the rest of the feautures. I wrote extensive integration and unit tests for backend logic, databse ooperations, and even jest tests for front end components. I responded to tech ops tickets involving my features and maintained them through their lifecycle. In addition to these full stack features, I got experience with implementing latency telemetry using prometheus and visualizing with grafana. I had an incredible summer and learaned so much.
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
                    <img src={AryeoLogo} alt="aryeo"/>
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
                    <img src={DamlLogo} alt="daml"/>
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
                    <img src={SpecialOlympicsLogo} alt="SONC"/>
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
                    <img src={BloonsLogo} alt="bloons"/>
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
                    <img src={PhoenixLogo} alt="phnx"/>
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
