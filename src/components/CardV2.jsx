import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

// Variables
import { colors, prefix } from "../shared/styles.js";

// Components
// import SocialItem from "./SocialItem.jsx";

// Styles
const StyledCardV2 = styled.div`
  .card {
    background-color: ${colors.softMarino} !important;

    img {
      border: 6px solid ${colors.white};
      border-radius: 50%;
      transition: transform 0.3s ease;
    }

    &:hover {
      img {
        transform: scale(1.05);
      }
    }

    .${prefix}-social-item {
      color: ${colors.marino} !important;

      i {
        font-size: 1.25rem !important;
      }

      &:hover {
        color: ${colors.rouge} !important;
      }
    }
  }
`;

const Link = styled((props) => <GatsbyLink {...props} />)`
  text-decoration: none;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  background-color: ${colors.white};
  border: 6px solid ${colors.marino};
  border-radius: 50%;
  height: 100%;
  overflow: hidden;
  width: 100%;
`;

const CardV2 = ({ name, img, link, job, phone, email, social, text }) => {
  return (
    <StyledCardV2 className="h-100">
      <Card className={`border-0 bg-light p-4 h-100 ${prefix}-card-v2`}>
        <Link to={link}>
          <div>
            <ImageContainer className="mb-3 p-1 p-lg-2">
              <Card.Img variant="top" src={img} />
            </ImageContainer>
          </div>

          <Card.Body>
            <Card.Title className="text-uppercase fw-bold text-center text-dark fs-5 mb-0">
              {name}
            </Card.Title>
            <Card.Text className="text-marino text-center fw-bold mb-3 mt-2">
              {job}
            </Card.Text>
            {text && (
              <Card.Text className="text-center text-dark">{text}</Card.Text>
            )}
            {phone && (
              <Card.Text className="text-center text-dark">
                <span className="fw-bold">Phone</span>:<br />
                {phone}
              </Card.Text>
            )}
            {email && (
              <Card.Text className="text-center text-dark">
                <span className="fw-bold">Email</span>:<br />
                {email}
              </Card.Text>
            )}

            {/* <div className="d-flex justify-content-center mt-3">
            {social.links.map((item, index) => (
              <SocialItem key={index} {...item} />
            ))}
          </div> */}
          </Card.Body>
        </Link>
      </Card>
    </StyledCardV2>
  );
};

export default CardV2;
