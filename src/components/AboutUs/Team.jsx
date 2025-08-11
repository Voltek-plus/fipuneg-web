import React from 'react';
import styles from './Team.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const Team = () => {
  return (
    <div className={styles.home}>
      <Header />
      <main>
        <section className={styles.teamSection}>
          <h2 className={styles.teamTitle}>¿Quiénes somos?</h2>
          <p className={styles.teamSubtitle}>Descubre Nuestra Esencia: Quiénes Somos en Marketing Digital Directo</p>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>Pilar Ramajo</div>
              <h3>Pascual Milam Tome</h3>
              <p>CEO</p>
              <p>Fundadora y jefa ejecutiva de Marketing Digital Directo.</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>A. Moreno</div>
              <h3>E.V MAS ONEWE</h3>
              <p>Web designer/SEO</p>
              <p>Diseñador web y SEO de Marketing Digital Directo</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>Juan A. Morales</div>
              <h3>Francisco Brayan Tome</h3>
              <p>Sales Manager</p>
              <p>Jefe de ventas de Marketing Digital Directo</p>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}>Tania López</div>
              <h3>Luis Barcena Cervera</h3>
              <p>Community Manager / copy writer</p>
              <p>Community Manager / copy writer</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;