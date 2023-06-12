import React from "react";
import styled from "styled-components";
import { prefix, colors } from "./../shared/styles.js";

// Styles
const StyledBlockquote = styled.div`
  figure {
    i {
      color: ${colors.sycamore};
      font-size: 2.2rem;
    }

    .quote {
      font-size: 1.4rem;
    }

    .blockquote-footer {
      font-size: 1.2rem;
    }
  }
`;

const Blockquote = ({ text, author }) => {
  return (
    <StyledBlockquote className={`${prefix}-blockquote`}>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-8">
            <figure className="p-5 mb-0">
              <i className="bi bi-quote mb-4"></i>
              <blockquote className="blockquote pb-2">
                <p className="quote">{text}</p>
              </blockquote>
              <figcaption className="blockquote-footer mb-3">
                {author}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </StyledBlockquote>
  );
};

export default Blockquote;
