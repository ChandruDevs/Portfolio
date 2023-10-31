import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ContactInfo = styled.div`
  font-size: 16px;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Title>Contact Information</Title>
      <ContactInfo>
        <p>Phone: 9943557905</p>
        <p>Email: chandru20001@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/chandru20001">Linkedin</a>
        </p>
      </ContactInfo>
    </ContactContainer>
  );
};

export default Contact;
