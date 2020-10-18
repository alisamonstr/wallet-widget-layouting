import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
      * {
        font-family: TTCommons, sans-serif;
      }
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    @font-face {
      font-family: "TTCommons";
      src: url("fonts/TTCommons-Regular.ttf");
      font-style: normal;
    } 
    @font-face {
      font-family: "TTCommons";
      src: url("fonts/TTCommons-Medium.ttf");
      font-weight: 500;
    }   
`
