import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

// Variables
import { colors, prefix } from "../shared/styles.js";

// Styles
const StyledLink = styled.div`
  height: 100%;
  text-decoration: none;

  .card {
    border-radius: 8px;
    border: 3px solid ${colors.rouge};
    color: ${colors.black};
    height: 100%;
    transition: all 0.25s ease-out;

    &:hover {
      background-color: ${colors.rougeLighter};
    }
  }
`;

const CardV1 = ({ heading, icon, text }) => {
  return (
    <StyledLink className={`${prefix}-card-v1`}>
      <Card>
        <Card.Body className="d-flex flex-column p-4">
          <Card.Title className="d-flex align-items-center font-bold">
            <i className={`fs-1 bi bi-${icon} me-2`}></i>
            {heading}
          </Card.Title>
          <Card.Text className="d-flex">{text}</Card.Text>
          {/* <div>
            <button className="btn rounded-pill bg-rouge text-white px-4 py-2 fw-bold">
              {cta}
            </button>
          </div> */}
        </Card.Body>
      </Card>
    </StyledLink>
  );
};

export default CardV1;
