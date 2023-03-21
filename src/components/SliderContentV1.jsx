import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import { prefix } from "./../shared/styles.js";

// Components
import BackgroundImage from "./../components/BackgroundImage";

// Styles
const SliderSliderContentV1 = styled.div`
  /* margin: 0 10px; */
  /* padding: 10px; */
  position: relative;

  .tt {
    border: 4px solid red;
    position: relative;
    height: 260px;
  }
`;

const SliderContentV1 = ({ cta, heading, img }) => {
  return (
    <SliderSliderContentV1
      className={classnames(`${prefix}-slider-content-v1`)}
    >
      <div className="m-1 tt">
        <BackgroundImage src={img.src} />
        <h4>{heading}</h4>
      </div>
    </SliderSliderContentV1>
  );
};

export default SliderContentV1;
