import React, { useState } from "react";
import styled from "styled-components";
import { I18nextProvider } from "react-i18next";
import { useStaticQuery, graphql } from "gatsby";

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
  const [isOpen, setIsOpen] = useState(false);

  const data = useStaticQuery(graphql`
    query LayoutQuery {
      allDataJson {
        edges {
          node {
            common {
              header {
                brand {
                  alt
                  icon
                  to
                }
                nav {
                  label
                  link
                }
                top {
                  email {
                    href
                    icon
                    label
                  }
                  phone {
                    href
                    icon
                    label
                  }
                }
              }
              footer {
                contact {
                  address
                  email
                  heading
                  phone
                }
                copyright
                nav {
                  heading
                  nav {
                    label
                    link
                  }
                }
                social {
                  heading
                  links {
                    icon
                    link
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const { allDataJson } = data || {};
  const { edges } = allDataJson || {};
  const node = edges[0].node;
  const { common } = node || {};
  const { header: headerData, footer: footerData } = common || {};

  return (
    <I18nextProvider i18n={i18next}>
      <GlobalStyle />
      <Header
        brand={headerData.brand}
        nav={headerData.nav}
        top={headerData.top}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Main className="main" id="main">
        {children}
      </Main>
      <Footer
        nav={footerData.nav}
        copyright={footerData.copyright}
        social={footerData.social}
        contact={footerData.contact}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </I18nextProvider>
  );
};

export default Layout;
