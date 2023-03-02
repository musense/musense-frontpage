import React from "react";
import styles from './../css/contactUs.module.css';

export default function ContactUs() {
  return (
    <div className={styles['contact-us']}>
    <div>
      <div className={styles['image-down']} />
      <div className={styles['orange-box']} />
    </div>
    <div>
      <div className={styles['enter-box']} />
      <div className={styles['enter-box']} />
      <div className={styles['enter-box']} />
      <div className={styles['enter-box']} />
      <div className={styles['enter-box-large']} />
      <div className={styles.cis} />
      <button
        className={styles['send-button']}
        type='button'
      />
    </div>
  </div>
  );
}
