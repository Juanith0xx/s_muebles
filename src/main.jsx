import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // si tienes un CSS global

document.documentElement.classList.remove('dark');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);