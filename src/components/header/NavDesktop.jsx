import React from "react";
import styled from "styled-components";

// Components
import NavItem from "./NavItem";

// Variables
import { prefix, colors } from "../../shared/styles.js";

// Styles
const StyledNavDesktop = styled.nav`
  li {
    display: inline-block;
    padding-right: 22px;

    &:last-child {
      padding-right: 0;
    }

    .${prefix}-nav-item {
      border: 2px solid transparent;
      color: ${colors.white};
      font-size: 16px;
      letter-spacing: 1px;
      line-height: 14px;
      padding-bottom: 4px;
      transition: all 0.25s ease-out;
      text-decoration: none;

      &.active,
      &:hover {
        color: ${colors.white};
        border-bottom: 2px solid ${colors.white};
      }
    }
  }
`;

const NavDesktop = ({ nav }) => (
  <StyledNavDesktop className={`${prefix}-nav-desktop`}>
    <ul className="mb-0 p-0">
      {nav.map((item, index) => (
        <li key={index}>
          <NavItem to={item.link} label={item.label} />
        </li>
      ))}
    </ul>
  </StyledNavDesktop>
);

export default NavDesktop;
