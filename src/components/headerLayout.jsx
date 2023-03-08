import React, { useEffect, useState } from 'react';
import './../css/headerLayout.css';
import Logo from './logo';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { Link, useLocation } from 'react-router-dom';
import HeaderHashLink from './HeaderHashLink';
import HeaderScrollLink from './HeaderScrollLink';

export default function HeaderLayout() {
  const [showHeader, setShowHeader] = useState(true);
  const { pathname } = useLocation();

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
        {pathname === '/' && (
          <ul>
            <li>
              <HeaderScrollLink
                offset={-0}
                className={`${'navBtn'} ${'about'}`}
                to='about-us'
              />
            </li>

            <li>
              <HeaderScrollLink
                offset={-30}
                className={`${'navBtn'} ${'service'}`}
                to='service'
              />
            </li>

            <li>
              <HeaderScrollLink
                offset={-100}
                className={`${'navBtn'} ${'contactUs'}`}
                to='contactUs'
              />
            </li>
            <li>
              <Link
                className={`${'navBtn'} ${'marketing'}`}
                to='marketing'
              />
            </li>
          </ul>
        )}
        {(pathname === '/marketing' || pathname.startsWith('/content')) && (
          <ul>
            <li>
              <HeaderHashLink
                className={`${'navBtn'} ${'about'}`}
                to='/#about-us'
                offset={0}
              />
            </li>

            <li>
              <HeaderHashLink
                className={`${'navBtn'} ${'service'}`}
                to='/#service'
                offset={-30}
              />
            </li>

            <li>
              <HeaderHashLink
                className={`${'navBtn'} ${'contactUs'}`}
                to='/#contactUs'
                offset={-100}
              />
            </li>
            <li>
              <Link
                className={`${'navBtn'} ${'marketing'}`}
                to='marketing'
              />
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
