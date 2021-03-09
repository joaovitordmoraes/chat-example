import { createGlobalStyle } from 'styled-components';

const Settings = createGlobalStyle`
  :root {

    --font-base: 'Montserrat', sans-serif;

    --size-base: 10px;
    --size-regular: 1.6rem;

    --color-white: #ffffff;
    --color-background: #161b22;
    --color-error: #D51406;
    --color-success: #008000;
    --color-success-hover: rgba(0, 128, 0, .7);
    --color-gray: rgba(160, 160, 160, 0.5);
  }
`

export default Settings;