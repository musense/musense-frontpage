import React, { useState } from 'react';
import './../css/headerLayout.css';
// import styles from './../css/header.module.css';
import Logo from './logo';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

export default function HeaderLayout() {
  const [showHeader, setShowHeader] = useState(true);
  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y >= prevPos.y) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  });

  return (
    <header className={`${showHeader ? 'show' : 'hide'}`}>
      <Logo color={'gray'} />
      <nav className={'navbar'}>
        <ul>
          <li>
            <ScrollLink
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className={`${'navBtn'} ${'about'}`}
              to='about-us'
            ></ScrollLink>
          </li>

          <li>
            <ScrollLink
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className={`${'navBtn'} ${'service'}`}
              to='service'
            ></ScrollLink>
          </li>

          <li>
            <ScrollLink
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className={`${'navBtn'} ${'contactUs'}`}
              to='contactUs'
            ></ScrollLink>
          </li>
          <li>
            <Link
              // data-tooltip='敬請期待'
              className={`${'navBtn'} ${'marketing'}`}
              to='Marketing'
            ></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
