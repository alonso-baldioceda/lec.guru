import React, { useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

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
    <>
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
    </>
  );
};

export default Layout;
