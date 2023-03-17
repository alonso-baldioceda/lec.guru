import React from "react";
import styled from "styled-components";

// Variables
import { prefix, color } from "../../shared/styles.js";
import { icons } from "../../shared/icons.js";

// Styles
const StyledTop = styled.div`
  background-color: ${color.botti};
  display: flex;
  height: 40px;

  svg {
    width: 15px;
    margin-right: 10px;

    path {
      fill: ${color.white};
    }
  }
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 1080px;
  width: 80%;

  @media (min-width: 981px) {
    justify-content: flex-start;
  }
`;

const Link = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

const Span = styled.span`
  color: ${color.white};
  font-size: 15px;
  font-weight: 600;
`;

const Top = ({ phone, email }) => (
  <StyledTop className={`${prefix}-header-top`}>
    <Container>
      <Link href={`tel:$${phone.href}`}>
        <Span dangerouslySetInnerHTML={{ __html: icons[phone.icon] }} />
        <Span>{phone.label}</Span>
      </Link>
      <Link href={`mailto:${email.href}`}>
        <Span dangerouslySetInnerHTML={{ __html: icons[email.icon] }} />
        <Span>{email.label}</Span>
      </Link>
    </Container>
  </StyledTop>
);

export default Top;
