import React from "react";
import styled from "styled-components";
import classnames from "classnames";

// Components
import NavItem from "./NavItem";
import LanguageSelectorMobile from "./LanguageSelectorMobile";

// Variables
import { prefix, colors } from "../../shared/styles.js";

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
        color: ${colors.black} !important;
        font-size: 32px;
        font-weight: 900;
        text-decoration: none;
      }
    }
  }
`;

const NavMobile = ({
  nav,
  isOpen,
  setIsOpen,
  languagesLabel,
  changeLocale,
  language,
}) => {
  const languages = {
    en: "English",
    es: "Español",
  };

  return (
    <StyledNavMobile
      className={classnames({ open: isOpen }, `${prefix}-nav-mobile`)}
    >
      <div className="p-5 w-100">
        <div className="mb-5">
          <ul className="m-0 w-100 p-0">
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
        </div>
        <LanguageSelectorMobile
          languagesLabel={languagesLabel}
          languages={languages}
          changeLocale={changeLocale}
          language={language}
        />
      </div>
    </StyledNavMobile>
  );
};

export default NavMobile;
