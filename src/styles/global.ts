import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

import colors from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    scroll-behavior:smooth;
    --webkit-font-smoothing: antialiased !important;
  }

  input, textarea, button, select, a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  html, body, #root {
    height: 100%;
    background: ${colors.white};
      &.fixed {
      overflow: hidden;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
    }
    ::-webkit-scrollbar {
      width: 8px;
      background: ${colors.primary};
      height: 8px;
    }
    ::-webkit-scrollbar-button {
      height: 0;
    }
    ::-webkit-scrollbar-track {
      background: ${colors.lighter};
    }
    ::-webkit-scrollbar-thumb {
      width: 8px;
      background: ${colors.primary};
      height: 8px;
    }
  }


  body {
    text-rendering: optimizeLegibility;
    background: #333;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: 'Montserrat', Arial, sans-serif !important;
    @media screen and (max-width:767px) {
    }
  }

  input.whiteFill:-internal-autofill-selected,
  input.whiteFill:-webkit-autofill,
  input.whiteFill:-webkit-autofill:hover,
  input.whiteFill:-webkit-autofill:focus {
    -webkit-text-fill-color: ${colors.white};
  }

  input:-internal-autofill-selected,
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: ${colors.primary};
    transition: background-color 5000s ease-in-out 0s;
  }

  h1, h2, h3, h4, h5, h6, p, label, span, strong, b {
    line-height: 120%;
  }

  a, button {
    cursor: pointer;
    transition: all .3s ease;
  }


  .Toastify__toast-container {
    width: 400px !important;
    max-width: 100%;
  }
  .toast-container {
    .Toastify__toast--success {
      background: ${colors.secondary};
      border-radius: 12px;
    }
    .Toastify__toast--error {
      background: ${colors.danger};
      border-radius: 12px;
    }
    .toast-style {
      min-height: 120px;
      background: #1a1a1a;
      border-radius: 12px;
      color: ${colors.lighter};
      .Toastify__close-button--default {
        color: ${colors.lighter};
        padding: 0 5px;
      }
      .Toastify__progress-bar--default {
        background: ${colors.lighter};
      }
    }
  }

  .Toastify__toast-container {
    width: 400px !important;
    max-width: 100%;
    border-radius: 12px;
  }
  .toast-container {
    .Toastify__toast--success {
      background: ${colors.success};
      border-radius: 12px;
    }
    .Toastify__toast--error {
      background: ${colors.danger};
      border-radius: 12px;
    }
    .toast-style {
      min-height: 120px;
      background: #1a1a1a;
      border-radius: 12px;
      color: ${colors.lighter};
      .Toastify__close-button--default {
        color: ${colors.lighter};
        padding: 0 5px;
      }
      .Toastify__progress-bar--default {
        background: ${colors.lighter};
      }
    }
  }

   /* BORDER INPUT ANIMATION */
   .effect-8 {
    transition: 0.4s;
  }
  .effect-8 ~ .focus-border:before,
  .effect-8 ~ .focus-border:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${colors.secondary};
    transition: 0.3s;
  }
  .effect-8 ~ .focus-border:after {
    top: auto;
    bottom: 0;
    left: auto;
    right: 0;
  }
  .effect-8 ~ .focus-border i:before,
  .effect-8 ~ .focus-border i:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 0;
    background-color: ${colors.secondary};
    transition: 0.4s;
  }
  .effect-8 ~ .focus-border i:after {
    left: auto;
    right: 0;
    top: auto;
    bottom: 0;
  }
  .effect-8:focus ~ .focus-border:before,
  .effect-8:focus ~ .focus-border:after {
    width: 100%;
    transition: 0.3s;
  }
  .effect-8:focus ~ .focus-border i:before,
  .effect-8:focus ~ .focus-border i:after {
    height: 100%;
    transition: 0.4s;
  }

  @keyframes zoomIn {
    0% {
      transform: scale(1, 1, 1);
    }
    100% {
      transform: scale(1.1, 1.1, 1.1);
    }
  }
`;
