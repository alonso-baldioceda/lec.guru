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
    font-family: 'Montserrat', Helvetica, Arial, Lucida, sans-serif;
    font-style: normal;
    font-weight: bold;
    padding-bottom: 10px;
  }

  h1 {
    font-size: 30px;
  }

  h2 {}

  h3 {}

  h4 {
    font-size: 21px;
    line-height: 1em;
  }

  h5 {}
  
  h6 {}

  /* h1 {
    @media (min-width: <number>px) {
    }
  } */

  p {
    font-size: 13px;
    line-height: 1.5em;
  }

  /*********************/
  /**** Grid ****/
  /*********************/

  .container {
    position: relative;
    width: 80%;
    max-width: 1080px;
    margin: 0 auto;
  }

  /*********************/
  /**** Backgrounds ****/
  /*********************/

  .bg-black {
    background-color: ${color.black};
  }

  .bg-botti {
    background-color: ${color.botti};
  }

  .bg-chateau {
    background-color: ${color.chateau};
  }

  .bg-marino {
    background-color: ${color.marino};
  } 

  .bg-seashell {
    background-color: ${color.seashell};
  }

  .bg-white {
    background-color: ${color.white};
  }

  /*********************/
  /***** Text Color ****/
  /*********************/

  .text-black {
    color: ${color.black};
  }

  .text-botti {
    color: ${color.botti};
  }

  .text-chateau {
    color: ${color.chateau};
  }

  .text-marino {
    color: ${color.marino};
  }

  .text-seashell {
    color: ${color.seashell};
  }

  .text-white {
    color: ${color.white};
  }

  /*********************/
  /***** Text align ****/
  /*********************/

  .text-center {
    text-align: center;
  }
`;

export default GlobalStyles;
