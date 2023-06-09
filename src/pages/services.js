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
import CollapsableItemList from "../components/CollapsableItemList";
import BrickWall from "../components/BrickWall";

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
                      <h2 className="text-center underlined">
                        <RichText text={title} />
                      </h2>
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
                    <BrickWall conf={masonryBreakpoint}>
                      {details.map((detail, index) => (
                        <div
                          className="bg-sycamore-lighter border-radius-1 p-4 p-sm-5 px-lg-4 py-lg-5"
                          key={index}
                        >
                          <h3 className="text-center mb-4 mb-lg-4 font-bold text-sycamore">
                            {detail.title}
                          </h3>
                          <p className="mb-2 text-center">
                            {detail.introduction}
                          </p>
                          <ul className="list-unstyled mb-0 ">
                            {detail.details.map((detail, index) => (
                              <CollapsableItemList key={index} item={detail} />
                            ))}
                          </ul>
                        </div>
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
              details {
                details {
                  description
                  title
                }
                introduction
                title
              }
              subtitle
              title
            }
          }
        }
      }
    }
  }
`;
