import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

// Variables
import { prefix } from "./../../shared/styles.js";
import { icons } from "./../../shared/icons.js";

// Styles
const StyledBrand = styled((props) => <div {...props} />)`
  height: 70px;

  img {
    max-width: 80px !important;
    width: 100% !important;
  }
`;

const Brand = ({ alt, to }) => {
  return (
    <StyledBrand className={`${prefix}-brand`}>
      <img src="images/logo.svg" alt="" />
    </StyledBrand>
  );
};

export default Brand;
