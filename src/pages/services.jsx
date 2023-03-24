import React, { useState } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import classnames from "classnames";

// Variables
import { color, prefix } from "./../shared/styles.js";

// Components
import Layout from "../components/Layout";
import BackgroundImage from "../components/BackgroundImage";
import Mask from "../components/Mask";
import RichText from "../components/RickText.jsx";
import CollapsableItemList from "../components/CollapsableItemList.jsx";

const StyledServicesPage = styled.div``;

const ServicesPage = ({ data }) => {
  const { hero, allDataJson } = data || {};
  const { edges } = allDataJson || {};
  const { node } = edges[1] || {};
  const { services } = node || {};
  const { header, footer, services: servicesData } = services || {};
  const { title, details } = servicesData[0] || {};

  const image = getImage(hero);
  const src = image.images.fallback.src;

  return (
    <StyledServicesPage>
      <Layout header={header} footer={footer}>
        <div className={`${prefix}-services`}>
          {/* Hero */}
          <div className="position-relative" style={{ height: "460px" }}>
            <BackgroundImage src={src} />
            {/* <Mask bgColor={color.finnLight} opacity={30} /> */}
            <div className="position-absolute top-50 start-50 translate-middle w-100 mt-n5">
              <Container>
                <Row className="justify-content-center">
                  <Col xs={12} xl={8}>
                    <div className="p-3 p-md-5 rounded rounded-4 position-relative overflow-hidden">
                      <Mask bgColor={color.white} opacity={90} />
                      <h2 className="text-center underlined">
                        <RichText text={title} />
                      </h2>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>

          {/* <Container className="py-4 py-lg-5">
            <Row className="justify-content-center">
              <Col xs={8}>
                <h2 className="text-center underlined">
                  <RichText text={title} />
                </h2>
              </Col>
            </Row>
          </Container> */}
          <div className="py-3">
            <div className="py-4 py-lg-5">
              <Container>
                <Row>
                  {details.map((detail, index) => {
                    return (
                      <Col xs={12} lg={4} key={index}>
                        <div className="bg-sycamore-lighter rounded rounded-4 p-3 p-sm-5 p-lg-4">
                          <h3 className="text-center mb-4 mb-lg-5 font-bold text-sycamore">
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
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </Layout>
    </StyledServicesPage>
  );
};

export default ServicesPage;

export const Head = () => <title>Services</title>;

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
          services {
            footer {
              contact {
                address
                email
                heading
                phone
              }
              copyright
              nav {
                heading
                nav {
                  label
                  link
                }
              }
              social {
                heading
                links {
                  icon
                  link
                }
              }
            }
            header {
              brand {
                alt
                icon
                to
              }
              nav {
                label
                link
              }
              top {
                email {
                  href
                  icon
                  label
                }
                phone {
                  href
                  icon
                  label
                }
              }
            }
            services {
              details {
                title
                introduction
                details {
                  description
                  title
                }
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
