import { createGlobalStyle } from "styled-components";

// Variables
import { color } from "./styles";

// Constants
// Please note that the fontUrl is commented out because it is not used in this project.
// We can use it in the future if we want to import a font from Google Fonts.
// export const fontUrl =
//   "https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700";

const GlobalStyles = createGlobalStyle`
  /*********************/
  /***** Typography ****/
  /*********************/

  /* Reset */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "PT Serif", Georgia, "Times New Roman", serif;
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
  }



  /* h1 {
    @media (min-width: <number>px) {
    }
  } */

  /*********************/
  /**** Backgrounds ****/
  /*********************/

  .bg-botti {
    background-color: ${color.botti};
  }

  .bg-marino {
    background-color: ${color.marino};
  } 

  .bg-chateau {
    background-color: ${color.chateau};
  }

  .bg-white {
    background-color: ${color.white};
  }

  .bg-black {
    background-color: ${color.black};
  }

  /*********************/
  /***** Text Color ****/
  /*********************/

  .text-botti {
    color: ${color.botti};
  }

  .text-marino {
    color: ${color.marino};
  }

  .text-chateau {
    color: ${color.chateau};
  }

  .text-white {
    color: ${color.white};
  }

  .text-black {
    color: ${color.black};
  }
`;

export default GlobalStyles;
