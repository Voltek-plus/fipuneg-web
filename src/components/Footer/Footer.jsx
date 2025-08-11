// src/components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import logo from "../../assets/img/fipuneglogoblanco.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.footerSection}>
          <div className={styles.footerLogo}>
             <img src={logo} alt="FIPUNEG Logo" className={styles.logo} />
            {/* <h3>FIPUNEG</h3> */}
          </div>
          <p className={styles.footerDescription}>
            Expertos en marketing digital y embudos de ventas para convertir prospectos en clientes.
          </p>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/share/1Aktm819Tf/?mibextid=wwXIfr" aria-label="Facebook"><FaFacebook /></a>
            <a href=" https://www.instagram.com/fipuneg_agency_/profilecard" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://whatsapp.com/channel/0029VabDSY7AInPriEQEVs2h" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>
        <div className={styles.footerSection}>
          <h4 className={styles.footerTitle}>Servicios</h4>
          <ul className={styles.footerLinks}>
            <li><a href="#">Marketing Digital</a></li>
            <li><a href="#">Embudos de Ventas</a></li>
            <li><a href="#">Diseño Web</a></li>
            <li><a href="#">SEO</a></li>
            <li><a href="#">Publicidad Digital</a></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4 className={styles.footerTitle}>Contacto</h4>
          <ul className={styles.contactInfo}>
            <li>
              <span>Email:</span>
              <a href="mailto:info@fipuneg.com">info@fipuneg.com</a>
            </li>
            <li>
              <span>Teléfono:</span>
              <a href="tel:+584123456789">+240 555 911 870</a>
            </li>
            <li>
              <span>Dirección:</span>
              <span>Malabo, Guinea Ecuatorial</span>
            </li>
          </ul>
        </div>
        
        <div className={styles.footerSection}>
          <h4 className={styles.footerTitle}>Newsletter</h4>
          <p>Suscríbete para recibir nuestras últimas noticias y ofertas.</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Tu correo electrónico" required />
            <button type="submit">Suscribirse</button>
          </form>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className="container">
          <p>&copy; {currentYear} FIPUNEG & Tecnologias Mas. Todos los derechos reservados.</p>
          <div className={styles.legalLinks}>
            <a href="#">Términos y Condiciones</a>
            <a href="#">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;