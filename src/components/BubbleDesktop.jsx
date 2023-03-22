import React from "react";
// import styled from "styled-components";
import { prefix } from "../shared/styles.js";

const BubbleDesktop = ({ cta, text }) => {
  return (
    <div
      className={`d-flex align-items-center d-none d-md-block ${prefix}-bubble-desktop`}
    >
      <div className="d-flex flex-row justify-content-center bg-sycamore-lighter mb-3 mb-lg-4 p-4 rounded rounded-4">
        <div className="d-flex align-items-center justify-content-center h-100">
          <i className="bi bi-megaphone fs-1 text-sycamore mx-2"></i>
        </div>
        <p className="text-center text-dark fs-6 mx-2 mx-md-0 mb-0">{text}</p>
      </div>
      <div className="d-flex justify-content-center flex-column flex-md-row">
        <div>
          <a
            className="btn bg-rouge rounded-pill text-white px-4 py-2 fw-bold mb-2 mb-md-0 mx-0 mx-md-2"
            href={cta[0].link}
            role="button"
          >
            {cta[0].label}
          </a>
        </div>
        <div>
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
  );
};

export default BubbleDesktop;
