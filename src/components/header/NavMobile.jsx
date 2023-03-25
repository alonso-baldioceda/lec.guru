import React from "react";
import styled from "styled-components";
import classnames from "classnames";

// Components
import NavItem from "./NavItem";

// Variables
import { prefix, color } from "../../shared/styles.js";

// Styles
const StyledNavMobile = styled.div`
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(4px);
  bottom: 0;
  display: none;
  left: 0;
  opacity: 0;
  position: fixed;
  right: 0;
  transition: opacity 1.125s ease-in-out;
  top: 0;
  z-index: 300;

  &.open {
    align-items: center;
    display: flex !important;
    opacity: 1;
  }

  ul {
    li {
      display: block;
      padding-right: 22px;

      &:last-child {
        padding-right: 0;
      }

      a {
        color: ${color.black} !important;
        font-size: 32px;
        font-weight: 900;
        text-decoration: none;
      }
    }
  }
`;

const NavMobile = ({ nav, isOpen, setIsOpen }) => (
  <StyledNavMobile
    className={classnames({ open: isOpen }, `${prefix}-nav-mobile`)}
  >
    <ul className="m-0 p-5">
      {nav.map((item, index) => (
        <li key={index}>
          <NavItem
            to={item.link}
            label={item.label}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </li>
      ))}
    </ul>
  </StyledNavMobile>
);

export default NavMobile;
