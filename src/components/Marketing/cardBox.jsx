import React from 'react';
import './../../css/cardBox.css';
import Card from './card';

import HotContent from './hotContent';

export default function CardBox() {
  return (
    <>
      <div className='card-wrapper upper'>
        <Card tag={'服裝/配件'}/>
        <Card tag={'服裝/配件'} />
        <Card tag={'服裝/配件'} />
        <Card tag={'服裝/配件'} />
        <Card tag={'服裝/配件'} />
        <Card tag={'服裝/配件'} />
      </div>
      <HotContent />
      <div className='card-wrapper lower'>
        <Card tag={'建築/空間'} />
        <Card tag={'建築/空間'} />
        <Card tag={'建築/空間'} />
        <Card tag={'建築/空間'} />
        <Card tag={'建築/空間'} />
        <Card tag={'建築/空間'} />
      </div>
    </>
  );
}
