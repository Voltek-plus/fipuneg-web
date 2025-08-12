// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import ServiceDetail from './components/sections/ServicesSection/ServiceDetail';
import Portfolio from './components/Portfolio/Portfolio';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import BusinessForm from './components/BusinessForm/BusinessForm';
import Team from './components/AboutUs/Team';
import Blog from './components/blog/Blog';
import BlogDetail from './components/blog/BlogDetail';
import AdminDashboard from './components/admin/AdminDashboard';
import PresupuestoScreen from './components/Services/presupuesto/PresupuestoScreen';
import AllServiceScreen from './components/Services/AllAervices/AllServiceScreen';
import AllBlog from './components/blog/AllBlog';
import AllPorfolioScreen from './components/Portfolio/AllPorfolioScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service-detail" element={<ServiceDetail />} />
        <Route path="/servicios" element={<AllServiceScreen />} />
        <Route path="/team" element={<Team />} />
        <Route path="/presupuesto" element={<PresupuestoScreen />} />
        <Route path="/services" element={<AllServiceScreen />} /> 
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/all-portfolio" element={<AllPorfolioScreen />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admindash" element={<AdminDashboard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/all-blog" element={<AllBlog/>} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/business-form" element={<BusinessForm />} />
      </Routes>
    </Router>
  );
}

export default App;