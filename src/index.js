import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Title from './Title';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 className="title">Have I been Gerrymandered?</h1>
    <Title />
    <App />
  </React.StrictMode>
);


reportWebVitals();
