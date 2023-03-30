import { createGlobalStyle } from "styled-components";
import "@fontsource/lato/300-italic.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400-italic.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700-italic.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900-italic.css";
import "@fontsource/lato/900.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Variables
import { colors, typography } from "./styles";

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
    }
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
`;

export default GlobalStyles;
