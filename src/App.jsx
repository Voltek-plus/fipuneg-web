// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import ServiceDetail from './components/sections/ServicesSection/ServiceDetail';
import Portfolio from './components/Portfolio/Portfolio';
import MarketNiches from './components/MarketNiches/MarketNiches';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service-detail" element={<ServiceDetail />} />
        <Route path="/services" element={<Home />} /> {/* Redirige a Home por ahora */}
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;