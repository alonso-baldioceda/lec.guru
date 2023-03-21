import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";

// Variables
import { prefix } from "./../../shared/styles.js";

// Styles
const StyledBrand = styled((props) => <GatsbyLink {...props} />)`
  width: 60px;

  @media (min-width: 992px) {
    width: 70px;
  }

  img {
    max-width: 100% !important;
    width: 100% !important;
  }
`;

const Brand = ({ alt, icon, to }) => {
  return (
    <StyledBrand className={`${prefix}-brand`} to={to}>
      <img src={`images/${icon}.svg`} alt={alt} />
    </StyledBrand>
  );
};

export default Brand;
