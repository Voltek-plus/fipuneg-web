// src/components/Header/Header.jsx
import React, { useState, useEffect } from 'react'; 
import styles from './Header.module.css';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/img/logo fipuneg png transparente-02.png"
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

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
        <div className={styles.logoContainer} 
             onClick={() => {
              navigate('/');
              setIsMenuOpen(false); // Opcional: cerrar menú móvil
            }}
          >
          <img src={logo} alt="FIPUNEG Logo" className={styles.logo} />
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
            <li><a href="/services" onClick={toggleMenu}>Servicios</a></li>
            <li><a href="/all-portfolio" onClick={toggleMenu}>Portafolio</a></li>
            <li><a href="/team" onClick={toggleMenu}>Nosotros</a></li>
            <li><a href="/all-blog" onClick={toggleMenu}>Blog</a></li>
            <li><a href="/contact" onClick={toggleMenu}>Contacto</a></li>
          </ul>
          <Button
            variant="primary"
            onClick={() => {
              navigate('/presupuesto');
              setIsMenuOpen(false); // Opcional: cerrar menú móvil
            }}
            className={styles.navButton}
          >
            SOLICITAR PRESUPUESTO
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;