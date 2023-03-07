import React, { useState } from 'react';
import './../css/header.css';
// import styles from './../css/header.module.css';
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
    <header className={`${showHeader ? 'show' : 'hide'}`}>
      <Logo color={'gray'} />
      <nav className={'navbar'}>
        <ul>
          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className={`${'navBtn'} ${'about'}`}
              to='about-us'
            ></Link>
          </li>

          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className={`${'navBtn'} ${'service'}`}
              to='service'
            ></Link>
          </li>

          <li>
            <Link
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className={`${'navBtn'} ${'contactUs'}`}
              to='contactUs'
            ></Link>
          </li>
          <li>
            <a
              data-tooltip='敬請期待'
              className={`${'navBtn'} ${'marketing'}`}
              // href='#'
              // target="_blank"
            ></a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
