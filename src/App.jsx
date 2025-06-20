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
import BusinessForm from './components/BusinessForm/BusinessForm';
import Team from './components/AboutUs/Team';
import Blog from './components/blog/Blog';
import BlogDetail from './components/blog/BlogDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service-detail" element={<ServiceDetail />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Home />} /> 
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/business-form" element={<BusinessForm />} />
      </Routes>
    </Router>
  );
}

export default App;