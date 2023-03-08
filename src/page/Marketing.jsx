import React from 'react';
import Banner from './../components/Marketing/banner';
import MarketingButtonList from '../components/Marketing/marketingButtonList';
import CardBox from './../components/Marketing/cardBox';
import MiscButtonList from '../components/Marketing/miscButtonList';

export default function Marketing() {
  return (
    <>
      <Banner />
      <MarketingButtonList />
      <CardBox />
      <MiscButtonList />
    </>
  );
}
