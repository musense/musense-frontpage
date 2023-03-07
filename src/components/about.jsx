import React, { useEffect, useState } from 'react';
// import styles from './../css/about.module.css';
import './../css/about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 50, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms);
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <div className='about-us'>
      <div className='bg' />
      <div className='about-box'>
        <div className='slogan' />
        <div
          id='about-us'
          className='top-image'
        />
      </div>

      <div className='welcome' />
      {/* <div className='free' /> */}

      <div className='bubble-box'>
        <div>
          <div
            className='orange-bubble-left'
            data-aos='orange-slide-left'
            data-aos-delay='0'
          />
          <div
            className='orange-bubble-right'
            data-aos='orange-slide-right'
            data-aos-delay='400'
          />
        </div>
        <div>
          <div
            className='blue-bubble-left'
            data-aos='blue-slide-left'
            data-aos-delay='600'
          />
          <div
            className='blue-bubble-right'
            data-aos='blue-slide-right'
            data-aos-delay='1000'
          />
        </div>
      </div>

      <div className='musense-can-help' />
      <div className='reply' />
      <div className='triangle-box'>
        <div className='triangle-range-orange-right' />
        <div className='triangle-range-orange-left' />
      </div>
    </div>
  );
}
