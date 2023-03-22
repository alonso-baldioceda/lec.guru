import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

// Variables
import { color, prefix } from "./../shared/styles.js";

// Components
import BackgroundImage from "./BackgroundImage.jsx";
import BubbleDesktop from "./BubbleDesktop.jsx";
import BubbleMobile from "./BubbleMobile.jsx";

// Styles
const HeroContainer = styled.section`
  text-align: center;
  height: 60vh;
  position: relative;

  @media (min-width: 768px) {
    height: 88vh;
  }

  .transparent {
    background-color: rgba(255, 255, 255, 0.95);
  }

  img {
    width: 340px;
    height: 340px;
    object-fit: cover;
    border-radius: 50%;
  }

  a {
    background-color: ${color.rouge};
    color: ${color.white};
    letter-spacing: 1px;

    &:hover {
      background-color: ${color.rouge};
      color: ${color.black};
    }
  }
`;

const Hero = ({ cta, heading, img, text, small }) => (
  <>
    <HeroContainer className={`${prefix}-hero`}>
      <BackgroundImage src={img} />
      <div className="position-absolute top-50 start-50 translate-middle w-100">
        <div className="mx-2 mx-lg-3">
          <Container fuild>
            <Row className="justify-content-center">
              <Col
                xs={12}
                lg={8}
                className="p-4 p-sm-5 mb-lg-0 rounded-4 transparent"
              >
                <h1 className="mb-4">{heading}</h1>
                <h2 className="mb-0 mb-md-4 fw-bold fs-5">{text}</h2>
                <BubbleDesktop cta={cta} text={small} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </HeroContainer>
    <BubbleMobile cta={cta} text={small} />
  </>
);

export default Hero;
