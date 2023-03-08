import React from 'react';
import './../../css/button.css';
import BtnMarketing from './btnMarketing';
import BtnMarketingWrapper from './btnMarketingWrapper';

export default function MarketingButtonList() {
  return (
    <>
      <BtnMarketingWrapper position='upper'>
        <BtnMarketing name='advertise' />
        <BtnMarketing name='seo' />
        <BtnMarketing name='social-media' />
        <BtnMarketing name='cis' />
        <BtnMarketing name='brand' />
      </BtnMarketingWrapper>
    </>
  );
}
