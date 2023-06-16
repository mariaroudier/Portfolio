import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './style.css';
import Home from './Pages/Home/Home';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Navigate to="/" replace />} />
      {/* <Route path="/portfolio" element={<Home />} /> */}
    </Routes>
  </ BrowserRouter>
);

reportWebVitals();
