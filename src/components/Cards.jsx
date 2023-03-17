import React from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

// Variables
import { color, prefix } from "./../shared/styles.js";
// Styles
const StyledCard = styled((props) => <GatsbyLink {...props} />)`
  p {
    margin: 0;
    padding: 0;
    padding-bottom: 0px;
    border: 0;
    font-size: 100%;
  }
  div {
    color: #9ca7ad;
    font-family: "PT Serif", Georgia, "Times New Roman", serif;
    text-align: center;
    position: relative;
    max-width: 550px;
    margin: 0 auto;
  }
  h4 {
    box-sizing: border-box;
    padding-bottom: 10px;
    line-height: 1em;
    font-weight: bold;
    font-style: normal;
    text-transform: none;
    text-decoration: none;
    font-family: "Montserrat", Helvetica, Arial, Lucida, sans-serif;
    font-size: 20px;
    margin: 0;
    padding: 0;
    padding-bottom: 0px;
    border: 0;
    outline: 0;
    background: 0 0;
  }

  span {
    color: #44749c;
    opacity: 0;
    display: inline-block;
    moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: ETmodules;
    font-size: 96px;
    font-weight: 400;
    font-style: normal;
    font-variant: normal;
    line-height: 1;
    text-transform: none;
    content: attr(data-icon);
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    background: 0 0;
    vertical-align: baseline;
  }
`;

const Cards = ({ tittle, label }) => {
  return (
    <StyledCard className={`${prefix}-card`}>
      <div>
        <div>
          <span></span>
        </div>
        <h4>{tittle}</h4>
        <p>{label}</p>
      </div>
    </StyledCard>
  );
};

export default Cards;
