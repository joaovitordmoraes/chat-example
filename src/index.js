import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Reset from './styles/generic/reset';
import Settings from './styles/elements/settings';
import Base from './styles/elements/base';


ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <Settings />
    <Base />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
