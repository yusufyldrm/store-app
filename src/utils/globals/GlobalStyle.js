import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    transition: all 0.3s linear;

    ::selection {
      background-color: #6638B6;
      color: #fff;
    }
  }

  html {
    background-color: ${theme.colors.background};
    transition: background-color 0s linear;
  }

  body {
    overflow-x: hidden;
  }

  textarea {
    :focus {
      outline: none;
    }
  }

  p,h1,h2,h3,h4,a {
    color: ${theme.colors.primaryText};
  }

  button {
    cursor: pointer;
  }

  img {
    border-style: none;
  }
`;

export default GlobalStyle;
