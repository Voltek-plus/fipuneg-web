import React from 'react';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ title, description, features }) => {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.serviceHeader}>
        <h3 className={styles.serviceTitle}>{title}</h3>
      </div>
      <p className={styles.serviceDescription}>{description}</p>
      {features && (
        <ul className={styles.serviceFeatures}>
          {features.map((feature, index) => (
            <li key={index} className={styles.featureItem}>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;