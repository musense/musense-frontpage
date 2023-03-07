import React from "react";
import './../css/logo.css';
// import styles from './../css/logo.module.css';

export default function Logo({color}) {
  color ||= 'gray'
  return (
    <div className={`logo ${color}`} />
  );
}
