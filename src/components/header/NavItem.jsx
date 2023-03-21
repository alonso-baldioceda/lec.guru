import React from "react";
import { Link as GatsbyLink } from "gatsby";

// Variables
import { prefix } from "./../../shared/styles.js";

const NavItem = ({ to, label }) => (
  <GatsbyLink className={`${prefix}-nav-item`} to={to}>
    {label}
  </GatsbyLink>
);

export default NavItem;
