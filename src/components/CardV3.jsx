import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import { Card } from "react-bootstrap";
import { prefix } from "../shared/styles.js";

// Styles
const StyledCardV3 = styled.div`
  position: relative;

  .card {
    display: flex;

    img {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .card-title {
      min-height: 80px;
    }
  }
`;

const CardV3 = ({ cta, heading, image, img }) => {
  // TODO: use excerpt
  // Trim the heading to 40 characters
  const trimmedHeading = heading.substring(0, 60);

  return (
    <StyledCardV3 className={classnames(`m-2 ${prefix}-card-v3`)}>
      <Card className="border-radius-1">
        <Card.Img width="100%" src={img.src} alt={img.alt} />
        <Card.Body className="m-2">
          <Card.Title tag="h6" className="font-bold">
            {trimmedHeading}...
          </Card.Title>
          {/* TODO: Add categoory and date */}
          {/* <Card.Text>{card.text}</CardText> */}
        </Card.Body>
      </Card>
    </StyledCardV3>
  );
};

export default CardV3;
