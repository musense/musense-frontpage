import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './../css/footerLayout.css';
import Logo from './logo';
// import styles from './../css/footer.module.css';

export default function FooterLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    
    console.log ("🚀 ~ file: footerLayout.jsx:13 ~ FooterLayout ~ pathname:", pathname)
    if (pathname === '/') {
      
    }
  }, [pathname]);

  return (
    <div className={`footer-wrapper ${pathname.replace("/","").toLowerCase()}`}>
      <div className='footer-box'>
        <div className='left-side'>
          <Logo color={'white'} />
          <span>聯絡電話：(04)2201-0520</span>
          <span>營業時間：周一至周五 9:00~18:00</span>
          <span>服務地址：403台中市西區台灣大道二段二號四樓之一</span>
          <span>E-mail：service@musense.tw</span>
        </div>
        <div className='right-side'>
          <div className='contact-us-btn' />
          <div className='social-btn-box'>
            <div className='fb-icon' />
            <div className='ms-icon' />
            <div className='mail-icon' />
          </div>
          <div className='copyright'>
            Copyright © Musense Marketing Ltd. All Rights Reserved.Design by
            陌聲行銷
          </div>
        </div>
      </div>
    </div>
  );
}
