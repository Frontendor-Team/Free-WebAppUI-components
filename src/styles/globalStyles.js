import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding:0;
  box-sizing: border-box;
}

html {
  --clr-bright-blue: #0064fe;
  --clr-ice-blue: #f2f7ff;
  --clr-battleship-grey: #6b7280;
  --clr-steel: #88909b;
  // --clr-dark: #101927;
  --clr-white: #ffffff;
  }

html:focus-within {
  scroll-behavior: smooth;
}

body {
  min-height: 100%;
  font-family: Poppins, sans-serif;
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1.54;
  text-rendering: optimizeSpeed;
  transition: all .25s ease;
}

ul, ol {
  list-style: none;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img,
picture {
  max-width: 100%;
  display: block;
}`;

export default GlobalStyles;
