import React from 'react';
import styles from './../css/contactUs.module.css';

export default function ContactUs() {
  function subFormData(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));
  }

  return (
    <div id="contactUs" className={styles['contact-us-wrapper']}>
      <div className={styles['contact-us']} />
      <div className={styles['contact-us-content']}>
        <div className={styles['img-wrapper']}>
          <div className={styles['image-down']} />
          <div className={styles['orange-box']} />
        </div>
        <form
          name='contactForm'
          className={styles['contact-us-form']}
          onSubmit={subFormData}
        >
          <div className={`${styles['enter-box']} ${styles.name}`}>
            <input
              type='text'
              name='name'
            />
          </div>
          <div className={`${styles['enter-box']} ${styles.phone}`}>
            <input
              type='tel'
              name='phone'
            />
          </div>
          <div className={`${styles['enter-box']} ${styles.email}`}>
            <input
              type='email'
              name='email'
            />
          </div>
          <div className={`${styles['enter-box']} ${styles.contact}`}>
            <input
              type='datetime-local'
              name='contact'
              placeholder={new Date(new Date().getTime())}
            />
          </div>
          <div
            className={`${styles['enter-box']} ${styles.ask} ${styles.large}`}
          >
            <textarea
              type='text'
              name='ask'
            />
          </div>
          <button
            title='send button'
            className={styles['send-button']}
            type='submit'
          />
        </form>
      </div>
    </div>
  );
}
