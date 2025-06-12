import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AboutUs.module.css';
import Button from '../Button/Button';

const AboutUs = () => {
  const navigate = useNavigate();
  const teamMembers = [
    { name: 'Pilar Ramajo', role: 'CEO', desc: 'Fundadora y jefa ejecutiva de Marketing Digital Directo.', image: 'Pilar Ramajo' },
    { name: 'A. Moreno', role: 'Web designer/SEO', desc: 'Diseñador web y SEO de Marketing Digital Directo', image: 'A. Moreno' },
    { name: 'Juan A. Morales', role: 'Sales Manager', desc: 'Jefe de ventas de Marketing Digital Directo', image: 'Juan A. Morales' },
    { name: 'Tania López', role: 'Community Manager / copy writer', desc: 'Community Manager / copy writer', image: 'Tania López' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, [teamMembers.length]);

  const handleTeamClick = () => {
    navigate('/team');
  };

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
            
            <Button variant="primary" onClick={handleTeamClick}>Conoce nuestro equipo</Button>
          </div>
        
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <div className={styles.carousel}>
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`${styles.carouselItem} ${index === currentIndex ? styles.active : ''}`}
                >
                  <div className={styles.placeholderImage}>{member.image}</div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                  <p>{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutUs;