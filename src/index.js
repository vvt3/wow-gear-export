// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Update the import
import './index.css';
import App from './App';

// Get the root element where the React app will mount
const rootElement = document.getElementById('root');

// Create the root and render the App component
const root = ReactDOM.createRoot(rootElement); // Create root using createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
