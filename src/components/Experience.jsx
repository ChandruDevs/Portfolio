// ExperienceSummary.js

import React from "react";
import styled from "styled-components";

const ExperienceContainer = styled.div`
  margin-bottom: 20px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Role = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

const Company = styled.p`
  font-style: italic;
`;

const ExperienceSummary = () => {
  return (
    <ExperienceContainer>
      <Title>Experience Summary</Title>

      <Role>Full Stack Developer - Hippo Video | June 2023 - Present</Role>
      <Company>Hippo Video</Company>
      <ul>
        <li>Enhanced category and library pages, improving user navigation.</li>
        <li>
          Resolved system issues, ensuring product stability and enhanced user
          experience.
        </li>
        <li>
          Developed "multiselect" npm package for simplified options selection.
        </li>
        <li>
          Reduced Webpack bundle size by 60%, significantly improving loading
          experience for users.
        </li>
        <li>
          Resolved various Sentry and customer-reported issues, improving
          product reliability and user satisfaction.
        </li>
        <li>
          Contributed to Hippo Video SDK development, enabling seamless
          integration for developers.
        </li>
        <li>
          Optimized product performance by conducting minor bug fixes and
          enhancing load times in Ruby on Rails.
        </li>
        <li>
          Proactively resolved bugs in Hippo Video Chrome extension and
          developed new features.
        </li>
      </ul>

      <Role>
        Full Stack Developer Intern - Hippo Video | Aug 2022 - May 2023
      </Role>
      <Company>Hippo Video</Company>
      <ul>
        <li>
          Migrated local storage code to a new module, ensuring seamless support
          for both existing and new users.
        </li>
        <li>
          Proficiently debugged and resolved New Relic issues, ensuring seamless
          system performance.
        </li>
        <li>Optimized delivery page loading time</li>
        <li>
          Played a vital role in the implementation of the release of shares and
          tracking feature, including the creation of a customizable clipboard.
        </li>
        <li>
          Strong knowledge of database management systems (MySQL, PostgreSQL)
          and version control systems (Git).
        </li>
        <li>
          Ability to work effectively with both front-end and back-end
          technologies to develop and maintain high-quality web applications
          that are scalable, reliable, and secure.
        </li>
      </ul>

      <Title>Skills</Title>
      <p>
        Webpack, SQL, HTML5, npm, Git, Web Development, Chrome Extensions, HTML,
        React.js, JavaScript, Backbone.js, Ruby on Rails,Django
      </p>
    </ExperienceContainer>
  );
};

export default ExperienceSummary;
