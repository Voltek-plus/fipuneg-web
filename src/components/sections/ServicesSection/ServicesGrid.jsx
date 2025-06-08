import React from 'react';
import styles from './ServicesGrid.module.css';

const ServicesGrid = ({ services, onServiceClick }) => {
  return (
    <div className={styles.servicesGrid}>
      {services.map((service, index) => (
        <div
          key={index}
          className={styles.serviceCard}
          onClick={() => onServiceClick(service)}
        >
          <h3 className={styles.serviceTitle}>{service.title}</h3>
          <p className={styles.serviceDescription}>{service.description}</p>
          {service.features && (
            <ul className={styles.featuresList}>
              {service.features.map((feature, idx) => (
                <li key={idx} className={styles.featureItem}>{feature}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid;