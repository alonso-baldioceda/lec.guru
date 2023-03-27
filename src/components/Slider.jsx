import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import Slick from "react-slick";
import { prefix } from "./../shared/styles.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styles
const SliderWrapper = styled((props) => <section {...props} />)`
  min-height: 380px;
  margin: 0 auto;
  max-width: 2200px;
  position: relative;
  width: 100%;

  .slick-slider {
    height: 100%;

    .slick-list {
      height: 100%;
    }

    .slick-arrow {
      &.slick-prev,
      &.slick-next {
        height: 40px;
        width: 40px;
        z-index: 100;

        &:before {
          font-size: 40px;
        }
      }

      &.slick-prev {
        left: 25px;
      }

      &.slick-next {
        right: 25px;
      }
    }

    .slick-dots {
      position: absolute;
      bottom: -30px;
      z-index: 100;

      @media (min-width: 992px) {
        padding-top: -40px;
      }

      li {
        button {
          &:before {
            font-size: 15px;
          }
        }
      }
    }
  }
`;

const Slider = ({ settings, children, controlsColors }) => {
  return (
    <SliderWrapper
      className={classnames(`${prefix}-slider`)}
      // controlscolors={controlsColors ? controlsColors : ""}
    >
      <Slick {...settings}>{children}</Slick>
    </SliderWrapper>
  );
};

export default Slider;
