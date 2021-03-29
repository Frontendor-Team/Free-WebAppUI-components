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
  }

html:focus-within {
  scroll-behavior: smooth;
}

body {
  min-height: 100%;
  font-family: 'Poppins', sans-serif;
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
}

input,
button,
textarea,
select {
  font: inherit;
}

/* HELPER CLASSES  */
.container {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}

.wrapper {
  box-shadow: 0 4px 40px 0 rgb(0 0 0 / 10%);
  max-width: 90rem; /* 1440px  */s
}

.title {
  color: var(--clr-dark);
  padding-top: 1.0625rem;
  font-size: 1.3125rem;
  line-height: 1.48;
  
  @media screen and (min-width: 768px) {
    padding-top: 0;
  }
}

.divider {
  opacity: 0.25;
}
`;

export default GlobalStyles;
