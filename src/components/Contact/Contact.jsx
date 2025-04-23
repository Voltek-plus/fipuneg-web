// src/components/Contact/Contact.jsx
import React from 'react';
import styles from './Contact.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Contáctanos</h2>
          <p className={styles.subtitle}>Estamos listos para impulsar tu negocio</p>
        </div>

        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <FaMapMarkerAlt />
              </div>
              <div className={styles.infoContent}>
                <h4>Ubicación</h4>
                <p>Malabo, Guinea Ecuatorial</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <FaPhone />
              </div>
              <div className={styles.infoContent}>
                <h4>Teléfono</h4>
                <p>+240 222 123 456</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <FaEnvelope />
              </div>
              <div className={styles.infoContent}>
                <h4>Email</h4>
                <p>info@fipuneg.com</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <FaClock />
              </div>
              <div className={styles.infoContent}>
                <h4>Horario</h4>
                <p>Lunes a Viernes: 8:00 - 17:00</p>
                <p>Sábado: 9:00 - 13:00</p>
              </div>
            </div>
          </div>

          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Nombre completo" required />
            </div>
            <div className={styles.formGroup}>
              <input type="email" placeholder="Correo electrónico" required />
            </div>
            <div className={styles.formGroup}>
              <input type="tel" placeholder="Teléfono" />
            </div>
            <div className={styles.formGroup}>
              <select required>
                <option value="">Seleccione un servicio</option>
                <option value="marketing">Marketing Digital</option>
                <option value="seo">SEO</option>
                <option value="social">Redes Sociales</option>
                <option value="web">Diseño Web</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <textarea placeholder="Cuéntanos sobre tu proyecto" rows="5" required></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;