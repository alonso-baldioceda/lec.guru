import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

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

const Brand = ({ to }) => {
  return (
    <StyledBrand className={`${prefix}-brand`} to={to}>
      <StaticImage
        src="./../../images/logo.svg"
        alt="LEAN Entreprise Consulting"
        placeholder="blurred"
        layout="fixed"
        width={60}
        height={60}
      />
    </StyledBrand>
  );
};

export default Brand;
