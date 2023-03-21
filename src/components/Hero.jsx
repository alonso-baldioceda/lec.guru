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
      font-size: 15px;
    }
  }

  img {
    width: 340px;
    height: 340px;
    object-fit: cover;
    border-radius: 50%;
  }

  h1 {
    @media (min-width: 992px) {
      /* padding-top: 82px; */
    }
  }

  h2 {
    font-size: 1.1rem !important;

    @media (min-width: 576px) {
      font-size: 1.25rem !important;
      line-height: 1.75rem !important;
    }
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
      <div className="mx-2 mx-lg-3">
        <Container fuild>
          <Row className="justify-content-center">
            <Col
              xs={12}
              lg={8}
              className="p-2 p-sm-4 p-lg-5 mb-lg-0 rounded-4 transparent"
            >
              <h1 className="mb-2 mb-md-3">{heading}</h1>
              <h2 className="mb-2 mb-md-3 fw-bold">{text}</h2>
              <div className="d-flex justify-content-between bg-sycamore-lighter mb-3 mb-lg-4 py-2 rounded rounded-4">
                <div className="d-flex align-items-center d-none d-md-block">
                  <div className="d-flex align-items-center justify-content-center h-100">
                    <i className="bi bi-megaphone fs-1 text-sycamore px-3"></i>
                  </div>
                </div>
                <p className="text-center text-md-start text-dark fs-6 mx-2 mx-md-0 mb-0 py-2">
                  {small}
                </p>
              </div>
              <div className="d-flex justify-content-center flex-column flex-md-row">
                <div>
                  <a
                    className="btn rounded-pill text-white px-4 py-2 fw-bold mb-2 mb-md-0 mx-0 mx-md-2"
                    href={cta[0].link}
                    role="button"
                  >
                    {cta[0].label}
                  </a>
                </div>
                <div>
                  <a
                    className="btn rounded-pill text-white px-4 py-2 fw-bold mb-md-0 mx-0 mx-md-2"
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
