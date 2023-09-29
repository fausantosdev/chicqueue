import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
      --primary: #348789;
      --secondary: #001489;
      --secondary-50: #283dae;
      --gray-50: #dddfeb;
      --gray-100: #979090bb;
      --gray-200: #535653;
      --gray-300: #7c838b;
      --white: #ffffff;
      --black: #111111;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: sans-serif;
  }
  
  html, body {
    height: 100%;
    overflow-x: hidden;
  }

  body {
    background: var(--gray-50);
    color: #ffffff;
  }

  input {
    color: ${props => props.theme.colors.text.medium};
  }

  body, input, button {
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    color: ${props => props.theme.colors.text.dark};
  }

  button {
    cursor: pointer;
  }
`