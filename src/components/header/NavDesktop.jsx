import React from "react";
import styled from "styled-components";

// Components
import NavItem from "./NavItem";

// Variables
import { prefix, color } from "../../shared/styles.js";

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
      color: ${color.white};
      font-size: 16px;
      letter-spacing: 1px;
      line-height: 14px;
      padding-bottom: 4px;
      transition: all 0.25s ease-out;
      text-decoration: none;

      &:hover {
        color: ${color.white};
        border-bottom: 2px solid ${color.white};
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
