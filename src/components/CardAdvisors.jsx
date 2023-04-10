import React from "react";
import styled from "styled-components";
<<<<<<< Updated upstream
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link as GatsbyLink } from "gatsby";
=======
import { Card } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";
>>>>>>> Stashed changes

// Variables
import { color, prefix } from "../shared/styles.js";

// Components
import SocialItem from "./SocialItem.jsx";
<<<<<<< Updated upstream

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
=======
import RichText from "./RichText.jsx";

// Styles
const StyledCardAdvisors = styled.div`
  .${prefix}-social-item {
    color: ${colors.marino} !important;

    &:hover {
      color: ${colors.rouge} !important;
    }

    i {
      font-size: 1.9rem !important;
    }
  }
`;

const ImageContainer = styled.div`
  background-color: ${colors.white};
  border-radius: 50%;
  margin-bottom: 1rem;
  /* 
  @media (min-width: 768px) {
    margin-right: 0;
  } */

  @media (min-width: 992px) {
    margin-bottom: 0;
    width: 25%;
    margin-right: 1rem;
  }
`;

const CardAdvisors = ({ image, name, title, bio, social }) => {
  return (
    <Card className=" h-100">
      <Card.Body className="m-0 p-0">
        <Card.Title className=" mb-0 p-4 pb-0">
          <div className="d-flex flex-column flex-lg-row align-items-center ">
            <ImageContainer>
              <GatsbyImage
                className="rounded-circle"
                variant="top"
                image={image}
                alt="Dinosaur"
              />
            </ImageContainer>
            <div className="d-flex flex-column alig-items-center">
              <p className="mb-1 font-bold text-center text-lg-start">{name}</p>
              <p className="mb-0 text-marino text-center text-lg-start">
                {title}
              </p>
            </div>
          </div>
        </Card.Title>
        <Card.Text className="text-start text-dark p-4 pb-0">
          <RichText text={bio} />
        </Card.Text>
        <StyledCardAdvisors>
          <div className="d-flex justify-content-center justify-content-md-start px-4 pt-2 pb-4">
            {social.links.map((item, index) => (
              <SocialItem key={index} link={item.link} icon={item.icon} />
            ))}
          </div>
        </StyledCardAdvisors>
      </Card.Body>
    </Card>
>>>>>>> Stashed changes
  );
};

export default CardAdvisors;
