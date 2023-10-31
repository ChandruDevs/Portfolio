// AboutMe.js

import React from "react";
import styled from "styled-components";

const IntroContainer = styled.div`
  background-color: #f4f4f4;
  margin-bottom: 20px;
  border-radius: 5px;
`;

const Name = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  h1 {
    font-size: 28px;
    margin-bottom: 10px;
    color: #333;
  }

  a {
    text-decoration: none;
    color: #007bff;
    font-size: 16px;
    border: 2px solid #007bff;
    padding: 8px 16px;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:hover {
      background-color: #007bff;
      color: #fff;
    }
  }
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

const AboutMe = () => {
  return (
    <IntroContainer>
      <Name>
        <h1>Chandru P</h1>
        <a
          href="https://drive.google.com/uc?id=16lqO5XlFfXRlbv9cIsyRG83g2SCUIBOU"
          target={"_blank"}
        >
          View Resume
        </a>
        <a
          href="https://drive.google.com/uc?export=download&id=16lqO5XlFfXRlbv9cIsyRG83g2SCUIBOU"
          download
          target={"_blank"}
        >
          Download Resume
        </a>
      </Name>
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
