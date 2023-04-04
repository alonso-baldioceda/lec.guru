import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { getImage } from "gatsby-plugin-image";

// Variables
import { colors, prefix } from "./../shared/styles.js";

// Components
import Layout from "../components/Layout";
import BackgroundImage from "../components/BackgroundImage";
import Mask from "../components/Mask";
import RichText from "../components/RichText.jsx";
import CollapsableItemList from "../components/CollapsableItemList.jsx";
import Slider from "../components/Slider.jsx";
import CardV3 from "../components/CardV3.jsx";
import BrickWall from "../components/BrickWall.jsx";

const StyledServicesPage = styled.div``;

const ServicesPage = ({ data }) => {
  const { blogImages, hero, allDataJson } = data || {};
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

  const blogSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  blog.slider.nodes.forEach((item, index) => {
    const image = getImage(blogImages.edges[index]?.node.childImageSharp);
    const fallbackImage = image?.images.fallback.src;
    item.image = fallbackImage;
  });

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
                    <div className="p-3 p-md-5 rounded rounded-4 position-relative overflow-hidden">
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
          {/* <Container className="py-4 py-lg-5">
            <Row className="justify-content-center">
              <Col xs={8}>
                <h2 className="text-center underlined">
                  <RichText text={title} />
                </h2>
              </Col>
            </Row>
          </Container> */}
          {/* Services */}
          <div className="py-3">
            <div className="py-4 py-lg-5">
              <Container>
                <Row>
                  <Col xs={12}>
                    <BrickWall conf={masonryBreakpoint}>
                      {details.map((detail, index) => (
                        <div
                          className="bg-sycamore-lighter rounded rounded-4 p-4 p-sm-5 px-lg-4 py-lg-5"
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
                    {blog.heading}
                  </h2>
                  <p className="mb-3 mb-lg-5">{blog.text}</p>
                  <div className="mb-3 mb-lg-5">
                    <Slider settings={blogSliderSettings}>
                      {blog.slider.nodes.map((item, index) => (
                        <div key={index}>
                          <CardV3 {...item} />
                        </div>
                      ))}
                    </Slider>
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
    blogImages: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "unclasified/blog" }
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
            gatsbyImageData(width: 500)
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
