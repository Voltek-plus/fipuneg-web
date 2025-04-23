import React from 'react';
import styles from './ServicesGrid.module.css';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServicesGrid = ({ services }) => {
  return (
    <div className={styles.servicesGrid}>
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          features={service.features}
        />
      ))}
    </div>
  );
};

export default ServicesGrid;