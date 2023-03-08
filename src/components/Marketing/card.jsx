import React from 'react';
import './../../css/card.css';

export default function Card({ tag, content, createDate }) {
  tag ||= '';
  content ||= `寶島眼鏡 x SOU·SOU
    最新聯名登場，來自京都的美麗紋樣躍上日常！從細節感受初春的浪漫氣息!`;
  createDate ||= `2023.01.01`;
  return (
    <>
      <div className='card'>
        <div className='card-img'></div>
        {/* <img className='card-img' src={} altText={} /> */}
        <div className='card-content'>{content}</div>
        <div className='card-footer'>
          <div className='card-tag'>{tag}</div>
          <div className='card-create-date'>{createDate}</div>
        </div>
      </div>
    </>
  );
}
