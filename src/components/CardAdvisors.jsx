import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link as GatsbyLink } from "gatsby";

// Variables
import { color, prefix } from "../shared/styles.js";

// Components
import SocialItem from "./SocialItem.jsx";

// Styles

const CardAdvisors = () => {
  const teamMembers = [
    {
      name: "Miguel Rodriguez ",
      Image: "",
      title: "Executive Advisor profile",
      bio: "Miguel is a manufacturing, quality systems and program management consultant, with over 30 years of experience in Pharmaceutical and Medical Device operations, assessing organizations critical business requirements, identifying deficiencies and potential opportunities, and developing innovative and cost-effective solutions for enhancing competitiveness.",
    },
    /*{
      name: "Eddie Ignacio ",
      title: "Executive Advisor profile",
      bio: "Jane Smith is the CTO of our company. She has a PhD in computer science and has worked on some of the most innovative projects in the industry.",
    },
    // Add more team members here*/
  ];

  return (
    <Row>
      {teamMembers.map((member) => (
        <Col md={4} key={member.name}>
          <Card.Img width="100%" src={member.Image.src} />
          <Card className="mb-4">
            <Card.Body>
              <Card.Title className="font-bold">{member.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted font-bold">
                {member.title}
              </Card.Subtitle>
              <Card.Text>{member.bio}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CardAdvisors;
