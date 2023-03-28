import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";

// Variables
import { prefix, colors } from "./../../shared/styles.js";

// Styles
const StyledNavItem = styled((props) => <GatsbyLink {...props} />)`
  text-decoration: none;

  span {
    border-bottom: 2px solid ${colors.transparent};
    color: ${colors.white};
    font-weight: 400;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      border-color: ${colors.sycamore};
      color: ${colors.white};
    }
  }
`;

const NavItem = ({ link, label }) => (
  <StyledNavItem className={`d-block ${prefix}-footer-nav-item`} to={link}>
    <span>{label}</span>
  </StyledNavItem>
);

export default NavItem;
