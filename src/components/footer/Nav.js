import React from "react";

// Components
import NavItem from "./NavItem";

// Variables
import { prefix } from "./../../shared/styles.js";

const Nav = ({ nav }) => (
  <div className={`${prefix}-footer-nav`}>
    <ul>
      {nav.map((item, index) => (
        <li key={index}>
          <NavItem to={item.link} label={item.label} />
        </li>
      ))}
    </ul>
  </div>
);

export default Nav;
