import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {

    font-family: "Helvetica";
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: grey;
  }
`;

export default GlobalStyle;
