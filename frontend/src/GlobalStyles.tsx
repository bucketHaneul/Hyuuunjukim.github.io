import React from 'react';
import { css, Global } from '@emotion/react';
import { PALETTE } from './constants';

const GlobalStyles = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

      * {
        box-sizing: border-box;
      }
      html {
        font-size: 10px;
      }

      body {
        margin: 0;
        padding: 0;
        font-size: 1.6rem;
      }

      #root {
        font-family: 'Noto Sans KR', sans-serif;
        height: 100%;
        color: ${PALETTE.BLACK};
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      a {
        text-decoration: none;
        outline: none;
        color: black;
        &:hover,
        &:active,
        &:visited,
        &:focus {
          text-decoration: none;
        }
      }

      button {
        padding: 0;
        outline: none;
        border: none;
        background: none;
        cursor: pointer;
        font-family: inherit;
        &[disabled] {
          cursor: not-allowed;
        }
      }

      input {
        -webkit-appearance: none;
        -webkit-border-radius: 0;
        -moz-appearance: none;
        appearance: none;
        border: none;
      }

      input:focus {
        outline: none;
      }

      textarea {
        outline: none;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0;
      }
    `}
  />
);

export default GlobalStyles;
