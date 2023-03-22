import React from "react";
// import styled from "styled-components";
import { prefix } from "../shared/styles.js";

const BubbleMobile = ({ cta, text }) => {
  return (
    <div
      className={`d-flex align-items-center d-block d-md-none ${prefix}-bubble-mobile`}
    >
      <div className="d-flex flex-column justify-content-center bg-sycamore-lighter p-4">
        <div className="d-flex align-items-center justify-content-center mb-3">
          <i className="bi bi-megaphone fs-1 text-sycamore"></i>
        </div>
        <p className="text-center text-dark fs-6 mx-2 mx-md-0 mb-4">{text}</p>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="mx-2">
            <a
              className="btn bg-rouge rounded-pill text-white px-4 py-2 fw-bold mb-2 mb-md-0 mx-0 mx-md-2"
              href={cta[0].link}
              role="button"
            >
              {cta[0].label}
            </a>
          </div>
          <div className="mx-2">
            <a
              className="btn bg-rouge rounded-pill text-white px-4 py-2 fw-bold mb-md-0 mx-0 mx-md-2"
              href={cta[1].link}
              role="button"
            >
              {cta[1].label}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BubbleMobile;
