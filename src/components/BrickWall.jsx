import React from "react";
import styled from "styled-components";
import Masonry from "react-masonry-css";

// Variables
import { colors, prefix } from "../shared/styles.js";

const StyledMasonry = styled.div`
  .my-masonry-grid {
    display: flex;
    margin-left: -30px;
    width: auto;
  }
  .my-masonry-grid_column {
    background-clip: padding-box;
    padding-left: 30px;
  }

  .my-masonry-grid_column > div {
    background: ${colors.sycamore};
    margin-bottom: 30px;
  }
`;

const BrickWall = ({ children, conf }) => {
  const masonryBreakpoint = {
    default: 3,
    1440: 3,
    1200: 3,
    992: 2,
    768: 1,
  };

  return (
    <StyledMasonry className={`${prefix}-masonry`}>
      <Masonry
        breakpointCols={conf ? conf : masonryBreakpoint}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {children}
      </Masonry>
    </StyledMasonry>
  );
};

export default BrickWall;
