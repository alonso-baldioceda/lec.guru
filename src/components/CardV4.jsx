import React from "react";
import { prefix } from "../shared/styles.js";
import { GatsbyImage } from "gatsby-plugin-image";

const CardV4 = ({ text, image, alt, name, position }) => {
  return (
    <div
      className={`d-flex justify-content-center flex-column w-75 mx-auto ${prefix}-card-v4`}
    >
      <p className="text-white text-center mb-5">{text}</p>
      <div className="d-flex align-items-center flex-column">
        <span className="mb-3">
          {image ? (
            <GatsbyImage
              image={image}
              alt={alt}
              className="rounded-circle me-3"
            />
          ) : null}
        </span>
        <h6 className="mb-0 text-white">{name}</h6>
        <p className="mb-3 text-white">{position}</p>
      </div>
    </div>
  );
};

export default CardV4;
