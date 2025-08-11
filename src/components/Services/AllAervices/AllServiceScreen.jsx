// src/screens/AllServiceScreen.jsx
import React, { useState, useEffect } from 'react';
import './AllServiceScreen.css';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const AllServiceScreen = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulación de una petición GET a una API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        // Aquí puedes cambiar la URL por tu API real
        // const response = await fetch('https://tu-api.com/servicios');
        // const data = await response.json();

        // Simulamos datos por ahora
        const mockData = [
          {
            id: 1,
            title: 'Desarrollo Web',
            description: 'Creamos sitios web modernos, responsivos y optimizados para SEO.',
            icon: '🌐',
          },
          {
            id: 2,
            title: 'Aplicaciones Móviles',
            description: 'Desarrollamos apps nativas y multiplataforma para Android e iOS.',
            icon: '📱',
          },
          {
            id: 3,
            title: 'Branding y Diseño',
            description: 'Diseñamos identidades visuales únicas que reflejan tu esencia.',
            icon: '🎨',
          },
          {
            id: 4,
            title: 'Consultoría Digital',
            description: 'Te ayudamos a potenciar tu negocio con estrategias digitales efectivas.',
            icon: '📊',
          },
          {
            id: 5,
            title: 'Marketing Digital',
            description: 'Impulsa tu marca con campañas en redes sociales y Google Ads.',
            icon: '🚀',
          },
          {
            id: 6,
            title: 'Soporte Técnico',
            description: 'Soporte continuo y mantenimiento para tus plataformas digitales.',
            icon: '🛠️',
          },
        ];

        // Simulamos un delay para ver el loader
        setTimeout(() => {
          setServices(mockData);
          setLoading(false);
        }, 800);
      } catch (err) {
        setError('No se pudieron cargar los servicios. Intenta más tarde.');
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div>
      <Header />

      <main className="all-services-screen">
        <div className="services-container">
          <div className="services-header">
            <h1>Nuestros Servicios</h1>
            <p>Descubre cómo podemos ayudarte a alcanzar tus objetivos digitales.</p>
          </div>

          {loading ? (
            <div className="loader">Cargando servicios...</div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : (
            <div className="services-grid">
              {services.map((service) => (
                <div className="service-card" key={service.id}>
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AllServiceScreen;