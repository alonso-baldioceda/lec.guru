import React from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

// Variables
import { color, prefix } from "./../shared/styles.js";

// Styles
const StyledLinkButton = styled((props) => <GatsbyLink {...props} />)`
  background-color: transparent;
  border-radius: 3px;
  border: 2px solid ${color.white};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.7em;
  margin-top: 20px;
  padding: 0.3em 1em;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    border-color: ${color.transparent};
  }

  /* 
  &::after{
    width: 30px;
    height: 30px;
    background: red;
    position: absolute;
    content: "\35";
    font-size: 20px;
  } */

  span {
    color: ${color.white};
    font-size: 20px;
    transition: all 300ms ease-out;
    will-change: transform;
    position: relative;
  }
`;

const Label = styled.span`
  color: ${color.white};
  font-size: 20px;
  transition: all 300ms ease-out;
  position: relative;
`;

const Arrow = styled.span`
  color: ${color.white};
  font-size: 30px;
  transition: all 300ms ease-out;
`;

const LinkButton = ({ to, label }) => {
  return (
    <StyledLinkButton className={`${prefix}-btn-link`} to={to}>
      <Label>{label}</Label>
      <Arrow className="arrow"> &#8250;</Arrow>
    </StyledLinkButton>
  );
};

export default LinkButton;
