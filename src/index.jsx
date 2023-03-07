import React from 'react';
import HeaderLayout from './components/headerLayout';
import FooterLayout from './components/footerLayout';
import { Outlet } from 'react-router-dom';

export default function Index() {
  return (
    <>
      <HeaderLayout />
      <Outlet />
      <FooterLayout />
    </>
  );
}
