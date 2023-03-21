import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";

// Variables
import { prefix, color } from "./../../shared/styles.js";

// Styles
const StyledNavItem = styled((props) => <GatsbyLink {...props} />)`
  border: 2px solid transparent;
  color: ${color.white};
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 14px;
  padding-bottom: 4px;
  transition: all 0.25s ease-out;
  text-decoration: none;

  &:hover {
    color: ${color.white};
    border-bottom: 2px solid #fff;
  }
`;

const NavItem = ({ to, label }) => (
  <StyledNavItem className={`${prefix}-nav-item`} to={to}>
    {label}
  </StyledNavItem>
);

export default NavItem;
