import React from 'react';
import styles from './../css/ourService.module.css';

export default function OurService() {
  return (
    <div className={styles['our-service-wrapper']}>
      <div
        id='service'
        className={styles['our-service']}
      />
      <div className={styles['service-box']}>
        <div className={`${styles['ad-image']} ${styles.advertising}`} />
        <div className={`${styles['ad-image']} ${styles['seo-service']}`} />
        <div className={`${styles['ad-image']} ${styles['social-media']}`} />
        <div className={`${styles['ad-image']} ${styles.cis}`} />
      </div>

      <div className={styles['why-musense']} />
    </div>
  );
}
