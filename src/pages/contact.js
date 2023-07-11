import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";

// Components
import Layout from "../components/Layout";
import FormContact from "../components/FormContact";
import Map from "../components/Map";

const ContactPage = () => {
  const { t } = useTranslation();

  const trContactPage = t("contactpage", {
    returnObjects: true,
  });

  const { heading, description, address, phoneNumber, sendMessage } =
    trContactPage;

  // TODO: Hard stress contact form
  return (
    <Layout>
      <div className="px-2 px-ld-0">
        <Container className="border-radius-1 my-4 my-md-5 overflow-hidden">
          <Row className="bg-marino-lighter">
            <Col md={6}>
              <div className="px-0 px-md-4 px-lg-5 py-4 py-lg-5">
                <h1 className="mb-3 mb-lg-5">{heading}</h1>
                <p className="mb-4">{description}</p>
                <p className="d-flex align-items-center mb-1">
                  <i className="bi bi-geo-alt fs-4 me-2"></i>
                  <span>{address}</span>
                </p>
                <p className="d-flex align-items-center mb-0">
                  <i className="bi bi-telephone fs-4 me-2"></i>
                  <span>{phoneNumber}</span>
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
              <div className="px-0 px-md-5 py-3">
                <h3 className="mb-3 mb-lg-5">
                  <span className="decorator fs-3">{sendMessage}</span>
                </h3>
                <FormContact {...trContactPage} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default ContactPage;
