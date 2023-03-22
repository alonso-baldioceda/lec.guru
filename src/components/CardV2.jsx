import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

// Variables
import { color, prefix } from "../shared/styles.js";

// Components
import SocialItem from "./SocialItem.jsx";

// Styles

const StyledCardV2 = styled.div`
  .card {
    background-color: ${color.softMarino} !important;

    img {
      border: 6px solid ${color.white};
      border-radius: 50%;
      transition: transform 0.3s ease;
    }

    &:hover {
      img {
        transform: scale(1.05);
      }
    }

    .${prefix}-social-item {
      color: ${color.marino} !important;

      i {
        font-size: 1.25rem !important;
      }

      &:hover {
        color: ${color.rouge} !important;
      }
    }
  }
`;

const Link = styled((props) => <GatsbyLink {...props} />)`
  text-decoration: none;
  cursor: pointer;

  .card {
    background-color: ${color.softMarino} !important;

    img {
      border: 6px solid ${color.white};
      border-radius: 50%;
      transition: transform 0.3s ease;
    }

    &:hover {
      img {
        transform: scale(1.05);
      }
    }

    .${prefix}-social-item {
      color: ${color.marino} !important;

      i {
        font-size: 1.25rem !important;
      }

      &:hover {
        color: ${color.rouge} !important;
      }
    }
  }
`;

const ImageContainer = styled.div`
  background-color: ${color.white};
  border: 6px solid ${color.marino};
  border-radius: 50%;
  height: 100%;
  overflow: hidden;
  width: 100%;
`;

const CardV2 = ({ name, img, link, job, social, text }) => {
  return (
    <StyledCardV2>
      <Card className={`border-0 bg-light p-4 ${prefix}-card-v2`}>
        <Link to={link}>
          <ImageContainer className="mb-3 p-1 p-lg-2">
            <Card.Img variant="top" src={img} />
          </ImageContainer>
        </Link>
        <Card.Body>
          <Link to={link}>
            <Card.Title className="text-uppercase fw-bold text-center text-dark fs-5 mb-0">
              {name}
            </Card.Title>
            <Card.Text className="text-marino text-center fw-bold mb-3 mt-2">
              {job}
            </Card.Text>
            <Card.Text className="text-center text-dark">{text}</Card.Text>
          </Link>
          <div className="d-flex justify-content-center mt-3">
            {social.links.map((item, index) => (
              <SocialItem key={index} {...item} />
            ))}
          </div>
        </Card.Body>
      </Card>
    </StyledCardV2>
  );
};

export default CardV2;