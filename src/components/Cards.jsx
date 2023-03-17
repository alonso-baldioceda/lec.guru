import React from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

// Variables
import { color, prefix } from "./../shared/styles.js";

// Styles
const StyledCard = styled((props) => <GatsbyLink {...props} />)`
  p {
    border: 0;
    font-size: 100%;
    margin: 0;
    padding-bottom: 0px;
    padding: 0;
  }

  div {
    color: ${color.chateau};
    margin: 0 auto;
    max-width: 550px;
    text-align: center;
  }

  h4 {
    background: 0 0;
    border: 0;
    /* font-size: 20px; */
    font-style: normal;
    font-weight: bold;
    line-height: 1em;
    margin: 0;
    outline: 0;
  }

  span {
    color: ${color.wedgewood};
    font-size: 96px;
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
