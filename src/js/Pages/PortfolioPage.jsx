import React from "react";
import ContentSection from "../Components/ContentSection";
import DropDownSection from "../Components/DropDownSection";
import NYC from '../../images/nyc-scape.jpg';
import PalantirLogo from '../../images/palantir_logo.png';
import MetaLogo from '../../images/Meta_logo.png';
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
  const REAL_MOBILE_THRESH = 500;
  const RESUME_PATH = 'files/resume_november-2022.pdf';

  const [isMobile, setIsMobile] =
    React.useState(window.innerWidth<MOBILE_THRESH);
  const [isRealMobile, setIsRealMobile] =
    React.useState(window.innterWidth<REAL_MOBILE_THRESH);
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
        setIsRealMobile(window.innerWidth< REAL_MOBILE_THRESH);
      }
    }, false);
  };

  //  this is css class for actual mobile phone
  const realMobileClass = isRealMobile ? 'real-mobile' : '';

  React.useEffect(onWindowChange, [navMobThresh]);

  const nameMobileClass = isMobile ? 'mobile' : '';

  //  on load it makes sure links to top and resizes if necessary;
  React.useEffect(()=> window.scrollTo(0,0), []);
  React.useEffect(()=> setIsMobile(window.innerWidth < MOBILE_THRESH), []);
  React.useEffect(()=> setIsRealMobile(window.innerWidth < REAL_MOBILE_THRESH), []);

  return (
    <section className="page-container">
      <ContentSection
        isMobile={isMobile}
        //  hardcoded (should be same pixels as nav MOBILE_THRESH)
        disableHover={navIsMobile}
        columnOne=
          {
            <div className={"work-title-text-wrapper "+ realMobileClass}>
              <h1>work portfolio</h1>
              <div className={"download-resume-wrapper " + nameMobileClass}>
                <ButtonComponent
                  text="download resume ∨"
                  onClick={()=>window.open(RESUME_PATH)}
                  />
              </div>
            </div>
          }
        columnTwo=
          {
            <div className={"work-title-photo-wrapper " + realMobileClass}>
              <img src={NYC} alt="cityScape"/>
            </div>
          }
      />
      {/* WORK EXPERIENCE SECTION */}
      <DropDownSection
        text="work experience"
        isOpen={true}
        isMobile={isMobile}
        isRealMobile={isRealMobile}
        content =
        {
          <div className="drop-down-content-wrapper">
             {/* Palantir Job */}
             <ContentSection
              isMobile={isMobile}
              disableHover={true}
              columnOne={
                  <div className="company-logo-wrapper">
                    <img src={PalantirLogo} alt="palantir"/>
                  </div>
              }
              columnTwo={
                  <div className="experience-description-text-wrapper" >
                    <h1 className="company-text">palantir</h1>

                    <h2 className="experience-title-text">
                      forward deployed software engineer <span className="dates">(january 2023 - present)</span>
                    </h2>
                    <p className="experience-description-text">
                      I just started my new role and couldn't be more excited about it.
                    </p>
                    <br/>
                    <p className="experience-description-text">
                    </p>
                  </div>
              }
            />

             {/* Meta Job */}
             <ContentSection
              isMobile={isMobile}
              disableHover={true}
              columnOne={
                  <div className="company-logo-wrapper">
                    <img src={MetaLogo} alt="meta"/>
                  </div>
              }
              columnTwo={
                  <div className="experience-description-text-wrapper" >
                    <h1 className="company-text">meta</h1>

                    <h2 className="experience-title-text">
                      software engineer <span className="dates">(september 2022 - november 2022)</span>
                    </h2>
                    <p className="experience-description-text">
                      I started full time at Meta in their NYC office in September of 2022. Although I was only afforded the opportunity to work there for a few months, I learned a ton and made a substantial impact on the teams I worked with. Over the course of my time at Meta, I completed multiple projects across product, mobile, and infrastructure teams, partnering with a number of different engineers and engineering managers. Due to a hiring freeze instituted only a week into my job, I was in “engineering bootcamp” for the entirety of my time there. This meant that I was not placed on a team, and instead had to search for things to work on myself. Luckily, I relentlessly sought out work I was interested in, and I learned a ton as a result. Despite my best efforts though, they unfortunately let me go in early November. They dissapointingly laid off the entire new grad engineer cohort without conducting any performance review.
                    </p>
                    <br/>
                    <p className="experience-description-text">
                    That said, there were a three main areas that I made an impact. The first was with the GraphQL Mobile Infrastructure team. I mostly worked on their service, “WhereIsSchema,” that was utilized by mobile engineers to track the progress of their GraphQL schema updates. I built multiple features for this service, including adding a widget displaying the correct infra on-call rotation for different Meta products. I also added metric tracking for their service from scratch, in order to track and categorize website visits and display them in time series dashboards. In addition to GraphQL Mobile, I also worked with the ML Ops team to improve ML pipeline reliability by writing A/B and unit tests for “Fookeep” their feature extraction service, and “FBLSim” a model diagnosis service. Lastly, I worked closely with the Instagram Originality team, which produces originality scores for instagram content in the hopes of reducing the proliferation of unoriginal (stolen) content on the platform. In particular, I added new functionality to their async backfilling system, which they use to score older content via their newest ML models. Despite the way it ended, I really enjoyed my time at Meta and learned so much. 
                    </p>
                  </div>
              }
            />
             
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
                    <h1 className="company-text">yext</h1>

                    <h2 className="experience-title-text">
                      software engineering intern <span className="dates">(summer 2021)</span>
                    </h2>
                    <p className="experience-description-text">
                      Last summer, I had the incredible opportunity to work as a Software Engineering Intern at Yext, a B2B software company focused on helping people find the information they're looking for on the internet. I worked on Yexts' new flagship product called Answers, which brings google quality search to the enterprise. By using Answers, companies can provide an AI and NLP-driven search experience to their users hosted on their own individual platforms. With my interest in ML, it was a natural fit for me to work on this cutting-edge technology. I interned on a 4-person full stack team called Juno, which owns the platform used by the answers administrators (representatives from a client company who configure and monitor the search experience).
                    </p>
                    <br/>
                    <p className="experience-description-text">
                      On team Juno, I was treated as a full-time software engineer and given the corresponding responsibilities. Rather than working on an isolated intern project all summer, I owned and implemented various full-stack features now being used by millions of real users. I worked with PMs and designers to implement the front end portions of these features using React, Javascript, HTML, and CSS. I also set up RPC endpoints using proto3 for these features and implemented the backend logic in java. I utilized SQL to make the necessary database fetches to integrate with the rest of the feautures. I wrote extensive integration and unit tests for backend logic, database opperations, and even jest tests for front end components. I responded to tech ops tickets involving my features and maintained them through their lifecycle. In addition to these full stack features, I got experience with implementing latency telemetry using Prometheus and visualizing with Grafana. I had an incredible summer and learned so much.
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
                    <h1 className="company-text">aryeo</h1>
                    <h2 className="experience-title-text">
                      machine learning intern <span className="dates">(summer 2020)</span>
                    </h2>
                    <p className="experience-description-text">
                      Aryeo is a Boston-based startup building a real estate content management platform for real estate agents and real estate photographers. The service allows agents and photographers an all-in-one platform for storing and managing information and photos about their properties. Over the 2020 summer, I was tasked with developing a deep-learning object detection model to indentify and classify 30 types of household amenities in images found on Aryeo's platform. There were a number of different use cases for this technology, including the validation of property descriptions and integrations for more intelligent property search capabilities. Because the founders of this startup had very little ML experience, me and my fellow intern were tasked with designing and implementing the entire Computer vision system.
                    </p>
                    <br/>
                    <p className="experience-description-text">
                      As far as technical specifics, I conducted transfer learning on a pre-trained RetinaNet model, utilizing Pytorch and Juptyer Notebook, hosted on a Google Cloud Virtual Machine. Specifically, I used Facebook AI's Detectron2 object detection library, and used custom labeled data from Aryeo's own user data base to refine the model. In addition, I improved the system's mean Average Precision (mAP) by over 10%, by introducing both model ensembling (combining results of different models), and pseudo-labeling (using the model to generate more training data). I used Streamlit to create a UI for the model, allowing users to upload photos of their homes and see labeled bounding boxes around various household amenities. I also had the opportunity to present my work to a panel of google engineers, the Duke Machine Learning community, and the Aryeo team. Overall, this was an awesome experience that grew my interest in ML.
                    </p>
                    <br/>
                    <p className="experience-description-text bolded-text">
                     final presentation: <a href="https://docs.google.com/presentation/d/1IfdzXHqs6FoRqbN-TAmi58Rg0cJVRgQjvG3PbjCJiDw/edit?usp=sharing">here</a>
                    </p>
                    <p className="experience-description-text bolded-text">
                     featured code: <a href="https://github.com/jsboss5/Aryeo-Amenity-Detection">here</a>
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
        isMobile={isMobile}
        isRealMobile={isRealMobile}
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
                      director <span className="dates">(november 2020 - January 2022)</span>
                    </h2>
                    <p className="experience-description-text">
                      Duke Applied Machine Learning (DAML) is a group of undergraduate, master's, and Ph.D. students specializing in data science, machine learning, and software engineering. We provide various types of technical support for startups, fortune 500 companies, Duke professors, and even Duke students. While we've provided real value to many different clients, we also pride ourselves on being an education-first organization. We train young undergraduate students in contemporary industry technologies and concepts that they frankly can't get in the classroom. Many of our students apply having only taken 1 or 2 undergraduate CS courses. We train them in one of 4 tracks that most interests them: Software Engineering, Machine Learning / Data Science, Hardware Engineering, or Product Management. We then place them on a project team that we match to an interested client looking to build or improve their own platform. This provides real-world experience for students, and incredible (low cost) technical support for clients. In addition to our normal cohort which runs each semester, we also run the Duke Innovation Studio,  our own internal startup incubator, and Tech for Equity, an internship program matching technical students to nonprofits.
                    </p>
                    <br/>
                    <p className="experience-description-text">
                      As director of this organization, I am responsible for a number of different moving parts and have accomplished a lot in my time here. DAML has been (BY FAR) my most rewarding and time-consuming engagement at Duke. As the director, I lead exec board meetings and maintain a high-level understanding of what is going on in our 4 primary divisions, as these division leads report to me. I also lead all client communication and outreach meetings, from initial emails to finalizing project details. In these client meetings, I use my engineering experience and expertise in both Machine Learning and Software Engineering to assess and scope out potential technical projects. This is similar to tech consulting and often requires getting very in-depth about a client's business and technical infrastructure. I led the project manaagement division, for which I wrote over 25 hours of PM coursework, lead all candidate interviews, and run PM team meetings. I also handle a number of different logistical operations for the organization. I've written contracts for both students and clients, handled payments to students via our LLC,  built out an incredibly complicated and extensive Airtable platform that automates our entire recruitment and project onboarding process, and have even recently started filing paperwork to form a national nonprofit with the goal of creating different satellite branches at different universities. Over my time here, I've doubled the number of projects we're working on, grew the organization from 50 to 250 active members, and have managed to dole out a total of over 300k in student stipends for technical projects through DAML and the Phoenix Project.
                    </p>
                    <br/>
                    <p className="experience-description-text bolded-text">
                     check out our website: <a href="https://www.dukeaml.com/">here</a>
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
                    <h1 className="company-text">duke special olympics</h1>
                    <h2 className="experience-title-text">
                      president <span className="dates">(april 2020 - May 2022)</span>
                    </h2>
                    <p className="experience-description-text">
                      Duke Special Olympics is Duke's chapter of the national nonprofit, Special Olympics. Special Olympics has the goal of giving individuals with physical and intellectual disabilites an opportunity to learn and grow through competing in various athletic endeavors. At Duke, we host what we call our Unified Sports League, an intramural type league that places Special Olympics athletes on teams with Duke students to compete in both Flag Football and Basketball. We also host health trainings monthly and coordinate other volunteer opportunities in the Durham county area for Duke students. We recently were just recognized as a Unifed Champion school, putting us in an elite class of only 100 universities in the world. During the pandemic, we had to change gears and host an online unified sports experience in which we met weekly and worked out together over zoom. Athletes and students always have a blast with Unified.
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
        isMobile={isMobile}
        isRealMobile={isRealMobile}
        content =
        {
          <div className="drop-down-content-wrapper">
             {/* Yext Internship */}
            <ContentSection
              isMobile={isMobile}
              disableHover={true}
              columnOne={
                  <div className="company-logo-wrapper bloons-pic">
                    <img src={BloonsLogo} alt="bloons"/>
                  </div>
              }
              columnTwo={
                  <div className="experience-description-text-wrapper" >
                    <h2 className="experience-title-text">
                    bloons tower defense game <span className="dates">(october - december 2020)</span>
                    </h2>
                    <p className="experience-description-text">
                      I and a group of 3 other friends decided to build from scratch, a remake of the famous "Bloons Tower Defense" game using java and javaFX. For those who don't know, Bloons Tower Defense is a tower defense game that allows users to strategically place different types of towers with different capabilities on a map to pop all targets before they traverse a preset track. We built the game with good design principles in mind and used the Model View Controller (MVC) project structure to organize our code. We designed our game with expansion in mind, using factory patterns, interfaces, and properties files for nearly all hard-coded values. This lets the developer easily change game features such as images for the game characters, the number of balloons for each level, and even the layout of the map. We included features such as coins, a tower shop, animations, splash screens, a map chooser with numerous maps, and even the obligatory annoying music! We also utilized extensive Junit testing with over 90% coverage.
                    </p>
                    <br/>
                    <p className="experience-description-text">
                      Personally, I was primarily responsible for backend API design, target movement logic, and controller design. I was responsible for implementing the Data API, Engine API, GamePiece API, Updatable API, and Factory API, which powered the game. I also developed a bidirectional map data structure to be used in the controller so the front end and back end could add and remove game pieces and their corresponding frontend/backend objects in constant time, improving the efficiency and design of the game. Overall, this project took hundreds of hours to complete. I HIGHLY encourage you to look at the code found below!
                    </p>
                    <br/>
                    <p className="experience-description-text bolded-text">
                     game code: <a href="https://www.dukeaml.com/">here</a>
                    </p>
                  </div>
              }
            />

            {/* Aryeo section */}
            <ContentSection
              isMobile={isMobile}
              disableHover={true}
              columnOne={
                  <div className="company-logo-wrapper phoenix-pic">
                    <img src={PhoenixLogo} alt="phnx"/>
                  </div>
              }
              columnTwo={
                  <div className="experience-description-text-wrapper" >
                    {/* <h1 className="company-text">The Phoenix Project</h1> */}
                    <h2 className="experience-title-text">
                    the phoenix project <span className="dates">(summer 2020, 2021)</span>
                    </h2>
                    <p className="experience-description-text">
                      The Phoenix Project is a summer program that matches Duke students to startups and large companies for full-time internships. In April of 2020, after losing my own internship due to the COVID-19 pandemic, I and a few friends had the idea to try and get everyone who lost internships an opportunity to work and grow their technical skillset while at home. We exhausted our personal and professional networks to set as many paid opportunities as possible. Our work paid off, and we gathered paid opportunities for over 200 students over 70 companies, including Twitter, Coursera, and the Department of Defense. In the summer of 2020, I was responsible for designing the organizational structure of the program, developing specific role specifications, and building out a program-wide Notion platform for 433 users. I worked with a contract attorney to generate contracts and conducted over 18 hours of interviews for 72 candidates.
                    </p>
                    <br/>
                    <p className="experience-description-text">
                      For summer 2021, I took on an even larger role, by leading the entire program. This time around I sourced all projects, led client calls, interviewed all students, and built out a thorough Aairtable platform. I helped raise the salary of each intern from 1 to 4 thousand dollars, and sorted out all payment, legal, and other logistical issues. In total, we've supplied our students with over 80 thousand dollars worth of stipends. Running the Phoenix Project has been an incredible experience!
                    </p>
                    <br/>
                    <p className="experience-description-text bolded-text">
                     check out our website: <a href="https://www.phoenix.dukeaml.com/">here</a>
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
