import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './BlogDetail.module.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaPinterest, FaInstagram, FaVk, FaYoutube } from 'react-icons/fa';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: 'Estrategias de Email Marketing para Recuperar Carritos Abandonados',
      image: 'https://via.placeholder.com/600x300?text=Email+Marketing',
      content: [
        '1. Recordatorio Amigable: Enviar un correo electrónico amable recordando al cliente sobre los productos que dejó en el carrito. Incluye un enlace directo al carrito y un botón de acción claro.',
        '2. Oferta de Envío Gratuito: Ofrecer envío gratuito si completan la compra dentro de un plazo específico, incentivando la acción inmediata.',
        '3. Descuento Exclusivo: Proporcionar un código de descuento exclusivo para los carritos abandonados, aumentando la urgencia.',
        '4. Testimonios de Clientes Satisfechos: Incluir testimonios o reseñas de otros clientes para generar confianza.',
        '5. Recordatorio de Escasez de Stock: Alertar al cliente sobre la posible escasez de los productos en el carrito, creando urgencia.'
      ],
      testimonials: '“Gracias a estas estrategias, logramos recuperar un 20% más de ventas de carritos abandonados.” - Cliente Satisfecho',
      discount: 'Descuento exclusivo del 10% con el código RECUPERA10. ¡Oferta válida hasta el 19 de junio de 2025!',
      related: [
        { id: 2, title: 'Marketing de Contenidos para Empresas de Tecnología', image: 'https://via.placeholder.com/300x200?text=Tech+Content' },
        { id: 3, title: 'Cómo Diseñar una Estrategia de Contenido Efectiva', image: 'https://via.placeholder.com/300x200?text=Content+Strategy' },
        { id: 4, title: 'La Importancia de la Segmentación de Audiencia', image: 'https://via.placeholder.com/30x200?text=Audience+Segmentation' },
        { id: 5, title: 'Estrategias de Publicidad en Pinterest', image: 'https://via.placeholder.com/300x200?text=Pinterest+Ads' }
      ]
    },
    {
      id: 2,
      title: 'Marketing de Contenidos para Empresas de Tecnología',
      image: 'https://via.placeholder.com/600x300?text=Tech+Content',
      content: ['Contenido para id 2...'],
      testimonials: '“Excelente estrategia para nuestra empresa tech.” - Cliente Tech',
      discount: 'Descuento del 15% con TECH15. ¡Válido hasta el 20 de junio de 2025!',
      related: [
        { id: 1, title: 'Estrategias de Email Marketing', image: 'https://via.placeholder.com/300x200?text=Email+Marketing' },
        { id: 3, title: 'Cómo Diseñar una Estrategia de Contenido', image: 'https://via.placeholder.com/300x200?text=Content+Strategy' }
      ]
    },
    {
      id: 3,
      title: 'Cómo Diseñar una Estrategia de Contenido Efectiva',
      image: 'https://via.placeholder.com/600x300?text=Content+Strategy',
      content: ['Contenido para id 3...'],
      testimonials: '“Mejoró nuestro engagement significativamente.” - Cliente Content',
      discount: 'Descuento del 10% con CONTENT10. ¡Válido hasta el 18 de junio de 2025!',
      related: [
        { id: 1, title: 'Estrategias de Email Marketing', image: 'https://via.placeholder.com/300x200?text=Email+Marketing' },
        { id: 2, title: 'Marketing de Contenidos', image: 'https://via.placeholder.com/300x200?text=Tech+Content' }
      ]
    },
    {
      id: 4,
      title: 'La Importancia de la Segmentación de Audiencia en Publicidad en Línea',
      image: 'https://via.placeholder.com/600x300?text=Audience+Segmentation',
      content: ['Contenido para id 4...'],
      testimonials: '“Aumentó nuestro ROI en un 25%.” - Cliente Segmentación',
      discount: 'Descuento del 12% con SEG12. ¡Válido hasta el 21 de junio de 2025!',
      related: [
        { id: 1, title: 'Estrategias de Email Marketing', image: 'https://via.placeholder.com/300x200?text=Email+Marketing' },
        { id: 2, title: 'Marketing de Contenidos', image: 'https://via.placeholder.com/300x200?text=Tech+Content' }
      ]
    }
  ];

  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className={styles.home}>
      <Header />
      <main>
        <div className={styles.blogDetail}>
          <img src={post.image} alt={post.title} className={styles.detailHeaderImage} />
          <h1 className={styles.detailTitle}>{post.title}</h1>
          {post.content.map((item, index) => (
            <p key={index} className={styles.detailContent}>{item}</p>
          ))}
          <p className={styles.testimonial}>{post.testimonials}</p>
          <p className={styles.discount}>{post.discount}</p>
          <div className={styles.relatedPosts}>
            <h2 className={styles.relatedTitle}>Publicaciones Relacionadas</h2>
            <div className={styles.relatedGrid}>
              {post.related.map((relatedPost) => (
                <div key={relatedPost.id} className={styles.relatedCard}>
                  <img src={relatedPost.image} alt={relatedPost.title} className={styles.relatedImage} />
                  <p className={styles.relatedText}>{relatedPost.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className={styles.socialIcon} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className={styles.socialIcon} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className={styles.socialIcon} /></a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><FaWhatsapp className={styles.socialIcon} /></a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><FaPinterest className={styles.socialIcon} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className={styles.socialIcon} /></a>
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer"><FaVk className={styles.socialIcon} /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube className={styles.socialIcon} /></a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;