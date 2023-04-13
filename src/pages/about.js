import React from "react";
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { getImage } from "gatsby-plugin-image";

// Components
import Layout from "../components/Layout";
import RichText from "../components/RichText";
import Slider from "../components/Slider";
import BackgroundImage from "../components/BackgroundImage";
import Mask from "../components/Mask";
import CardV4 from "../components/CardV4";

// Variables
import { colors } from "./../shared/styles.js";

const AboutPage = ({ data }) => {
  const { testimonialBackground, testimonialImages, allDataJson } = data || {};
  const { edges } = allDataJson || {};
  const node = edges[0].node;
  const { common, aboutpage } = node || {};
  const { header, footer } = common || {};

  const testimonialSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const testimonialBg =
    testimonialBackground.childImageSharp.gatsbyImageData.images.fallback.src;

  aboutpage.testimonials.list.forEach((item, index) => {
    const image = getImage(
      testimonialImages.edges[index]?.node.childImageSharp
    );

    item.image = image;
  });

  return (
    <Layout header={header} footer={footer}>
      {/* History */}
      <div className="bg-sycamore-lighter">
        <div className="py-5">
          <div className="my-3">
            <Container>
              <Row>
                <Col md={12}>
                  <h1 className="mb-5">{aboutpage.heading}</h1>
                  <RichText text={aboutpage.text} />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="position-relative">
        <BackgroundImage src={testimonialBg} />
        <Mask bgColor={colors.marino} opacity={95} />
        <div className="py-5">
          <div className="my-3">
            <Container>
              <Row>
                <Col md={12}>
                  <h2 className="mb-5 text-white text-center">
                    <RichText text={aboutpage.testimonials.heading} />
                  </h2>
                  <Slider settings={testimonialSliderSettings}>
                    {aboutpage.testimonials.list &&
                      aboutpage.testimonials.list.map((testimonial, index) => (
                        <CardV4 key={index} {...testimonial} />
                      ))}
                  </Slider>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <title>About us</title>;

export const query = graphql`
  query {
    testimonialBackground: file(relativePath: { eq: "unclasified/tt.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 3000
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    testimonialImages: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "team" }
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
            gatsbyImageData(width: 120)
          }
        }
      }
    }
    allDataJson {
      edges {
        node {
          common {
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
          }
          aboutpage {
            heading
            text
            testimonials {
              heading
              list {
                text
                alt
                name
                position
              }
            }
          }
        }
      }
    }
  }
`;
