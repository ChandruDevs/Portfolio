// AboutMe.js

import React from "react";
import styled from "styled-components";

const IntroContainer = styled.div`
  background-color: #f4f4f4;
  margin-bottom: 20px;
  border-radius: 5px;
`;

const Name = styled.h1`
  font-size: 28px;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

const AboutMe = () => {
  return (
    <IntroContainer>
      <Name>Chandru P</Name>
      <Paragraph>
        Full Stack Developer with 1+ year of experience building interactive web
        applications using HTML, CSS, JavaScript, React, and Django. Expertise
        in developing Chrome extensions and creating user-friendly applications.
        Passionate about learning and adapting to new technologies.
      </Paragraph>
    </IntroContainer>
  );
};

export default AboutMe;
