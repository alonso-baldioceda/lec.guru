import React from "react";
import styled from "styled-components";
// import { GatsbyImage } from "gatsby-plugin-image";

// Components
import RichText from "../components/RichText";

// Variables
import { prefix, colors } from "../shared/styles.js";

// Styles
const StyledCardV4 = styled.div`
  P {
    color: #fff;
    text-align: center;
  }

  h5 {
    /* background-color: ${colors.sycamore}; */
    border-bottom: 4px solid ${colors.sycamore};
    padding: 6px 10px;
  }
`;

const CardV4 = ({ text, image, alt, name, position }) => {
  return (
    <StyledCardV4
      className={`d-flex justify-content-center flex-column w-75 mx-auto ${prefix}-card-v4`}
    >
      <RichText text={text} />
      <div className="d-flex align-items-center flex-column">
        {/* <span className="mb-3">
          {image ? (
            <GatsbyImage
              image={image}
              alt={alt}
              className="rounded-circle me-3"
            />
          ) : null}
        </span> */}
        <h5 className="mb-2 text-white name">{name}</h5>
        <p className="mb-0 text-white">{position}</p>
      </div>
    </StyledCardV4>
  );
};

export default CardV4;
