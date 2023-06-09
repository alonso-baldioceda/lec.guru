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
  const { aboutpage } = node || {};

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
    <Layout>
      {/* History */}
      <div className="bg-sycamore-lighter">
        <div className="py-5">
          <div className="my-3">
            <Container>
              <Row>
                <Col md={12}>
                  <h1 className="mb-5">{aboutpage.heading}</h1>
                  <RichText text={aboutpage.text} />
                  <h2 className="mb-5">{aboutpage.inspiration.heading}</h2>
                  <h3 className="mb-4 font-bold">
                    {aboutpage.inspiration.subheading}
                  </h3>
                  <p className="mb-5">{aboutpage.inspiration.text}</p>
                  <h3 className="mb-4 font-bold">
                    {aboutpage.inspiration.list[0].heading}
                  </h3>
                  <p className="mb-5">{aboutpage.inspiration.list[0].text}</p>
                  <h3 className="mb-4 font-bold">
                    {aboutpage.inspiration.list[1].heading}
                  </h3>
                  <p className="mb-5">{aboutpage.inspiration.list[1].text}</p>
                  <h3 className="mb-4 font-bold">
                    {aboutpage.inspiration.list[2].heading}
                  </h3>
                  <p className="mb-3">{aboutpage.inspiration.list[2].text}</p>
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
          aboutpage {
            heading
            text
            inspiration {
              heading
              subheading
              text
              list {
                heading
                text
              }
            }
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
