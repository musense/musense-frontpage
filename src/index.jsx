import React from 'react';
import About from './components/about';
import Header from './components/header';
import Logo from './components/logo';
import OurService from './components/ourService';
import ContactUs from './components/contactUs';
import Footer from './components/footer';

export default function Index() {
  return (
    <>
      <Header />
      <About/>
      <OurService />
      <ContactUs />
      <Footer />
    </>
  );
}
