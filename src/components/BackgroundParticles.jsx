import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Container, Row, Col } from "react-bootstrap";

import styled from "styled-components";
import { prefix } from "./../shared/styles.js";

// Styles
const StyledBackgroundParticles = styled((props) => <div {...props} />)`
  #container {
    position: relative;
  }

  #tsparticles {
    height: 60vh;
    inset: 0px;
    margin: 0px;
    padding: 0px;
    position: relative;
    z-index: 0;

    @media (min-width: 768px) {
      height: 92vh;
    }
  }
`;

const BackgroundParticles = ({ cta, heading, img, text, small, src }) => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <StyledBackgroundParticles className={`${prefix}-background-particles`}>
      <div id="container">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          height="1"
          options={{
            fullScreen: {
              enable: false,
            },
            background: {
              color: {
                value: "#ffffff",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 2.4,
                },
              },
            },
            particles: {
              color: {
                value: "#2f5c6d",
              },
              links: {
                color: "#2f5c6d",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />

        <div className="position-absolute top-50 start-50 translate-middle w-100">
          <div className="mx-2 mx-lg-3">
            <Container className="fluid">
              <Row className="justify-content-center">
                <Col
                  xs={12}
                  lg={8}
                  className="d-flex flex-column align-items-center"
                >
                  <h1 className="mb-2 text-casal text-uppercase">{heading}</h1>
                  <h2 className="mb-0 fw-bold fs-3 text-rouge">{text}</h2>
                  {/* <p className="mb-4 text-dark fs-6 text-center">{small}</p> */}
                  {/* <a
                    className="btn bg-rouge rounded-pill text-white px-4 py-2 fw-bold mb-0 mx-auto"
                    href={cta[0].link}
                    role="button"
                  >
                    {cta[0].label}
                  </a> */}
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </StyledBackgroundParticles>
  );
};

export default BackgroundParticles;
