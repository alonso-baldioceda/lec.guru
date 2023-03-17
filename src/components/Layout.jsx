import React from "react";
import styled from "styled-components";

// Components
import Header from "./header/Header";
import Footer from "./footer/Footer";

// Styles
import GlobalStyle from "./../shared/global.js";

const Main = styled.main`
  padding-top: 106px;

  @media (min-width: 981px) {
    padding-top: 132px;
  }
`;

const Layout = ({ children, footer, header }) => {
  return (
    <>
      <GlobalStyle />
      <Header brand={header.brand} nav={header.nav} top={header.top} />
      <Main className="main" id="main">
        {children}
      </Main>
      <Footer
        nav={footer.nav}
        contact={footer.contact}
        business={footer.business}
        blog={footer.blog}
        copyright={footer.copyright}
      />
    </>
  );
};

export default Layout;
