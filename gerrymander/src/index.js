import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StatesList from './StatesList';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <h1 class="title">Have I been Gerrymandered?</h1>
    <div class={"selector-class"}>
    <b class={"selector-child"}> Choose Your State! </b>
        <StatesList />
        <a href="https://www.house.gov/representatives/find-your-representative">
            <button> Find my District</button>
        </a>
    </div>
    <App />
  </React.StrictMode>
);

reportWebVitals();