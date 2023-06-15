import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { getImage } from "gatsby-plugin-image";

// Variables
import { colors, prefix } from "../shared/styles.js";

// Components
import Layout from "../components/Layout";
import BackgroundImage from "../components/BackgroundImage";
import BlockLatestSlider from "../components/BlockLatestSlider";
import Mask from "../components/Mask";
import RichText from "../components/RichText";
import BrickWall from "../components/BrickWall";
import CardV6 from "../components/CardV6";

const StyledServicesPage = styled.div``;

const ServicesPage = ({ data }) => {
  const { hero, allDataJson } = data || {};
  const { edges } = allDataJson || {};
  const node = edges[0].node || {};
  const { common, servicespage } = node || {};
  const { header, footer, blog } = common || {};
  const { services } = servicespage || {};
  const { title, details } = services[0] || {};

  const heroImage = getImage(hero);
  const heroSrc = heroImage.images.fallback.src;

  const masonryBreakpoint = {
    default: 3,
    1440: 3,
    1200: 3,
    992: 2,
    768: 1,
  };

  return (
    <StyledServicesPage>
      <Layout header={header} footer={footer}>
        <div className={`${prefix}-services`}>
          {/* Hero */}
          <div className="position-relative" style={{ height: "460px" }}>
            <BackgroundImage src={heroSrc} />
            {/* <Mask bgColor={colors.finnLight} opacity={30} /> */}
            <div className="position-absolute top-50 start-50 translate-middle w-100 mt-n5">
              <Container>
                <Row className="justify-content-center">
                  <Col xs={12} xl={8}>
                    <div className="p-3 p-md-5 border-radius-1 position-relative overflow-hidden">
                      <Mask bgColor={colors.white} opacity={90} />
                      <h2 className="text-center underlined">{title}</h2>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          {/* Services */}
          <div className="py-3">
            <div className="py-4 py-lg-5">
              <Container>
                <Row>
                  <Col xs={12}>
                    <p className="mb-5">
                      Our consulting is focused on those resources with economic
                      value owned or controlled by our clients that will provide
                      the highest benefit. This approach helps us deliver
                      insight and impact the organization in a very short time
                      frame. Our solutions leverage advanced technology,
                      proprietary data, regulatory knowledge, process
                      transformation and deep expertise to help clients in the
                      process of diagnostic, management technology, analytics,
                      and applied solutions.
                    </p>
                  </Col>
                  <Col xs={12}>
                    <BrickWall conf={masonryBreakpoint}>
                      {details.map((detail, index) => (
                        <CardV6 key={index} {...detail} />
                      ))}
                    </BrickWall>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          {/* Blog */}
          <div className={`${prefix}-blog`}>
            <Container className="mb-5">
              <Row className="justify-content-center">
                <Col lg={10}>
                  <h2 className="text-center mb-3 mb-lg-5 text-casal fs-1">
                    <RichText text={blog.heading} />
                  </h2>
                  <p className="mb-3 mb-lg-5">{blog.text}</p>
                  <div className="mb-3 mb-lg-5">
                    <BlockLatestSlider />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Layout>
    </StyledServicesPage>
  );
};

export default ServicesPage;

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "unclasified/12.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 3000
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    allDataJson {
      edges {
        node {
          common {
            team {
              cards {
                img
                job
                link
                name
                social {
                  heading
                  links {
                    icon
                    link
                  }
                }
                text
              }
              heading
            }
            blog {
              heading
              text
            }
          }
          servicespage {
            services {
              title
              subtitle
              details {
                title
                tag
                introduction
                details {
                  description
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`;
