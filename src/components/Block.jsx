import React from "react";
import styled from "styled-components";
import classnames from "classnames";

// Variables
import { prefix } from "./../shared/styles.js";

// Styles
const StyledBlock = styled.div`
  background-position: center;
  background-size: cover;
  padding: 80px 0;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Block = ({ bgColor, children, bgImage }) => (
  <StyledBlock
    style={{ backgroundImage: bgImage ? `url("images/${bgImage}")` : "" }}
    className={classnames({ [`${bgColor}`]: bgColor }, `${prefix}-block`)}
  >
    <Content>{children}</Content>
  </StyledBlock>
);

export default Block;
