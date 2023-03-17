import React from "react";
import styled from "styled-components";

// Variables
import { prefix } from "./../../shared/styles.js";

// Components
import Brand from "./Brand";
import Nav from "./Nav";
import Top from "./Top";

// Styles
const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  z-index: 1000;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 5px 20px 7px;

  @media (min-width: 981px) {
    padding: 10px 20px 12px;
  }
`;

const HideNav = styled.div`
  display: none;

  @media (min-width: 981px) {
    display: flex;
  }
`;

const Header = ({ brand, nav, top }) => (
  <StyledHeader className={`bg-marino ${prefix}-header`}>
    <Top phone={top.phone} email={top.email} />
    <Container>
      <Brand {...brand} />
      <HideNav className="hide-nav">
        <Nav nav={nav} />
      </HideNav>
    </Container>
  </StyledHeader>
);

export default Header;
