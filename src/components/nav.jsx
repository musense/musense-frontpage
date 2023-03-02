import React from 'react';
import styles from './../css/nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <a
        className={styles.about}
        href='#about'
      >
        About
      </a>
      <a
        className={styles.service}
        href='#service'
      >
        Service
      </a>
      <a
        className={styles.contactUs}
        href='#contactUs'
      >
        Contact Us
      </a>
      <a
        className={styles.marketing}
        href='#marketing'
      >
        Marketing
      </a>
    </nav>
  );
}
