import React from 'react';
import styles from './../css/nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <a
            className={`${styles.navBtn} ${styles.about}`}
            href='#about'
          >
          </a>
        </li>

        <li>
          <a
            className={`${styles.navBtn} ${styles.service}`}
            href='#service'
          >
          </a>
        </li>

        <li>
          <a
            className={`${styles.navBtn} ${styles.contactUs}`}
            href='#contactUs'
          >
          </a>
        </li>
        <li>
          <a
            className={`${styles.navBtn} ${styles.marketing}`}
            href='#marketing'
          >
          </a>
        </li>
      </ul>
    </nav>
  );
}
