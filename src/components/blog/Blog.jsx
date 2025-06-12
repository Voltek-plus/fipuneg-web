import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Blog.module.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Estrategias de Email Marketing para Recuperar Carritos Abandonados',
      image: 'https://via.placeholder.com/300x200?text=Email+Marketing',
    },
    {
      id: 2,
      title: 'Marketing de Contenidos para Empresas de Tecnología',
      image: 'https://via.placeholder.com/300x200?text=Tech+Content',
    },
    {
      id: 3,
      title: 'Cómo Diseñar una Estrategia de Contenido Efectiva',
      image: 'https://via.placeholder.com/300x200?text=Content+Strategy',
    },
    {
      id: 4,
      title: 'La Importancia de la Segmentación de Audiencia en Publicidad en Línea',
      image: 'https://via.placeholder.com/300x200?text=Audience+Segmentation',
    },
  ];

  return (
    <section className={styles.blogSection}>
      <h2 className={styles.blogTitle}>Últimas noticias del blog</h2>
      <div className={styles.blogGrid}>
        {blogPosts.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id} className={styles.blogCardLink}>
            <div className={styles.blogCard}>
              <img src={post.image} alt={post.title} className={styles.blogImage} />
              <p className={styles.blogText}>{post.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blog;