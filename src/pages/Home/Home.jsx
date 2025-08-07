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
import logo from "../../assets/img/fipuneglogoblanco.png"
import Blog from '../../components/blog/Blog';

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      
      <main>
        <section className={styles.hero}>
          <div className={`container ${styles.heroContainer}`}>
            <div className={styles.heroContent}>
              <h1>Agencia de Marketing Digital en Guinea Ecuatorial</h1>
              <p>Expertos en diseñar estrategias <strong>de marketing digital y embudos de ventas</strong> para canalizar prospectos de clientes y convertirlos en <strong>más ventas para tu negocio.</strong></p>
              <div className={styles.heroButtons}>
                <Button variant="primary">SOLICITAR PRESUPUESTO</Button>
                <Button variant="secondary">Ver Servicios</Button>
              </div>
            </div>
            <div className={styles.heroImage}>
              <img src={logo} alt="FIPUNEG Logo" className={styles.logo} />
            </div>
          </div>
        </section>
        <ServicesSection />
        <Portfolio />
        <MarketNiches/>
        <AboutUs/>
        <Blog />
        <Contact/>
        {/* Otras secciones irán aquí */}
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;