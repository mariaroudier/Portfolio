import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home/Home';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {/* <Home /> */}
      <Route path="portfolio/" element={<Home />} />
      {/* <Route path="/employee-list" element={<ListOfEmployees />} /> */}
    </Routes>
  </ BrowserRouter>
);

reportWebVitals();
