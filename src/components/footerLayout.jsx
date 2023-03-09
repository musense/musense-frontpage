import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './../css/footerLayout.css';
import Logo from './logo';
// import styles from './../css/footer.module.css';

export default function FooterLayout() {
  const { pathname } = useLocation();
  console.log("🚀 ~ file: footerLayout.jsx:9 ~ FooterLayout ~ useLocation:", useLocation())

  useEffect(() => {

    console.log("🚀 ~ file: footerLayout.jsx:13 ~ FooterLayout ~ pathname:", pathname)
    if (pathname === '/') {
    }
    const a = pathname.replaceAll("/", "").replace(/[1-9]/g, "").toLowerCase()
    console.log("🚀 ~ file: footerLayout.jsx:16 ~ useEffect ~ a:", a)
  }, [pathname]);

  return (
    <div className={`footer-wrapper ${pathname.replaceAll("/", "").replace(/[1-9]/g, "").toLowerCase()}`}>
      <div className='footer-box'>
        <div className='left-side'>
          <Logo color={'white'} />
          <span>聯絡電話：(04)2201-0520</span>
          <span>營業時間：周一至周五 9:00~18:00</span>
          <span>服務地址：403台中市西區台灣大道二段二號四樓之一</span>
          <span>E-mail：service@musense.tw</span>
        </div>
        <div className='right-side'>
          <div className='button-box'>
            <div className='contact-us-btn' />
            <div className='social-btn-box'>
              <a title="musense facebook" href="https://www.facebook.com/musense.marketing" target="_blank" className='fb-icon' ></a>
              <a title="musense instagram" href="https://www.instagram.com/musense.marketing/" target="_blank" className='ig-icon' ></a>
              {/* <div className='mail-icon' /> */}
            </div>
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
