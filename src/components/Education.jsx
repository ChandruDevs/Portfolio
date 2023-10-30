// Education.js

import React from "react";
import styled from "styled-components";

const EducationContainer = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Institution = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

const Degree = styled.p`
  font-style: italic;
`;

const Education = () => {
  return (
    <EducationContainer>
      <Title>Education</Title>
      <Institution>Sri Krishna College of Technology,Coimbatore</Institution>
      <Degree>Bachelor of Science in Computer Science 2019 - 2023</Degree>
    </EducationContainer>
  );
};

export default Education;
