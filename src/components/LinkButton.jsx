import React from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

// Variables
import { color, prefix } from "./../shared/styles.js";

// Styles
const StyledLinkButton = styled((props) => <GatsbyLink {...props} />)`
  color: ${color.black};
  text-align: center;
  background-color: transparent;
  border: 2px solid ${color.black};
  font-family: "PT Serif", Georgia, "Times New Roman", serif;
  text-align: center;
  display: inline-block;
  margin-top: 20px;
  text-shadow: none;
  text-decoration: none;
  position: relative;
  padding: 0.3em 1em;
  border-radius: 3px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.7em !important;
  transition: all 0.2s;
  /* arrow motion */
  span {
    display: inline-block;
    position: relative;
    transition: all 300ms ease-out;
    will-change: transform;
    color: ${color.transparent};
    font-size: 30px;
  }

  div:hover {
    transform: translate3d(-0.5rem, 0, 0);
    color: ${color.black};
    border: 2px solid ${color.transparent};
  }
  &:hover span {
    transform: translate3d(0.5rem, 0, 0);
    color: ${color.black};
    border: 2px solid ${color.transparent};
  }
`;

const LinkButton = ({ to, label }) => {
  return (
    <StyledLinkButton className={`${prefix}-btn-link`}>
      <div>
        <a>{label}</a>
        <span> &#8250;</span>
      </div>
    </StyledLinkButton>
  );
};

export default LinkButton;
