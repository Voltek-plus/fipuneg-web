// src/components/AboutUs/AboutUs.jsx
import React from 'react';
import styles from './AboutUs.module.css';
import Button from '../Button/Button';

const AboutUs = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Sobre <span>FIPUNEG</span></h2>
          <p className={styles.subtitle}>Agencia de Marketing Digital líder en Guinea Ecuatorial</p>
          
          <div className={styles.textContent}>
            <p>
              En <strong>FIPUNEG</strong>, nos especializamos en diseñar estrategias de marketing digital 
              y embudos de ventas efectivos para negocios en Guinea Ecuatorial. Nuestro equipo 
              de expertos combina conocimiento local con las últimas tendencias globales en 
              marketing digital.
            </p>
            
            <div className={styles.features}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>✓</div>
                <div>
                  <h4>Experiencia Local</h4>
                  <p>Conocemos el mercado ecuatoguineano y sus particularidades</p>
                </div>
              </div>
              
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>✓</div>
                <div>
                  <h4>Tecnología Global</h4>
                  <p>Utilizamos las herramientas más avanzadas del mercado</p>
                </div>
              </div>
              
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>✓</div>
                <div>
                  <h4>Resultados Medibles</h4>
                  <p>Nuestras estrategias se basan en datos y métricas concretas</p>
                </div>
              </div>
            </div>
            
            <Button variant="primary">Conoce nuestro equipo</Button>
          </div>
        </div>
        
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            {/* Imagen sería reemplazada por tu imagen real */}
            <div className={styles.placeholderImage}>Equipo FIPUNEG</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;