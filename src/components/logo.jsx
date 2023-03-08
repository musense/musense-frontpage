import React from 'react';
import { Link } from 'react-router-dom';
import './../css/logo.css';
// import styles from './../css/logo.module.css';

export default function Logo({ color }) {
  color ||= 'gray';
  return <Link title="Musense Marketing" className={`logo ${color}`} to="/"/>;
}
