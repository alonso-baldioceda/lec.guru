import React from "react";
import styled from "styled-components";

// Components
import NavItem from "./NavItem";

// Variables
import { prefix } from "./../../shared/styles.js";

// Styles
const StyledNav = styled.nav`
  li {
    display: inline-block;
    padding-right: 22px;

    &:last-child {
      padding-right: 0;
    }
  }
`;

const Nav = ({ nav }) => (
  <StyledNav className={`${prefix}-nav-desktop`}>
    <ul className="mb-0 p-0">
      {nav.map((item, index) => (
        <li key={index}>
          <NavItem to={item.link} label={item.label} />
        </li>
      ))}
    </ul>
  </StyledNav>
);

export default Nav;
