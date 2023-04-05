import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Card } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

// Variables
import { colors, prefix } from "../shared/styles.js";

// Components
import SocialItem from "./SocialItem.jsx";
import RichText from "../components/RickText.jsx";

// Styles
const StyledExecutiveAdvisorsPage = styled.div`
    .${prefix}-social-item {
      color: ${colors.marino} !important;

      i {
        font-size: 1.90rem !important;
      }

      &:hover {
        color: ${colors.rouge} !important;
      }
    }
  }
`;

const ImageContainer = styled.div`
  background-color: ${colors.white};
  border: 6px solid ${colors.marino};
  border-radius: 50%;
  height: 100%;
  overflow: hidden;
  width: 100%;
`;

const CardAdvisors = ({ image, name, title, bio, social }) => {
  console.log(social);
  return (
    <Col md={20} key={name}>
      <Card className="mb-4">
        <Card.Body>
          <ImageContainer className="mb-3 p-1 p-lg-2">
            <GatsbyImage
              className="rounded-circle"
              variant="top"
              image={image}
              alt="Dinosaur"
            />
          </ImageContainer>
          <Card.Title className="text-uppercase fw-bold text-center text-dark fs-5">
            {name}
          </Card.Title>
          <Card.Subtitle className="text-marino text-center fw-bold mb-3 mt-2">
            {title}
          </Card.Subtitle>
          <Card.Text xl={6} className="text-start text-dark">
            <RichText text={bio} />
          </Card.Text>
          <StyledExecutiveAdvisorsPage>
            <div className="d-flex justify-content-center mt-4">
              {social.links.map((item, index) => (
                <SocialItem key={index} link={item.link} icon={item.icon} />
              ))}
            </div>
          </StyledExecutiveAdvisorsPage>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardAdvisors;
