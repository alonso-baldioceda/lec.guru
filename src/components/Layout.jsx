import React, { useState } from "react";
import { I18nextProvider } from "react-i18next";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

// Components
import Header from "./header/Header";
import Footer from "./footer/Footer";

// Translate
import i18next from "./../i18e";

// Global Styles
import GlobalStyle from "./../shared/global.js";

const Main = styled.main`
  padding-top: 72px;

  @media (min-width: 992px) {
    padding-top: 82px;
  }
`;

const Layout = ({ children }) => {
  const { t } = useTranslation();

  const trCommon = t("common", {
    returnObjects: true,
  });

  const { header, footer } = trCommon;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <I18nextProvider i18n={i18next}>
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
    </I18nextProvider>
  );
};

export default Layout;
