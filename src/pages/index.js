import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

// Variables
import { color, prefix } from "./../shared/styles.js";

// Components
import BackgroundImage from "../components/BackgroundImage";
import CardV1 from "../components/CardV1";
import CardV2 from "../components/CardV2";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Mask from "../components/Mask";
import Slider from "../components/Slider.jsx";
import CardV3 from "../components/CardV3.jsx";
// import RichText from "../components/RickText.jsx";

const StyledIndexPage = styled.div``;

const IndexPage = ({ data }) => {
  const { hero: heroImg, blogImages, allDataJson } = data || {};
  const { edges } = allDataJson || {};

  let validNode = null;

  if (edges[0].node.homepage === null) {
    const { node } = edges[1] || {};
    validNode = node;
  } else {
    const { node } = edges[0] || {};
    validNode = node;
  }

  const { homepage } = validNode || {};
  const { header, footer, hero, services, blog, about, team } = homepage || {};

  const heroImage = getImage(heroImg);
  const heroSrc = heroImage.images.fallback.src;

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
    <StyledIndexPage>
      <Layout header={header} footer={footer}>
        {/* Hero */}
        <Hero {...hero} src={heroSrc} />
        {/* Services */}
        <div className={`bg-marino-lighter ${prefix}-services`}>
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
        {/* Blog */}
        <div className={`${prefix}-blog`}>
          <Container className="pt-4 pb-5 py-lg-5">
            <Row className="justify-content-center">
              <Col lg={19}>
                <h2 className="text-center my-3 my-lg-5 text-casal fs-1">
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
        {/* About us */}
        <div className={`${prefix}-about position-relative`}>
          <BackgroundImage src="images/unclasified/4.jpg" />
          <Mask bgColor={color.sycamoreLight} opacity={90} />
          <div className="py-3 py-lg-5">
            <Container className="py-4 py-lg-5">
              <Row className="justify-content-center">
                <Col xs={11} lg={7}>
                  <h2
                    className="text-center mb-3 mb-lg-5 fs-1 text-dark underlined"
                    dangerouslySetInnerHTML={{
                      __html: about.heading,
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={6} className="px-4 px-lg-5">
                  <h3 className="mt-4 mb-4 text-dark text-center font-italic">
                    {about.company.heading}
                  </h3>
                  <p className="text-dark text-center">{about.company.text}</p>
                </Col>
                <Col sm={6} className="px-4 px-lg-5">
                  <h3 className="mt-4 mb-4 text-dark text-center font-italic">
                    {about.mission.heading}
                  </h3>
                  <p className="text-dark text-center">{about.mission.text}</p>
                </Col>
              </Row>
            </Container>
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
      </Layout>
    </StyledIndexPage>
  );
};

export default IndexPage;

export const Head = () => <title>Homepage</title>;

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "unclasified/4.jpg" }) {
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
          homepage {
            about {
              heading
              mission {
                heading
                text
              }
              company {
                heading
                text
              }
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
          }
        }
      }
    }
  }
`;
