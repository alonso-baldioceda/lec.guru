import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

// Variables
import { colors, prefix } from "./../shared/styles.js";

// Components
import BackgroundImage from "../components/BackgroundImage";
import BlockLatestSlider from "../components/BlockLatestSlider";
import Blockquote from "../components/Blockquote";
import CardV1 from "../components/CardV1";
import CardV2 from "../components/CardV2";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Mask from "../components/Mask";
import RichText from "../components/RichText.jsx";

// Styles
const StyledIndexPage = styled.div``;

const IndexPage = ({ data }) => {
  const { hero: heroImg, clientsImages, allDataJson } = data || {};
  const { edges } = allDataJson || {};
  const node = edges[0].node;
  const { common, homepage } = node || {};
  const { blog, team } = common || {};
  const { hero, services, about } = homepage || {};

  const heroImage = getImage(heroImg);
  const heroSrc = heroImage.images.fallback.src;

  console.log("team", team);

  return (
    <StyledIndexPage>
      <Layout>
        {/* Hero */}
        <Hero {...hero} src={heroSrc} />
        {/* Services */}
        <div className={`${prefix}-services`}>
          <div className="bg-marino-lighter">
            <Container className="py-4 py-lg-5">
              <h2 className="text-center my-4 my-lg-5 fs-1">
                {services.heading}
              </h2>
              <p className="text-center mb-4 mb-lg-5 fs-5">{services.text}</p>
              <Row>
                {services.cards.map((card, index) => (
                  <Col sm={6} lg={4} key={index} className="mb-4 mb-lg-5">
                    <CardV1 {...card} />
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
        </div>
        {/* Clients */}
        <div className={`${prefix}-clients`}>
          <div className="my-3 my-md-5">
            <Container>
              <Row className="justify-content-center">
                <Col xs={12}>
                  <h1 className="my-5 my-lg-5 text-center">
                    Some of our clients
                  </h1>
                </Col>
                {clientsImages.edges.map((client, index) => {
                  const image = getImage(client.node.childImageSharp);
                  return (
                    <Col
                      key={index}
                      sm={4}
                      className="text-center mb-5 d-flex align-items-center justify-content-center"
                      style={{ height: "60px" }}
                    >
                      <GatsbyImage image={image} alt="client" />
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </div>
        </div>
        {/* About us */}
        <div className={`${prefix}-about`}>
          <div className="position-relative">
            <BackgroundImage src="images/unclasified/4.jpg" />
            <Mask bgColor={colors.sycamoreLight} opacity={90} />
            <div className="py-3 py-lg-5">
              <Container className="py-3 py-lg-5">
                <Row className="justify-content-center">
                  <Col xs={11} sm={8} lg={10}>
                    <h2 className="text-center mb-3 mb-lg-5 fs-1 text-dark underlined">
                      {about.heading}
                    </h2>
                    <p className="mb-3 text-center">{about.text1}</p>
                    <p className="mb-3 text-center">{about.text2}</p>
                  </Col>
                </Row>
                <Row>
                  <Col lg={10} className="offset-lg-1">
                    <i>
                      <h3 className="mt-4 mb-4 text-dark text-center">
                        {about.purpose.heading}
                      </h3>
                    </i>
                    <p className="text-dark text-center">
                      {about.purpose.text}
                    </p>
                  </Col>
                  <Col lg={10} className="offset-lg-1">
                    <i>
                      <h3 className="mt-4 mb-4 text-dark text-center">
                        {about.mission.heading}
                      </h3>
                    </i>
                    <p className="text-dark mb-0 text-center">
                      {about.mission.text}
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className="my-3 my-lg-5">
            <div className="py-3 py-lg-5">
              <Container>
                <Row>
                  <Col lg={10} className="offset-lg-1">
                    <h2 className="mb-5 text-dark text-center">
                      {about.pillars.heading}
                    </h2>
                  </Col>
                  <Col md={4}>
                    <div className="d-flex">
                      <span className="pe-3">
                        <i className="bi bi-check-circle-fill fs-1"></i>
                      </span>
                      <p className="mb-0">{about.pillars.list[0].text}</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="d-flex">
                      <span className="pe-3">
                        <i className="bi bi-graph-up fs-1"></i>
                      </span>
                      <p className="mb-0">{about.pillars.list[1].text}</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="d-flex">
                      <span className="pe-3">
                        <i className="bi bi-trophy fs-1"></i>
                      </span>
                      <p className="mb-0">{about.pillars.list[2].text}</p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className="bg-light">
            <div className="mt-3 mt-lg-5">
              <Blockquote
                text="The ultimate goal of our team of experts at Lean Enterprise Consulting is to make you successful"
                author="Dr. Thomas Agrait"
              />
            </div>
          </div>
        </div>
        {/* Our experts */}
        <div className={`${prefix}-team`}>
          <Container className="pt-3 pt-lg-5">
            <Row className="my-3 my-lg-5 justify-content-center">
              <Col xs={12} className="mb-4">
                <h2 className="text-center fs-1 mb-4 mb-lg-5">
                  {team.heading}
                </h2>
              </Col>
              {team.cards.map((card, index) => (
                <Col sm={6} xl={3} key={index} className="mb-4 mb-lg-5">
                  <CardV2 {...card} />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
        {/* Blog */}
        <div className={`${prefix}-blog`}>
          <Container className="pt-0 pb-5">
            <Row className="justify-content-center">
              <Col lg={19}>
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
      </Layout>
    </StyledIndexPage>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "unclasified/tt.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 3000
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    clientsImages: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "clients" }
      }
      sort: { name: ASC }
    ) {
      totalCount
      edges {
        node {
          base
          name
          id
          childImageSharp {
            gatsbyImageData(width: 200)
          }
        }
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
              slider {
                nodes {
                  cta {
                    label
                    link
                  }
                  heading
                  img {
                    alt
                    src
                  }
                }
              }
              text
            }
          }
          homepage {
            about {
              heading
              text1
              text2
              purpose {
                heading
                text
              }
              mission {
                heading
                text
              }
              pillars {
                heading
                list {
                  text
                }
              }
            }
            hero {
              cta {
                label
                link
              }
              heading
              img
              small
              text
            }
            services {
              cards {
                cta
                heading
                icon
                anchor
                text
              }
              heading
              text
            }
          }
        }
      }
    }
  }
`;
