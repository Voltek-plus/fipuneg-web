// src/pages/Home/Home.jsx
import React from 'react';
import styles from './Home.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import ServicesSection from '../../components/sections/ServicesSection/ServicesSection';
import Portfolio from '../../components/Portfolio/Portfolio';
import AboutUs from '../../components/AboutUs/AboutUs';
import MarketNiches from '../../components/MarketNiches/MarketNiches';
import Contact from '../../components/Contact/Contact';
import logo from "../../assets/img/fipuneglogoblanco.png";
import branding from "../../assets/img/branding_fipuneg.jpg"; // Imagen de branding
import Blog from '../../components/blog/Blog';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <Header />

      <main>
        {/* Sección Hero */}
        <section className={styles.hero}>
          <div className={`container ${styles.heroContainer}`}>
            <div className={styles.heroContent}>
              <h1>Agencia de Marketing Digital en Guinea Ecuatorial</h1>
              <p>
                Expertos en diseñar estrategias{' '}
                <strong>de marketing digital y embudos de ventas</strong> para canalizar prospectos de clientes y convertirlos en{' '}
                <strong>más ventas para tu negocio.</strong>
              </p>
              <div className={styles.heroButtons}>
                <Button variant="primary" onClick={() => navigate('/presupuesto')}>
                  SOLICITAR PRESUPUESTO
                </Button>
                <Button variant="secondary" onClick={() => navigate('/servicios')}>
                  Ver Servicios
                </Button>
              </div>
            </div>

            {/* Logo animado a la derecha */}
            <div className={styles.heroImage}>
              <img src={logo} alt="FIPUNEG Logo" />
            </div>
          </div>
        </section>

        {/* Resto de secciones */}
        <ServicesSection />
        <Portfolio />
        <MarketNiches />
        <AboutUs />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Home;