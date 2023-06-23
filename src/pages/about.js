import React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { getImage } from "gatsby-plugin-image";

// Components
import BackgroundImage from "../components/BackgroundImage";
import CardV4 from "../components/CardV4";
import Layout from "../components/Layout";
import Mask from "../components/Mask";
import RichText from "../components/RichText";
import Slider from "../components/Slider";

// Variables
import { colors } from "./../shared/styles.js";

const AboutPage = ({ data }) => {
  const { t } = useTranslation();

  const trAboutPage = t("aboutpage", {
    returnObjects: true,
  });

  const { heading, text, inspiration, testimonials } = trAboutPage;

  const { testimonialBackground, testimonialImages } = data || {};

  const testimonialSliderSettings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
  };

  const testimonialBg =
    testimonialBackground.childImageSharp.gatsbyImageData.images.fallback.src;

  testimonials.list.forEach((item, index) => {
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
                  <h1 className="mb-5">{heading}</h1>
                  <RichText text={text} />
                  <h2 className="mb-5">{inspiration.heading}</h2>
                  <h3 className="mb-4 font-bold">{inspiration.subheading}</h3>
                  <p className="mb-5">{inspiration.text}</p>
                  <h3 className="mb-4 font-bold">
                    {inspiration.list[0].heading}
                  </h3>
                  <p className="mb-5">{inspiration.list[0].text}</p>
                  <h3 className="mb-4 font-bold">
                    {inspiration.list[1].heading}
                  </h3>
                  <p className="mb-5">{inspiration.list[1].text}</p>
                  <h3 className="mb-4 font-bold">
                    {inspiration.list[2].heading}
                  </h3>
                  <p className="mb-3">{inspiration.list[2].text}</p>
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
                    <RichText text={testimonials.heading} />
                  </h2>
                  <Slider settings={testimonialSliderSettings}>
                    {testimonials.list &&
                      testimonials.list.map((testimonial, index) => (
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
  }
`;
