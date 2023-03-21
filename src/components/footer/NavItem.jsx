import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";

// Variables
import { prefix, color } from "./../../shared/styles.js";

// Styles
const StyledNavItem = styled((props) => <GatsbyLink {...props} />)`
  text-decoration: none;

  span {
    border-bottom: 2px solid ${color.transparent};
    color: ${color.white};
    font-weight: 400;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      border-color: ${color.sycamore};
      color: ${color.white};
    }
  }
`;

const NavItem = ({ link, label }) => (
  <StyledNavItem className={`d-block ${prefix}-footer-nav-item`} to={link}>
    <span>{label}</span>
  </StyledNavItem>
);

export default NavItem;
