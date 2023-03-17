import React from "react";

// Variables
import { prefix } from "./../../shared/styles.js";

const Contact = ({ phone, email }) => (
  <div className={`${prefix}-footer-contact`}>
    <ul>
      <li>
        <p>{phone.label}</p>
      </li>
      <li>
        <p>{phone.value}</p>
      </li>
      <li>
        <p>{email.label}</p>
      </li>
      <li>
        <p>{email.value}</p>
      </li>
    </ul>
  </div>
);

export default Contact;
