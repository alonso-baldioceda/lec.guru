import React from "react";
import styled from "styled-components";

// Variables
import { prefix, colors } from "../shared/styles.js";

// Styles
const StyledSocialItem = styled.a`
  color: ${colors.white} !important;
  font-weight: 400;
  text-decoration: none !important;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${colors.sycamore} !important;
  }
`;

const SocialItem = ({ link, icon }) => (
  <StyledSocialItem
    className={`me-3 d-inline-block ${prefix}-social-item`}
    href={link}
  >
    <i className={`bi bi-${icon} fs-2`}></i>
  </StyledSocialItem>
);

export default SocialItem;
