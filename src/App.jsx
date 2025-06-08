// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import ServiceDetail from "./components/sections/ServicesSection/ServiceDetail"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service-detail" element={<ServiceDetail />} />
      </Routes>
    </Router>
  );
}

export default App;