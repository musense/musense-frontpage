import React from 'react';
// import styles from './../css/ourService.module.css';
import './../css/ourService.css';

export default function OurService() {
  return (
    <div className={'our-service-wrapper'}>
      <div
        id='service'
        className={'our-service'}
      />
      <div className={'service-box'}>
        <div className={'advertising'} />
        <div className={'seo-service'} />
        <div className={'social-media'} />
        <div className={'cis'} />
      </div>

      <div className={'why-musense'} />
    </div>
  );
}
