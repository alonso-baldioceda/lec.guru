import React from "react";
import styled from "styled-components";
import { prefix, color } from "./../shared/styles.js";

// Styles
const StyledMask = styled((props) => <div {...props} />)`
  ${(props) =>
    props.bgcolor &&
    `
      background-color: rgba(${props.bgcolor});
    `}

  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: -1;
`;

const Mask = ({ bgColor, opacity }) => {
  const hexToRGB = (value, opacity) => {
    const str = value.replace("#", "");
    const aRgbHex = str.match(/.{1,2}/g);

    if (aRgbHex) {
      return [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16),
        opacity / 100,
      ];
    }
  };

  const newColorValue = hexToRGB(
    bgColor ? bgColor : color.black,
    opacity ? opacity : 0
  );

  return (
    <StyledMask
      bgcolor={newColorValue ? newColorValue.join(", ") : null}
      className={`${prefix}-mask`}
    />
  );
};

export default Mask;
