// src/components/MarketNiches/MarketNiches.jsx
import React from 'react';
import styles from './MarketNiches.module.css';
import Button from '../Button/Button';
import { FaChartLine, FaUmbrellaBeach, FaTshirt, FaBalanceScale, FaPhoneAlt } from 'react-icons/fa';

const MarketNiches = () => {
  const niches = [
    { name: "Turismo", icon: <FaUmbrellaBeach /> },
    { name: "Moda & Estilo", icon: <FaTshirt /> },
    { name: "Abogados", icon: <FaBalanceScale /> },
    { name: "Telecomunicaciones", icon: <FaPhoneAlt /> }
  ];

  return (
    <section className={styles.niches}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.mainTitle}>expresión</h1>
          <p className={styles.tagline}>perfecto es la clave.</p>
          <h2 className={styles.subTitle}>generamos ventas.</h2>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.content}>
          <div className={styles.sectionHeader}>
            <FaChartLine className={styles.sectionIcon} />
            <h3 className={styles.sectionTitle}>Trading Forex</h3>
          </div>
          
          <div className={styles.nichesContainer}>
            {niches.map((niche, index) => (
              <div key={index} className={styles.nicheItem}>
                <span className={styles.nicheIcon}>{niche.icon}</span>
                <span className={styles.nicheName}>{niche.name}</span>
              </div>
            ))}
          </div>

          <div className={styles.noteContainer}>
            <p className={styles.note}>
              Si bien estos nichos son los que más hemos trabajado<br />
              Podemos crear una Estrategia de Marketing para otros nichos
            </p>
          </div>

          <Button variant="primary" className={styles.ctaButton}>
            Cuéntanos sobre tu negocio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketNiches;