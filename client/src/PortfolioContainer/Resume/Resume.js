import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/animations";
import "../Resume/Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.link ? props.link : ""}</span>
        </div>
      </div>
    );
  };
  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 100 },
    { skill: "React JS", ratingPercentage: 100 },
    { skill: "Redux", ratingPercentage: 100 },
    { skill: "Typescript", ratingPercentage: 100 },
    { skill: "HTML", ratingPercentage: 100 },
    { skill: "CSS", ratingPercentage: 100 },
    { skill: "Bootstrap", ratingPercentage: 100 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: "2021" },
      link: <a href="https://stephenportfolio.herokuapp.com/">Personal Portfolio</a>,
      description:
        `Developed a one page portfolio website that helps showcase my skills, projects and higlights about myself.`,
      subHeading: "Technologies Used: React JS, Bootstrap, PS",
    },
    {
      title: " Cocktails API Webpage ",
      duration: { fromDate: "2020", toDate: "2021" },
      link: <a href="https://deeeraaa.github.io/cocktailsDB/">Cocktail API landing page</a>,
      description:
        `Created a software application that returns API information from the cocktails API database.
        This application helps users search several
        information about their favorite cocktails`,
      subHeading: "Technologies Used: React JS, Bootstrap, PS",
    },
    {
      title: "Mobile Cart Shop",
      duration: { fromDate: "2020", toDate: "2021" },
      link: <a href="https://deeeraaa.github.io/cart/">Mobile Cart </a>,
      description:
        `Created a mobile shop Cart to add mobile phones to a shopping cart `,
      subHeading: "Technologies Used: React JS, CSS",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={" EFS BOOTCAMP"}
        subHeading={"FRONTEND SOFTWARE DEVELOPMENT"}
        fromDate={"2021"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"Federal University of Technology Akure"}
        subHeading={"MASTERS OF TECHNOLOGY IN APPLIED GEOPHYSICS"}
        fromDate={"2018"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"Federal University of Technology Akure"}
        subHeading={"BACHELOR OF TECHNOLOGY IN APPLIED GEOPHYSICS"}
        fromDate={"2010"}
        toDate={"2015"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Ehizeex Technology"}
        subHeading={"FRONTEND DEVELOPER"}
        fromDate={"2021"}
        toDate={"2021"}
      />
      
            <div className="experience-description">
        <span className="resume-description-text">
          Currently working with the CTO to build comprehensive user friendly one-page web applications.
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          -Worked with members of my team to develop several components of React web pages.{" "}
        </span>
        <br />
      </div>





      
      <ResumeHeading
        heading={"WhiteSpaces Labs"}
        subHeading={"FRONTEND DEVELOPER INTERN"}
        fromDate={"2020"}
        toDate={"2021"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Helped in several capacities to the success of several projects 
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          -Worked with the frontend team to build lots of high end web applications.{" "}
        </span>
        <br />
        <span className="resume-description-text">
          -I was stretched and tasked with replicating User Interfaces produced by the UI/UX team.{" "}
        </span>
        <br />
          </div>
      </div>,
      <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {programmingSkillsDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            {/* <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage-bar"
              ></div>
            </div> */}
          </div>
        ))}
      </div>
      , /* PROJECTS */
      <div className="resume-screen-container" key="projects">
        {projectsDetails.map((projectsDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectsDetails.title}
            subHeading={projectsDetails.subHeading}
            description={projectsDetails.description}
            fromDate={projectsDetails.duration.fromDate}
            toDate={projectsDetails.duration.toDate}
            link={projectsDetails.link}
          />
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Teaching"
          description="Apart from being a tech enthusiast and a code writer,
          I also love and enjoy teaching, impacting people as much as i can.
          Teaching is an art i enjoy so much"
        />
        <ResumeHeading
          heading="Playing Chess"
          description="Playing Chess is an art i enjoy alot. Chess is a game that
          challenges me with thinking in differet routes at the same time, whilst you are
          thinking of how best you can attack, defending is even more imperative"
        />
        <ResumeHeading
          heading="Gaming"
          description="I like to challenge my reflexes a lot while competing in football games, 
          pushing the rank and having interactive gaming sessions excites me well. Playing with colleagues
          also help build strong bond among ourselves"
        />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="ooopps..no internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };
  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">

              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}
