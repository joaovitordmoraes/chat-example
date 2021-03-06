import { createGlobalStyle } from 'styled-components';

const Base = createGlobalStyle`
  html, body {
    font-family: var(--font-base);
    font-size: var(--size-base);
    background-color: var(--color-background);
    min-height: 100vh;
  }
`;

export default Base;