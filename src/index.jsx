import React from 'react';
import BG from './components/bg';
import Nav from './components/nav';
import Logo from './components/logo';
import OurService from './components/ourService';
import ContactUs from './components/contactUs';
import Footer from './components/footer';

export default function Index() {
  return (
    <>
      <Logo />
      <Nav />
      <BG/>
      <OurService />
      <ContactUs />
      <Footer />
    </>
  );
}
