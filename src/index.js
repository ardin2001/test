import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
// import Test from './Test'
import './styles/style.css'
const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    {/* <Test /> */}
  </BrowserRouter>
);
