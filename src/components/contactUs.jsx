import React from 'react';
import styles from './../css/contactUs.module.css';
import emailjs from '@emailjs/browser';

const EMAIL_SERVICE_KEY = 'service_4jii99l';
const EMAIL_TEMPLATE_KEY = 'template_lh9jlmm';
const EMAIL_PUBLIC_KEY = 'A8pR6FnD07-Z4fU7Q';

export default function ContactUs() {
  function subFormData(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));
    const userData = Object.fromEntries(formData)
    const templateParams = {
      name: userData.name,
      phone: userData.phone,
      email: userData.email,
      contactTime: `${new Date(userData.contact).toLocaleDateString()} ${new Date(userData.contact).toLocaleTimeString()}`,
      ask: userData.ask,
    };
    console.log(templateParams);
    
    emailjs
      .send(
        EMAIL_SERVICE_KEY,
        EMAIL_TEMPLATE_KEY,
        templateParams,
        EMAIL_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          console.log('FAILED...', err);
        }
      );
  }

  return (
    <div
      id='contactUs'
      className={styles['contact-us-wrapper']}
    >
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
