import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/300-italic.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/400-italic.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/700-italic.css";
import "@fontsource/lato/900.css";
import "@fontsource/lato/900-italic.css";
import { createGlobalStyle } from "styled-components";

// Variables
import { colors, typography, prefix } from "./styles";

const GlobalStyles = createGlobalStyle`
  /*********************/
  /***** Typography ****/
  /*********************/

  /* Reset */
  * {
    box-sizing: border-box;
    font-family: ${typography.type.primary};
    font-size: 1.0625rem;  
    font-weight: ${typography.weights.regular};  
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${typography.weights.black} !important;

    .decorator {
      border-bottom: 6px solid ${colors.rouge};
      font-weight: ${typography.weights.black} !important;
      line-height: 1.4;
    }
  }

  .font-bolder {
    font-weight: ${typography.weights.black} !important;
  }

  ${() => {
    let styles = "";
    for (const color in colors) {
      const camelToDash = color
        .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
        .toLowerCase();

      styles += `
      .bg-${camelToDash} {
        background-color: ${colors[color]} !important;
      }

      .border-${camelToDash} {
        border-color: ${colors[color]} !important;
        border-style: solid;
        border-width: 4px;
      }

      .text-${camelToDash} {
        color: ${colors[color]} !important;
      }
    `;
    }

    for (const weight in typography.weights) {
      styles += `
        .font-${weight} {
          font-weight: ${typography.weights[weight]} !important;
        }
      `;
    }

    return styles;
  }}

  .border-radius-1 {
    border-radius: 8px; 
  }

  /* Specific classes for WP */
  .${prefix}-blog-post {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-bottom: 1rem;
    }

    blockquote {
      background: ${colors.marinoLighter};
      border-left: 6px solid ${colors.marino};
      border-radius: 4px;
      color: #555555;
      font-size: 1.25em;
      font-style: italic;
      line-height: 1.6;
      margin: 3rem auto;
      padding: 1.2em 30px;
      position: relative;

      @media (min-width: 992px) {
        width: 80%;
      }

      &:before {
        color: black;
        content: open-quote;
        font-size: 8em;
        line-height: .1em;
        margin-left: -1rem;
        margin-right: .25em;
        opacity:0.60;
        vertical-align: -.4em;
      }

      &:after {
        color: transparent;
        content: close-quote;
        font-size: 0em;
      }

      P {
        color: ${colors.black};

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    ul, ol {
      ul, ol {
        margin-bottom: 2rem;
        margin-top: 1rem;
      }
    }

    figure {
      figcaption {
        font-size: .95rem !important;
        font-style: italic;
      }
    }
  }
`;

export default GlobalStyles;
