// src/components/Header/Header.jsx
import React, { useState, useEffect } from 'react'; // Añade useEffect
import styles from './Header.module.css';
import Button from '../Button/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Añade este efecto para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setIsScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      {/* El resto de tu código permanece exactamente igual */}
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <img src="/logo.png" alt="FIPUNEG Logo" className={styles.logo} />
          <h1 className={styles.title}>FIPUNEG</h1>
        </div>

        <button 
          className={styles.menuButton} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li><a href="#services" onClick={toggleMenu}>Servicios</a></li>
            <li><a href="#portfolio" onClick={toggleMenu}>Portafolio</a></li>
            <li><a href="#about" onClick={toggleMenu}>Nosotros</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contacto</a></li>
          </ul>
          <Button variant="primary" className={styles.navButton}>SOLICITAR PRESUPUESTO</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;