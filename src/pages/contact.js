import React from "react";
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

// Components
import Layout from "../components/Layout";
import FormContact from "../components/FormContact";
import Map from "../components/Map";

const ContactPage = ({ data }) => {
  const { allDataJson } = data || {};
  const { edges } = allDataJson || {};
  const node = edges[0].node;
  const { contactpage } = node || {};

  return (
    <Layout>
      <div className="px-2 px-ld-0">
        <Container className="border-radius-1 my-4 my-md-5 overflow-hidden">
          <Row className="bg-marino-lighter">
            <Col md={6}>
              <div className="p-3 p-md-4 p-lg-5">
                <h1 className="mb-5">{contactpage.heading}</h1>
                <p className="mb-4">{contactpage.description}</p>
                <p className="d-flex align-items-center mb-1">
                  <i className="bi bi-geo-alt fs-4 me-2"></i>
                  <span>{contactpage.address}</span>
                </p>
                <p className="d-flex align-items-center mb-0">
                  <i className="bi bi-telephone fs-4 me-2"></i>
                  <span>{contactpage.phoneNumber}</span>
                </p>
              </div>
            </Col>
            <Col md={6} className="g-0">
              <Map lat={26.215404} lng={-80.2720268} />
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
                  <span className="decorator fs-3">
                    {contactpage.sendMessage}
                  </span>
                </h3>
                <FormContact {...contactpage} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default ContactPage;

export const query = graphql`
  query {
    allDataJson {
      edges {
        node {
          contactpage {
            address
            description
            email
            firstName
            heading
            lastName
            message
            phone
            phoneNumber
            sendMessage
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
