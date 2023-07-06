import React from "react";
import styled from "styled-components";

// Variables
import { prefix } from "./../../shared/styles.js";

// Components
import Brand from "./Brand";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import Close from "./Close";
// import LanguageSelectorDesktop from "./LanguageSelectorDesktop";

// Styles
const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  z-index: 1000;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 5px 20px 7px;

  @media (min-width: 992px) {
    padding: 10px 20px 12px;
  }
`;

const HideNav = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: flex;
  }
`;

const Header = ({
  brand,
  nav,
  isOpen,
  setIsOpen,
  languagesLabel,
  changeLocale,
  language,
}) => {
  // const languages = {
  //   en: "Eng",
  //   es: "Esp",
  // };

  return (
    <>
      {isOpen && (
        <NavMobile
          nav={nav}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          languagesLabel={languagesLabel}
          changeLocale={changeLocale}
          language={language}
        />
      )}
      <StyledHeader className={`bg-marino ${prefix}-header`}>
        <Container>
          <Brand {...brand} />
          <HideNav className="hide-nav">
            <NavDesktop nav={nav} />
            {/* <LanguageSelectorDesktop
              languages={languages}
              changeLocale={changeLocale}
              language={language}
            /> */}
          </HideNav>
          <div className="d-lg-none">
            <Close isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </Container>
      </StyledHeader>
    </>
  );
};

export default Header;
