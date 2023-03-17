import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Variables
import { color, prefix } from "./../shared/styles.js";

// Styles
const SliderWrapper = styled((props) => <section {...props} />)`
  margin: 0 auto;
  max-width: 2200px;
  overflow: hidden;
  position: relative;
  width: 100%;

  .slick-slider {
    .slick-list {
      .image-item {
        width: 100%;
        max-height: 584px;
        object-fit: cover;
      }
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
      bottom: 25px;
      z-index: 100;

      li {
        button {
        }
      }
    }
  }
`;

const Slide = styled.div`
  position: relative;
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
`;

const Box = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  margin: 0 auto;
  max-width: 665px;
  padding: 30px;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 40px;
  color: ${color.seashell};
  font-weight: 700;
`;

const Slider = ({ settings, nodes }) => {
  const slickSettings = { ...settings };

  return (
    <SliderWrapper className={classnames(`${prefix}-slider bg-chateau`)}>
      <Slick {...slickSettings}>
        {nodes.map((slide, index) => (
          <Slide key={index}>
            <img
              src={slide.img.src}
              alt={slide.img.alt}
              className="image-item"
            />
            <Content>
              <div className="container">
                <Box>
                  <Heading>{slide.heading}</Heading>
                  <a href="/">link</a>
                </Box>
              </div>
            </Content>
          </Slide>
        ))}
      </Slick>
    </SliderWrapper>
  );
};

export default Slider;
