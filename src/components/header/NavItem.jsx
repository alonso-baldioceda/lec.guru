import React from "react";
import { Link as GatsbyLink } from "gatsby";

// Variables
import { prefix } from "./../../shared/styles.js";

const NavItem = ({ to, label, isOpen, setIsOpen }) => {
  const handleClick = () => {
    if (isOpen) {
      document.body.style.overflow = "scroll";
      setIsOpen(!isOpen);
    }
  };

  return (
    <GatsbyLink className={`${prefix}-nav-item`} to={to} onClick={handleClick}>
      {label}
    </GatsbyLink>
  );
};

export default NavItem;
