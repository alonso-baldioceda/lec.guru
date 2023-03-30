import React from "react";
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

// Variables
// import { prefix } from "./../shared/styles.js";

// Components
import Layout from "../components/Layout";
import FormContact from "../components/FormContact";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const Contact = ({ data }) => {
  const { allDataJson } = data || {};
  const { edges } = allDataJson || {};
  const node = edges[0].node;
  const { common, contactpage } = node || {};
  const { header, footer } = common || {};

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.GATSBY_GOOGLE_MAPS_API_KEY,
  });

  console.log(contactpage);

  return (
    <Layout header={header} footer={footer}>
      <Container className="rounded rounded-4 my-4 my-md-5 overflow-hidden">
        <Row className="bg-marino-lighter">
          <Col md={6}>
            <div className="p-4 p-md-5">
              <h1 className="mb-5">Contact Us</h1>
              <p className="mb-4">
                Contáctanos para cualquier consulta, comentario o colaboración.
                Estamos encantados de escucharte y ayudarte.
              </p>
              <p className="d-flex align-items-center mb-1">
                <i className="bi bi-geo-alt fs-4 me-2"></i>
                <span>123 Main St, San Francisco, CA 94110</span>
              </p>
              <p className="d-flex align-items-center mb-0">
                <i className="bi bi-telephone fs-4 me-2"></i>
                <span>(123) 456-7890</span>
              </p>
            </div>
          </Col>
          <Col md={6} className="g-0">
            {isLoaded && (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
              >
                <Marker position={center} />
              </GoogleMap>
            )}
          </Col>
        </Row>
        <Row
          className="bg-white border-marino-lighter"
          style={{
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
          }}
        >
          <Col>
            <div className="p-4 p-md-5">
              <h3 className="mb-5">
                <span className="decorator fs-3">Send a message</span>
              </h3>
              <FormContact {...contactpage} />
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Contact;

export const Head = () => <title>Contact</title>;

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
          contactpage {
            email
            firstName
            heading
            lastName
            message
            phone
            subject
            submit
            submitting
            validation {
              emailInvalid
              emailRequired
              errorBody
              errorHeader
              firstNameRequired
              lastNameRequired
              messageRequired
              phoneRequired
              subjectRequired
              successBody
              successHeader
            }
          }
        }
      }
    }
  }
`;
