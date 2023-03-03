import React from 'react';
import styles from './../css/about.module.css';

export default function About() {
  return (
    <div className={styles.bg}>
      <div className={styles.slogan} />
      <div id="about" className={styles['top-image']} />

      <div className={styles.welcome} />
      <div className={styles.free} />

      <div className={styles['orange-bubble']} />
      <div className={styles['orange-bubble_2']} />
      <div className={styles['blue-bubble']} />
      <div className={styles['blue-bubble_2']} />

      <div className={styles['musense-can-help']} />
      <div className={styles.reply} />

      <div className={styles['triangle-range-orange']} />
      <div className={styles['triangle-range-orange_2']} />
    </div>
  );
}
