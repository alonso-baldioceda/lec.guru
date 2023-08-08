import React from "react";
import styled from "styled-components";

// Components
import RichText from "../components/RichText";

// Variables
import { prefix, colors } from "../shared/styles.js";

// Styles
const StyledCardV4 = styled.div`
  P {
    color: ${colors.white};
    text-align: center;
  }

  h5 {
    border-bottom: 4px solid ${colors.sycamore};
    padding: 6px 10px;
  }
`;

const CardV4 = ({ text, name, position }) => {
  return (
    <StyledCardV4
      className={`d-flex justify-content-center flex-column w-75 mx-auto ${prefix}-card-v4`}
    >
      <RichText text={text} />
      <div className="d-flex align-items-center flex-column">
        {name ? <h5 className="mb-2 text-white name">{name}</h5> : null}
        {position ? <p className="mb-0 text-white">{position}</p> : null}
      </div>
    </StyledCardV4>
  );
};

export default CardV4;
