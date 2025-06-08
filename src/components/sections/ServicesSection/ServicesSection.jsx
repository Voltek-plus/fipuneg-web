import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ServicesSection.module.css';
import ServicesGrid from './ServicesGrid';

const ServicesSection = () => {
  const services = [
    {
      title: 'Diseño de identidad Corporativa',
      description:
        'Creando la identidad gráfica de tu empresa, diseñamos logos profesionales y personalizados, siempre considerando tu mercado.',
    },
    {
      title: 'Gestión de Redes Sociales',
      description:
        'Administramos tus redes sociales, creando y publicando contenido valioso en forma de vídeos y posts. Aumentamos ventas mediante campañas.',
    },
    {
      title: 'Posicionamiento SEO',
      description:
        'Servicios SEO para optimizar sitios web para mejorar su posicionamiento orgánico en buscadores como Google.',
      features: [
        'Análisis de palabras clave',
        'Optimización on-page',
        'Link building',
        'Informes de rendimiento',
      ],
    },
    {
      title: 'Diseño de páginas web',
      description:
        'Ofrecemos paquetes de diseño para landing pages, blogs, páginas web informativas y tiendas online.',
    },
    {
      title: 'Email Marketing',
      description:
        'Utilizamos estrategias de email marketing para impulsar ventas a nivel global. Diseñamos emails que ayudan a crecer tu negocio.',
    },
    {
      title: 'Inbound Marketing',
      description:
        'Creamos estrategias y contenidos de valor para atraer a tu cliente ideal, generando empatía y aumentando las ventas.',
    },
    {
      title: 'Campañas SEM',
      description:
        'Creamos y segmentamos campañas SEM optimizadas para vender tus productos y servicios mediante herramientas pagas.',
    },
    {
      title: 'Diseño de tiendas online',
      description:
        'Creamos tiendas online con facturación automática, gestión de inventario y pasarelas de pago seguras.',
      features: [
        'Facturación automática',
        'Sistema de delivery',
        'Pasarelas de pago',
        'Ventas 24/7',
      ],
    },
    {
      title: 'Marketing de contenido',
      description:
        'Generamos contenido de valor para tu blog, e-commerce y redes sociales, resolviendo problemas y aportando a tu comunidad.',
    },
  ];

const navigate = useNavigate();

  const handleServiceClick = (service) => {
    console.log('Navegando a detalle con:', service);
    navigate('/service-detail', { state: { service } });
  };

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Servicios de marketing digital</h2>
        <p className={styles.sectionSubtitle}>
          Soluciones completas para impulsar tu negocio en línea
        </p>
        <ServicesGrid services={services} onServiceClick={handleServiceClick} />
      </div>
    </section>
  );
};

export default ServicesSection;