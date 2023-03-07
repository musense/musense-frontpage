import React from 'react';
import About from '../components/IndexView/about';
import ContactUs from '../components/IndexView/contactUs';
import OurService from '../components/IndexView/ourService';

export default function IndexView() {
  return (
    <>
      <About />
      <OurService />
      <ContactUs />
    </>
  );
}
