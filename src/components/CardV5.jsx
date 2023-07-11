import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";

// Variables
import { colors, prefix } from "../shared/styles.js";

// Components
// import SocialItem from "./SocialItem.jsx";
import RichText from "./RichText.jsx";

// Styles
const StyledCardV5 = styled.div`
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
  border: 6px solid ${colors.marino};
  border-radius: 50%;
  margin-bottom: 1rem;
  overflow: hidden;

  @media (min-width: 992px) {
    margin-bottom: 0;
    width: 25%;
    margin-right: 1rem;
  }
`;

const CardV5 = ({ image, name, job, bio, phone, email, social }) => {
  return (
    <StyledCardV5>
      <Card className={`h-100 ${prefix}-card-v5`}>
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
                <p className="mb-1 font-bold text-center text-lg-start">
                  {name}
                </p>
                <p className="mb-0 text-marino text-center text-lg-start">
                  {job}
                </p>
              </div>
            </div>
          </Card.Title>
          {bio && (
            <div className="text-start text-dark p-4 pb-0">
              <RichText text={bio} />
            </div>
          )}
          {!bio && <p></p>}
          {/* {phone && (
            <p className="text-xtart text-dark px-4">
              <span className="fw-bold">Phone</span>:<br />
              {phone}
            </p>
          )}
          {email && (
            <p className="text-xtart text-dark px-4">
              <span className="fw-bold">Email</span>:<br />
              {email}
            </p>
          )} */}
          {/* 
          <div className="d-flex justify-content-center justify-content-md-start px-4 pt-2 pb-4">
            {social.links.map((item, index) => (
              <SocialItem key={index} link={item.link} icon={item.icon} />
            ))}
          </div>
        */}
        </Card.Body>
      </Card>
    </StyledCardV5>
  );
};

export default CardV5;
