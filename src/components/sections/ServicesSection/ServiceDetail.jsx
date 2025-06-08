import React from 'react';
import styles from './ServiceDetail.module.css';
import { useLocation } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const ServiceDetail = () => {
  const location = useLocation();
  const service = location.state?.service || {};

  return (
    <div className={styles.home}> {/* Usamos la misma clase 'home' para consistencia */}
      <Header />
      <main>
        <div className={styles.serviceDetail}>
          <div className={styles.container}>
            <h1 className={styles.title}>{service.title}</h1>
            <p className={styles.description}>{service.description}</p>
            {service.features && (
              <div className={styles.features}>
                <h3>Características:</h3>
                <ul>
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            <button
              className={styles.backButton}
              onClick={() => window.history.back()}
            >
              Volver
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;