// src/components/Portfolio/Portfolio.jsx
import React from 'react';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const steps = [
    {
      number: 1,
      title: "Establecer comunicación fluida con el cliente",
      description: "Una de las mejores formas de llevar a cabo una excelente campaña de marketing es teniendo un canal de comunicación efectiva entre el cliente dueño de empresa y el jefe de proyecto de la agencia de marketing digital."
    },
    {
      number: 2,
      title: "Estudio y análisis de la empresa, Auditoría de marca",
      description: "Una vez se inicien las gestiones de marketing, la primera tarea es realizar una auditoría de marketing digital profunda para detallar los problemas en cuanto a estrategias de comunicación de campañas, alcance de público, canales de comunicación que el negocio pueda usar."
    },
    {
      number: 3,
      title: "Diseño de plan de marketing",
      description: "Luego de conocer a fondo los problemas que afectan el marketing digital de la empresa, se diseña un cronograma de actividades o plan de acción completo en base a un tiempo establecido."
    },
    {
      number: 4,
      title: "Diseño y desarrollo de la campaña",
      description: "Presentación de la campaña a los clientes y puesta en marcha de las gestiones de marketing digital una vez aprobadas."
    },
    {
      number: 5,
      title: "Monitoreo y optimización",
      description: "Estudios con métricas obtenidas por herramientas como Semrush o Ahref, con seguimiento constante a los resultados generados."
    },
    {
      number: 6,
      title: "Informe métrico de marketing",
      description: "Informe detallado con gráficas, alcances y leads obtenidos, permitiendo filtrar datos de valor para mejorar estrategias."
    }
  ];

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.mainTitle}>Pasos para llevar a cabo una campaña de marketing digital efectiva</h1>
          <h2 className={styles.subTitle}>Aplicamos Estrategias de <strong>Marketing Digital en Venezuela</strong></h2>
        </div>
        
        <div className={styles.gridContainer}>
          {steps.map((step) => (
            <div key={step.number} className={styles.stepCard}>
              <div className={styles.stepHeader}>
                <span className={styles.stepNumber}>{step.number}</span>
                <h3 className={styles.stepTitle}>Paso {step.number} – {step.title}</h3>
              </div>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;