import React from "react";
import styled from "styled-components";
import classnames from "classnames";

// Variables
import { prefix, colors } from "./../../shared/styles.js";

// Styles
const StyledMenuClose = styled.div`
  height: 32px;
  width: 32px;

  .menu-close-bars {
    cursor: pointer;
    display: inline-block;
    height: 32px;
    overflow: hidden;
    transform: rotate(0deg);
    width: 32px;
    z-index: 1000;

    span {
      background: ${colors.white};
    }

    &.is-open {
      z-index: 99999;

      span {
        &:nth-child(1) {
          left: 50%;
          top: 12px;
          width: 0%;
        }

        &:nth-child(2) {
          transform: rotate(45deg);
        }

        &:nth-child(3) {
          transform: rotate(-45deg);
        }

        &:nth-child(4) {
          left: 50%;
          top: 12px;
          width: 0%;
        }
      }
    }
  }
`;

const StyledSpan = styled.span`
  border-radius: 8px;
  display: block;
  height: 3px;
  left: 0;
  opacity: 1;
  position: absolute;
  transform: rotate(0deg);
  transition: 0.15s ease;
  width: 100%;

  &:nth-child(1) {
    top: 2px;
  }

  &:nth-child(2),
  &:nth-child(3) {
    top: 14px;
  }

  &:nth-child(4) {
    top: 26px;
  }
`;

const MenuClose = ({ isOpen, setIsOpen }) => {
  return (
    <StyledMenuClose
      className={classnames(`${prefix}-menu-close`)}
      onClick={() => {
        document.body.style.overflow = isOpen === true ? "scroll" : "hidden";
        setIsOpen(!isOpen);
      }}
    >
      <div className={classnames({ "is-open": isOpen }, "menu-close-bars")}>
        <StyledSpan />
        <StyledSpan />
        <StyledSpan />
        <StyledSpan />
      </div>
    </StyledMenuClose>
  );
};

export default MenuClose;
