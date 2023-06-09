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
                  <h1 className="my-4 my-md-5 text-center">
                    Some of our clients
                  </h1>
                </Col>
                {clientsImages.edges.map((client, index) => {
                  const image = getImage(client.node.childImageSharp);

                  return (
                    <Col
                      key={index}
                      sm={4}
                      className="text-center my-3 d-flex align-items-center justify-content-center"
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
          <div className=" position-relative">
            <BackgroundImage src="images/unclasified/4.jpg" />
            <Mask bgColor={colors.sycamoreLight} opacity={90} />
            <div className="py-3 py-lg-5">
              <Container className="py-4 py-lg-5">
                <Row className="justify-content-center">
                  <Col xs={11} sm={8} lg={10}>
                    <h2 className="text-center mb-3 mb-lg-5 fs-1 text-dark underlined">
                      <RichText text={about.heading} />
                    </h2>
                    <p className="mb-3 text-center">
                      To help our clients make distinctive, lasting, and
                      substantial improvements in their performance and to build
                      a great firm that attracts, develops, excites, and retains
                      exceptional people.
                    </p>
                    <p className="mb-5 text-center">
                      Our values are a clear and unique reflection of the
                      thinking of our founder, Dr. Thomas Agrait who has been a
                      driving force in shaping the firm. Our values have been
                      transformed incrementally to reflect the changing times.
                      They are the lighthouse of our long-term strategy as a
                      firm and the way we serve our clients daily.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col lg={10} className="offset-1">
                    <i>
                      <h3 className="mt-4 mb-4 text-dark text-center">
                        {about.purpose.heading}
                      </h3>
                    </i>
                    <p className="text-dark">{about.purpose.text}</p>
                  </Col>
                  <Col lg={10} className="offset-1">
                    <i>
                      <h3 className="mt-4 mb-4 text-dark text-center">
                        {about.mission.heading}
                      </h3>
                    </i>
                    <p className="text-dark">{about.mission.text}</p>
                  </Col>
                  <Col lg={10} className="offset-1">
                    <i>
                      <h3 className="mt-4 mb-4 text-dark text-center">
                        {about.pillars.heading}
                      </h3>
                    </i>
                    <ul className="text-dark d-flex flex-column align-items-center">
                      <li>{about.pillars.list[0].text}</li>
                      <li>{about.pillars.list[1].text}</li>
                      <li>{about.pillars.list[2].text}</li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
        {/* Our experts */}
        <div className={`${prefix}-team`}>
          <Container className="pt-4 pt-lg-5">
            <Row className="my-4 my-lg-5 justify-content-center">
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
                link
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
