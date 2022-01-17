import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Expenses from './routes/Expenses.js';
import Invoices from './routes/Invoices.js';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes >
      <Route path="/" element={ <App /> } />
      <Route path="Expenses" element={ <Expenses /> } />
      <Route path="Invoices" element={ <Invoices /> } />
    </Routes>
  </BrowserRouter>, 
  rootElement
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
