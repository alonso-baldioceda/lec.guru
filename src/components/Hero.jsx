import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

// Variables
import { color, prefix } from "./../shared/styles.js";

// Components
import BackgroundImage from "./BackgroundImage.jsx";

// Styles
const HeroContainer = styled.section`
  text-align: center;
  height: 88vh;
  position: relative;

  .transparent {
    background-color: rgba(255, 255, 255, 0.95);
  }

  .bubble {
    background-color: ${color.sycamore};

    p {
      font-size: 16px;
    }
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
  <HeroContainer className={`${prefix}-hero`}>
    <BackgroundImage src={img} />
    <div className="position-absolute top-50 start-50 translate-middle w-100">
      <div className="mx-3">
        <Container>
          <Row className="justify-content-center">
            <Col
              xs={12}
              lg={8}
              className="p-3 mb-lg-0 p-lg-5 rounded-4 transparent"
            >
              <h1 className="mb-3">{heading}</h1>
              <p className="mb-3 fw-bold fs-5">{text}</p>
              <div className="d-flex justify-content-between bg-sycamore-lighter mb-3 mb-lg-4 py-2 rounded rounded-4">
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <i className="bi bi-megaphone fs-1 text-sycamore px-3"></i>
                  </div>
                </div>
                <p className="text-start text-dark fs-6 ms-2 mb-0 me-3 my-2">
                  {small}
                </p>
              </div>
              <div className="d-flex justify-content-center flex-column flex-lg-row">
                <div>
                  <a
                    className="btn rounded-pill text-white px-4 py-2 fw-bold mb-3 mb-lg-0 mx-0 mx-lg-3"
                    href={cta[0].link}
                    role="button"
                  >
                    {cta[0].label}
                  </a>
                </div>
                <div>
                  <a
                    className="btn rounded-pill text-white px-4 py-2 fw-bold"
                    href={cta[1].link}
                    role="button"
                  >
                    {cta[1].label}
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  </HeroContainer>
);

export default Hero;
