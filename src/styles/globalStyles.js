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
  --clr-dark: #101927;
  --clr-white: #ffffff;
  --clr-pale-gray: #f3f4f5;
  --clr-light-grayish-blue: #e5e7eb;
  --clr-grayish-blue: #f8f8f9;
  }

body {
  font-family: 'Poppins', sans-serif;
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1.54;
}`;

export default GlobalStyles;
