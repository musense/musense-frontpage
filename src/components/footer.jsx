import React from 'react';
import styles from './../css/footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <div className={styles['footer-logo']} />
        <div className={styles['footer-company']}></div>
      </div>
      <div>
        <button
          className={styles['contact-button']}
          type='button'
        />
        <div>
          <button
            className={styles['fb-icon']}
            type='button'
          />
          <button
            className={styles['ms-icon']}
            type='button'
          />
          <button
            className={styles['mail-icon']}
            type='button'
          />
        </div>
        <div className={styles.copyright}>
          Copyright © 2023 陌聲行銷有限公司 All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
