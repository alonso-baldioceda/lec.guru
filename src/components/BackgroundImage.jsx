import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import { prefix } from "./../shared/styles.js";

const StyledBgImg = styled((props) => <div {...props} />)`
  ${(props) =>
    props.bgcolor &&
    `
      background-color: ${props.bgcolor};
    `}

  ${(props) =>
    props.src &&
    `
      background-image: url(${props.src});
    `}

  ${(props) =>
    props.position &&
    `
      background-position: ${props.position};
    `}

  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;
`;

const BackgroundImage = ({ bgColor, position, src }) => (
  <StyledBgImg
    className={classnames(`${prefix}-background-image`)}
    bgcolor={bgColor ? bgColor : "transparent"}
    src={src}
    position={position ? position : "center"}
  />
);

export default BackgroundImage;
