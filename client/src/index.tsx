import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import constants from './constants';
import reportWebVitals from './reportWebVitals';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body,
  html,
  #root {
    min-height: 100vh;
    min-width: 100vw;
    margin: 0;
    padding: 0;
    position: relative;
    background-color: ${constants.darkBackgroundColor};
    color: ${constants.foregroundColor};
    font-family: ${constants.normalFont};
  }
`;

if (process.env.NODE_ENV === 'development') {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
