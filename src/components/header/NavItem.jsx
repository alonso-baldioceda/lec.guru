import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";

// Variables
import { prefix, color } from "./../../shared/styles.js";

// Styles
const StyledNavItem = styled((props) => <GatsbyLink {...props} />)`
  color: ${color.botti};
  font-size: 19px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 14px;
  margin: 0;
  padding: 0;
  transition: all 0.4s ease-in-out;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`;

const NavItem = ({ to, label }) => (
  <StyledNavItem className={`${prefix}-nav-item`} to={to}>
    {label}
  </StyledNavItem>
);

export default NavItem;
