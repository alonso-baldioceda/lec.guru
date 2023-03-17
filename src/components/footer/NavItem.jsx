import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";

// Variables
import { prefix, color } from "./../../shared/styles.js";

// Styles
const StyledNavItem = styled((props) => <GatsbyLink {...props} />)`
  color: ${color.white};
  display: flex;
  font-size: 15px;
  line-height: 23px;
  position: relative;
  text-decoration: none;

  &:hover {
    color: ${color.white};
  }
`;

const Bullet = styled.span`
  position: relative;
  margin-right: 10px;

  &::before {
    content: "•";
  }
`;

const Label = styled.span`
  color: ${color.white};
`;

const NavItem = ({ to, label }) => (
  <StyledNavItem className={`${prefix}-footer-nav-item`} to={to}>
    <Bullet />
    <Label>{label}</Label>
  </StyledNavItem>
);

export default NavItem;
