import React from "react";
import styled from "styled-components";

// Variables
import { color, prefix } from "./../../shared/styles.js";

// Styles
const StyledCopyright = styled.div`
  background-color: ${color.chateau};
  padding: 15px 0;
  text-align: center;

  @media (min-width: 981px) {
    text-align: left;
  }
`;

const Text = styled.p`
  color: ${color.white};
  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
  margin: 0;
`;

const Copyright = ({ text }) => (
  <StyledCopyright className={`${prefix}-footer-copyright`}>
    <div className="container">
      <Text>{text}</Text>
    </div>
  </StyledCopyright>
);

export default Copyright;
