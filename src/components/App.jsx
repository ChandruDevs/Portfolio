// App.js

import React, { useRef } from "react";
import styled from "styled-components";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import ExperienceSummary from "./Experience";
import Education from "./Education";
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Arial", sans-serif;
  font-size: 16px;
  background-color: #f4f4f4;
`;

const Nav = styled.nav`
  background-color: #333;
  color: white;
  padding: 5px 0;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: end;
`;

const NavItem = styled.li`
  margin: 0;
  button {
    font-size: 16px;
  }
`;

const NavLinkStyled = styled.button`
  color: white;
  background: none;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    color: yellow;
  }
`;

const Portfolio = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const professionalRef = useRef(null);
  const educationRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <Nav>
        <NavList>
          <div></div>
          <NavItem>
            <NavLinkStyled onClick={() => scrollToRef(aboutRef)}>
              About
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled onClick={() => scrollToRef(educationRef)}>
              Education
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled onClick={() => scrollToRef(professionalRef)}>
              Professional Experience
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled onClick={() => scrollToRef(projectsRef)}>
              Projects
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled onClick={() => scrollToRef(contactRef)}>
              Contact
            </NavLinkStyled>
          </NavItem>
        </NavList>
      </Nav>
      <div>
        <div ref={aboutRef}>
          <AboutMe />
        </div>
        <div ref={professionalRef}>
          <ExperienceSummary />
        </div>
        <div ref={educationRef}>
          <Education />
        </div>

        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <ContactMe />
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;
