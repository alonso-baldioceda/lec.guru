import React from "react";
import styled from "styled-components";
import { prefix } from "./../shared/styles.js";

// Styles
const StyledRichText = styled((props) => <div {...props} />)``;

const RichText = ({ text }) => {
  return (
    <StyledRichText
      className={`${prefix}-rich-text`}
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    />
  );
};

export default RichText;
