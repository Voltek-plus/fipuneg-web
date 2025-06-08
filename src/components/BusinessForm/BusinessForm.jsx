import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BusinessForm.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const BusinessForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: '',
    businessDescription: '',
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    // Aquí puedes agregar lógica para enviar los datos a un servidor (por ejemplo, con fetch o axios)
    alert('¡Gracias por tu envío! Nos pondremos en contacto pronto.');
    navigate('/'); // Regresa a la página principal después de enviar
  };

  return (
    <div className={styles.home}>
      <Header />
      <main>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Cuéntanos sobre tu negocio</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="businessName">Nombre del Negocio:</label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="businessDescription">Descripción del Negocio:</label>
              <textarea
                id="businessDescription"
                name="businessDescription"
                value={formData.businessDescription}
                onChange={handleChange}
                required
                className={styles.textarea}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="name">Tu Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Teléfono:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Enviar
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessForm;