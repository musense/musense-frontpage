import React, { useState } from 'react';
import styles from './../css/header.module.css';
import Logo from './logo';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { Link } from 'react-scroll';

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y >= prevPos.y) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  });

  return (
    <header className={`${showHeader ? styles.show : styles.hide}`}>
      <Logo />
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className={`${styles.navBtn} ${styles.about}`}
              to='about'
            ></Link>
          </li>

          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className={`${styles.navBtn} ${styles.service}`}
              to='service'
            ></Link>
          </li>

          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className={`${styles.navBtn} ${styles.contactUs}`}
              to='contactUs'
            ></Link>
          </li>
          <li>
            <a
              data-tooltip='敬請期待'
              className={`${styles.navBtn} ${styles.marketing}`}
              // href='#'
              // target="_blank"
            ></a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
