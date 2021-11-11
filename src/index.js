import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App defaultKeyword="Hello"/>
  </React.StrictMode>,
  document.getElementById('root')
);
