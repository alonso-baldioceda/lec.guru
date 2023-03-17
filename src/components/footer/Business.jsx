import React from "react";

// Variables
import { prefix } from "./../../shared/styles.js";

const Business = ({ days, vacations }) => (
  <div className={`${prefix}-footer-business`}>
    <ul>
      <li>
        <p>{days.label}</p>
      </li>
      <li>
        <p>{days.value}</p>
      </li>
      <li>
        <p>{vacations.label}</p>
      </li>
      <li>
        <p>{vacations.value}</p>
      </li>
    </ul>
  </div>
);

export default Business;
