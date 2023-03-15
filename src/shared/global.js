import { createGlobalStyle } from "styled-components";

export const fontUrl =
  "https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700";

const GlobalStyles = createGlobalStyle`
  @import url(${fontUrl});

  /*********************/
  /***** Typography ****/
  /*********************/

  body {
    font-family: "Ubuntu", sans-serif;
    font-size: 1.125rem;
    font-weight: 400;
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
`;

export default GlobalStyles;
