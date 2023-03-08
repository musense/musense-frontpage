import React from 'react';
import { Link } from 'react-scroll';
export default function HeaderScrollLink({ offset, className, to }) {
  return (
    <Link
      spy={true}
      smooth={true}
      offset={offset}
      duration={500}
      className={className}
      to={to}
    ></Link>
  );
}
