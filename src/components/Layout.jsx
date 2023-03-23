import React, { useState } from "react";
import styled from "styled-components";

// Components
import Header from "./header/Header";
import Footer from "./footer/Footer";

// Global Styles
import GlobalStyle from "./../shared/global.js";

const Main = styled.main`
  padding-top: 72px;

  @media (min-width: 992px) {
    padding-top: 82px;
  }
`;

const Layout = ({ children, footer, header }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Header
        brand={header.brand}
        nav={header.nav}
        top={header.top}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Main className="main" id="main">
        {children}
      </Main>
      <Footer
        nav={footer.nav}
        copyright={footer.copyright}
        social={footer.social}
        contact={footer.contact}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default Layout;
