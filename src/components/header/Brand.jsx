import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

// Variables
import { prefix } from "./../../shared/styles.js";

// Styles
const StyledBrand = styled((props) => <div {...props} />)`
  width: 156px;

  @media (min-width: 981px) {
    width: 200px;
  }

  img {
    max-width: 100% !important;
    width: 100% !important;
  }
`;

const Brand = ({ alt, to }) => {
  return (
    <StyledBrand className={`${prefix}-brand`}>
      <GatsbyLink to={to}>
        <StaticImage
          src="./../../images/logo.jpeg"
          alt={alt ? alt : ""}
          placeholder="blurred"
          layout="fullWidth"
        />
      </GatsbyLink>
    </StyledBrand>
  );
};

export default Brand;
