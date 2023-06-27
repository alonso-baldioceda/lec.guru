import React from "react";
import { useTranslation } from "react-i18next";
import { graphql, Link } from "gatsby";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
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

const IndexPage = ({ data }) => {
  const { t } = useTranslation();

  const trCommon = t("common", {
    returnObjects: true,
  });

  const trHomepage = t("homepage", {
    returnObjects: true,
  });

  const { hero, contact1, contact2, services, clients, about } = trHomepage;
  const { team, blog } = trCommon;
  const { executives } = team;

  const { heroImg, clientsImages } = data || {};
  const heroImage = getImage(heroImg);
  const heroSrc = heroImage.images.fallback.src;

  return (
    <Layout>
      {/* Hero */}
      <Hero {...hero} src={heroSrc} />
      <div className="bg-marino-lighter">
        <div className="py-4 py-lg-5">
          {/* Contact #1 */}
          <div className={`${prefix}-contact`}>
            <Container>
              <Row>
                <Col xs={12}>
                  <p className="text-center mb-4">{contact1.text}</p>
                  <div className="d-flex justify-content-center mb-4">
                    <Link
                      className="btn bg-rouge rounded-pill text-white px-4 py-2 fw-bold mx-0 mx-md-2"
                      to={contact1.cta.to}
                      role="button"
                    >
                      {contact1.cta.label}
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          {/* Services */}
          <div className={`${prefix}-services`}>
            <Container>
              <Row>
                <Col xs={12}>
                  <h2 className="text-center my-4 my-lg-5 fs-1">
                    {services.heading}
                  </h2>
                  <p className="text-center mb-4 mb-lg-5">{services.text}</p>
                </Col>
              </Row>
              <Row>
                {services.cards.map((card, index) => (
                  <Col md={6} lg={4} key={index} className="mb-4 mb-lg-5">
                    <CardV1 {...card} />
                  </Col>
                ))}
              </Row>
            </Container>
          </div>
          {/* Contact #2 */}
          <div className={`${prefix}-contact`}>
            <Container>
              <Row>
                <Col xs={12}>
                  <p className="text-center mb-4">{contact2.text}</p>
                  <div className="d-flex justify-content-center mb-4">
                    <Link
                      className="btn bg-rouge rounded-pill text-white px-4 py-2 fw-bold mx-0 mx-md-2"
                      to={contact2.cta.to}
                      role="button"
                    >
                      {contact2.cta.label}
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      {/* Clients */}
      <div className={`${prefix}-clients`}>
        <div className="my-3 my-md-5">
          <Container>
            <Row className="justify-content-center">
              <Col xs={12}>
                <h1 className="my-5 my-lg-5 text-center">{clients.heading}</h1>
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
                <Col xs={11} sm={11} lg={10}>
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
                  <p className="text-dark text-center">{about.purpose.text}</p>
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
                <Col lg={4}>
                  <div className="mb-3 mb-lg-0 d-flex align-items-center justify-content-center">
                    <span className="pe-3">
                      <i className="bi bi-check-circle-fill fs-1"></i>
                    </span>
                    <p className="mb-0">{about.pillars.list[0].text}</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="mb-3 mb-lg-0 d-flex align-items-center justify-content-center">
                    <span className="pe-3">
                      <i className="bi bi-graph-up fs-1"></i>
                    </span>
                    <p className="mb-0">{about.pillars.list[1].text}</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="d-flex align-items-center justify-content-center">
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
            <Blockquote {...about.quote} />
          </div>
        </div>
      </div>
      {/* Our experts */}
      <div className={`${prefix}-team`}>
        <Container className="pt-3 pt-lg-5">
          <Row className="my-3 my-lg-5 justify-content-center">
            <Col xs={12} className="mb-4">
              <h2 className="text-center fs-1 mb-4 mb-lg-5">{team.heading}</h2>
            </Col>
            {executives.map((card, index) => (
              <Col md={6} xl={4} key={index} className="mb-4 mb-lg-5">
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
  );
};

export default IndexPage;

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "unclasified/tt.jpg" }) {
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
  }
`;
