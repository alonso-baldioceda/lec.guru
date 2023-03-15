import React from "react";

// Components
import Header from "./header/Header";
import Footer from "./footer/Footer";

// Styles
import GlobalStyle from "./../shared/global.js";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main className="main" id="main">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
