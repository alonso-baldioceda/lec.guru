import { createGlobalStyle } from "styled-components";
import "@fontsource/lato";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";
import "@fontsource/lato/900-italic.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Variables
import { color, typography } from "./styles";

const GlobalStyles = createGlobalStyle`
  /*********************/
  /***** Typography ****/
  /*********************/

  /* Reset */
  * {
    box-sizing: border-box;
    font-family: ${typography.type.marino};
    /* font-size: 1.0625rem; */
    font-size: 1.03125rem;
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
        border-bottom: 6px solid ${color.rouge};
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
    background-color: ${color.marino} !important;
  }

  .bg-marino-light {
    background-color: ${color.marinoLight} !important;
  }

  .bg-marino-lighter {
    background-color: ${color.marinoLighter} !important;
  }

  .bg-rouge {
    background-color: ${color.rouge} !important;
  }

  .bg-sycamore {
    background-color: ${color.sycamore} !important;
  }

  .bg-sycamore-light {
    background-color: ${color.sycamoreLight} !important;
  }

  .bg-sycamore-lighter {
    background-color: ${color.sycamoreLighter} !important;
  }

  .bg-casal {
    background-color: ${color.casal} !important;
  }

  .bg-marino-lighter {
    background-color: ${color.marinoLighter} !important;
  }

  .bgrouge-lighter {
    background-color: ${color.rougeLighter} !important;
  }

  /*********************/
  /****** Border *******/
  /*********************/

  .border-marino {
    border-color: ${color.marino} !important;
  }

  .border-rouge {
    border-color: ${color.rouge} !important;
  }

  .border-sycamore {
    border-color: ${color.sycamore} !important;
  }

  .border-casal {
    border-color: ${color.casal} !important;
  }

  /*********************/
  /***** Text Color ****/
  /*********************/

  .text-finn {
    color: ${color.finn} !important;
  }

  .text-finn-light {
    color: ${color.finnLight} !important;
  }

  .text-finn-lighter {
    color: ${color.finnLighter} !important;
  }

  .text-marino {
    color: ${color.marino} !important;
  }

  .text-marino-light {
    color: ${color.marinoLight} !important;
  }

  .text-marino-lighter {
    color: ${color.marinoLighter} !important;
  }

  .text-rouge {
    color: ${color.rouge} !important;
  }

  .text-rouge-light {
    color: ${color.rougeLight} !important;
  }

  .text-rouge-lighter {
    color: ${color.rougeLighter} !important;
  }

  .text-sycamore {
    color: ${color.sycamore} !important;
  }

  .text-sycamore-light {
    color: ${color.sycamoreLight} !important;
  }

  .text-sycamore-lighter {
    color: ${color.sycamoreLighter} !important;
  }

  .text-casal {
    color: ${color.casal} !important;
  }

  .text-casal-light {
    color: ${color.casalLight} !important;
  }

  .text-casal-lighter {
    color: ${color.casalLighter} !important;
  }
`;

export default GlobalStyles;
