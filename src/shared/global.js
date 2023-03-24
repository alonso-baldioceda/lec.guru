import { createGlobalStyle } from "styled-components";
import "@fontsource/lato";
import "@fontsource/lato/300.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";
import "@fontsource/lato/900-italic.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Variables
import { color as colors, typography } from "./styles";

const GlobalStyles = createGlobalStyle`
  /*********************/
  /***** Typography ****/
  /*********************/

  /* Reset */
  * {
    box-sizing: border-box;
    font-family: ${typography.type.marino};
    /* font-size: 1.0625rem; */
    font-size: 1rem;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 1.125rem;
    font-weight: 400;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${typography.weight.black} !important;

    &.underlined {
      i {
        font-weight: 700 !important;
      }

      .decorator {
        border-bottom: 6px solid ${colors.rouge};
      }
    }
  }

  .font-bold {
    font-weight: 700 !important;
  }

  .font-italic {
    font-style: italic !important;
  }

  /*********************/
  /**** Backgrounds ****/
  /*********************/

  .bg-marino {
    background-color: ${colors.marino} !important;
  }

  .bg-marino-light {
    background-color: ${colors.marinoLight} !important;
  }

  .bg-marino-lighter {
    background-color: ${colors.marinoLighter} !important;
  }

  .bg-rouge {
    background-color: ${colors.rouge} !important;
  }

  .bg-sycamore {
    background-color: ${colors.sycamore} !important;
  }

  .bg-sycamore-light {
    background-color: ${colors.sycamoreLight} !important;
  }

  .bg-sycamore-lighter {
    background-color: ${colors.sycamoreLighter} !important;
  }

  .bg-casal {
    background-color: ${colors.casal} !important;
  }

  .bg-casal-light {
    background-color: ${colors.casalLight} !important;
  }

  .bg-casal-lighter {
    background-color: ${colors.casalLighter} !important;
  }

  .bg-marino-lighter {
    background-color: ${colors.marinoLighter} !important;
  }

  .bg-rouge-lighter {
    background-color: ${colors.rougeLighter} !important;
  }

  .bg-finn {
    background-color: ${colors.finn} !important;
  }

  .bg-finn-light {
    background-color: ${colors.finnLight} !important;
  }

  .bg-finn-lighter {
    background-color: ${colors.finnLighter} !important;
  }

  /*********************/
  /****** Border *******/
  /*********************/

  .border-marino {
    border-color: ${colors.marino} !important;
  }

  .border-rouge {
    border-color: ${colors.rouge} !important;
  }

  .border-sycamore {
    border-color: ${colors.sycamore} !important;
  }

  .border-casal {
    border-color: ${colors.casal} !important;
  }

  /*********************/
  /***** Text Color ****/
  /*********************/

  .text-finn {
    color: ${colors.finn} !important;
  }

  .text-finn-light {
    color: ${colors.finnLight} !important;
  }

  .text-finn-lighter {
    color: ${colors.finnLighter} !important;
  }

  .text-marino {
    color: ${colors.marino} !important;
  }

  .text-marino-light {
    color: ${colors.marinoLight} !important;
  }

  .text-marino-lighter {
    color: ${colors.marinoLighter} !important;
  }

  .text-rouge {
    color: ${colors.rouge} !important;
  }

  .text-rouge-light {
    color: ${colors.rougeLight} !important;
  }

  .text-rouge-lighter {
    color: ${colors.rougeLighter} !important;
  }

  .text-sycamore {
    color: ${colors.sycamore} !important;
  }

  .text-sycamore-light {
    color: ${colors.sycamoreLight} !important;
  }

  .text-sycamore-lighter {
    color: ${colors.sycamoreLighter} !important;
  }

  .text-casal {
    color: ${colors.casal} !important;
  }

  .text-casal-light {
    color: ${colors.casalLight} !important;
  }

  .text-casal-lighter {
    color: ${colors.casalLighter} !important;
  }
`;

export default GlobalStyles;
