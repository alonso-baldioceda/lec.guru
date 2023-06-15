import React from "react";

import CollapsableItemList from "./CollapsableItemList";

// Variables
import { prefix } from "../shared/styles.js";

const CardV6 = ({ tag, title, introduction, details }) => (
  <div
    id={tag}
    className={`bg-sycamore-lighter border-radius-1 ${prefix}-card-v6`}
  >
    <div className="p-4 p-sm-5 px-lg-4 py-lg-5">
      <h3 className="text-center mb-4 mb-lg-4 font-bold text-sycamore">
        {title}
      </h3>
      <p className="mb-2 text-center">{introduction}</p>
      <ul className="list-unstyled mb-0 ">
        {details.map((detail, index) => (
          <CollapsableItemList key={index} item={detail} />
        ))}
      </ul>
    </div>
  </div>
);

export default CardV6;
