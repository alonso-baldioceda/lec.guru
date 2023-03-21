import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Variables
import { prefix } from "./../../shared/styles.js";

// Components
import NavItem from "./NavItem.jsx";
import SocialItem from "../SocialItem.jsx";

const Footer = ({ contact, copyright, nav, social }) => (
  <footer className={`bg-light bg-dark ${prefix}-footer`}>
    <Container className="py-3 py-lg-5">
      <Row className="">
        <Col lg={4} className="mb-3 mb-lg-0">
          <h5 className="text-white my-3 font-bold">{nav.heading}</h5>
          <ul className="list-unstyled mb-0">
            {nav.nav.map((item, index) => (
              <li key={index} className="mb-1">
                <NavItem {...item} />
              </li>
            ))}
          </ul>
        </Col>
        <Col lg={4} className="mb-3 mb-lg-0">
          <h5 className="text-white my-3 font-bold">{contact.heading}</h5>
          <p className="text-white mb-1">{contact.address}</p>
          <p className="text-white mb-1">{contact.phone}</p>
          <p className="text-white mb-0">{contact.email}</p>
        </Col>
        <Col lg={4} className="mb-3 mb-lg-0">
          <h5 className="text-white my-3 font-bold">{social.heading}</h5>
          <div>
            {social.links.map((item, index) => (
              <SocialItem key={index} {...item} />
            ))}
          </div>
        </Col>
      </Row>
    </Container>
    <div className="bg-marino py-2 text-center">
      <Container>
        <p className="mb-0 text-light text-white small py-2">{copyright}</p>
      </Container>
    </div>
  </footer>
);

export default Footer;
