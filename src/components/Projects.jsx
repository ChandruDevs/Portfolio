import React, { useState } from "react";
import styled from "styled-components";

const ProjectContainer = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  cursor: pointer;
`;
const MainTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Skills = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const MoreDetailsButton = styled.button`
  background-color: #e0e0e0;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

const GitHubLink = styled.a`
  display: block;
  margin-bottom: 10px;
`;

const Projects = () => {
  const [showPopupFormDetails, setShowPopupFormDetails] = useState(false);
  const [showProductivityMasterDetails, setShowProductivityMasterDetails] =
    useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const handleTogglePopupFormDetails = () => {
    setShowPopupFormDetails(!showPopupFormDetails);
  };

  const handleToggleProductivityMasterDetails = () => {
    setShowProductivityMasterDetails(!showProductivityMasterDetails);
  };
  const handlePortfolio = () => {
    setShowPortfolio(!showPortfolio);
  };

  return (
    <div>
      <MainTitle>Projects and Publications</MainTitle>
      <ProjectContainer>
        <Title onClick={handleTogglePopupFormDetails}>
          1 - PopupForm NPM Component
        </Title>
        <Description>
          Developed a customizable and interactive React component, PopupForm,
          to display forms within a popup/modal window. This component offers a
          variety of features, including:
          <ul>
            <li>
              Customizable form inputs, including text fields, emails,
              passwords, selects, radio buttons, etc.
            </li>
            <li>
              Callback function triggered upon form submission, passing the form
              data to enable custom handling.
            </li>
            <li>
              Form configuration defined using a configuration array
              (formContents), with each object representing a form element with
              properties such as input type, labels, placeholders, and
              validation requirements.
            </li>
          </ul>
        </Description>
        {!showPopupFormDetails && (
          <MoreDetailsButton onClick={handleTogglePopupFormDetails}>
            More Details
          </MoreDetailsButton>
        )}
        {showPopupFormDetails && (
          <>
            <Description>
              Benefits of using PopupForm:
              <ul>
                <li>
                  Provides a clean and interactive way to gather user input.
                </li>
                <li>
                  Offers flexibility in designing forms to suit various needs.
                </li>
                <li>
                  Enables easy integration into React projects for collecting
                  structured data from users.
                </li>
              </ul>
            </Description>
            <Skills>Skills: HTML, CSS, Javascript, Reactjs, Webpack</Skills>
            <GitHubLink href="https://github.com/ChandruDevs/PopupFormPackage">
              githublink: https://github.com/ChandruDevs/PopupFormPackage
            </GitHubLink>
            <MoreDetailsButton onClick={handleTogglePopupFormDetails}>
              Show Less
            </MoreDetailsButton>
          </>
        )}
      </ProjectContainer>

      <ProjectContainer>
        <Title onClick={handleToggleProductivityMasterDetails}>
          2 - ProductivityMaster-Chrome Extension
        </Title>
        <Description>
          ProductivityMaster is a powerful extension that helps you to manage
          your tasks, stay organized, and maintain healthy web browsing habits.
          With a focus on boosting your efficiency, it combines three essential
          features in a single, user-friendly package:
          <ul>
            <li>
              Task Management: Create, edit, and delete tasks effortlessly.
              ProductivityMaster Plus simplifies your daily to-do lists, helping
              you prioritize and track your progress with ease.
            </li>
            <li>
              Tab Limiter: Say goodbye to tab overload. Our tab limiter feature
              allows you to set restrictions on the number of tabs you can have
              open at any given time. This ensures a clutter-free workspace and
              minimizes distractions.
            </li>
            <li>
              Website Usage Timer: Maintain a healthy work-life balance by
              setting time limits for specific websites. ProductivityMaster Plus
              helps you manage your online time effectively, boosting your focus
              and productivity.
            </li>
          </ul>
        </Description>
        {!showProductivityMasterDetails && (
          <MoreDetailsButton onClick={handleToggleProductivityMasterDetails}>
            More Details
          </MoreDetailsButton>
        )}
        {showProductivityMasterDetails && (
          <>
            <Skills>
              Skills: Django, Chrome Extension, Webpack, React.js, AWS
            </Skills>
            <GitHubLink href="https://github.com/ChandruDevs/PopupFormPackage">
              Frontend: https://github.com/ChandruDevs/PopupFormPackage
            </GitHubLink>
            <GitHubLink href="https://github.com/ChandruDevs/myserver">
              Backend: https://github.com/ChandruDevs/myserver
            </GitHubLink>
            <MoreDetailsButton onClick={handleToggleProductivityMasterDetails}>
              Show Less
            </MoreDetailsButton>
          </>
        )}
      </ProjectContainer>

      <ProjectContainer>
        <Title onClick={handleToggleProductivityMasterDetails}>
          3 - Portfolio
        </Title>
        <Description>
          I built a React JS portfolio website to showcase my web development
          skills and experience. It's responsive, modern, and easy to use.
          Visitors can browse my projects, contact me, and share my work on
          social media.
        </Description>
        {!showProductivityMasterDetails && (
          <MoreDetailsButton onClick={handlePortfolio}>
            More Details
          </MoreDetailsButton>
        )}
        {showPortfolio && (
          <>
            <Skills>Skills: HTML,CSS,React JS</Skills>
            <GitHubLink href="https://github.com/ChandruDevs/PopupFormPackage">
              https://github.com/ChandruDevs/PopupFormPackage
            </GitHubLink>
            <MoreDetailsButton onClick={handlePortfolio}>
              Show Less
            </MoreDetailsButton>
          </>
        )}
      </ProjectContainer>
    </div>
  );
};

export default Projects;
