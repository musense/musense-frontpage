import React, { useState } from 'react';
import './../../css/contactUs.css';
import emailjs from '@emailjs/browser';
import Modal from 'react-modal';

const EMAIL_SERVICE_KEY = 'service_4jii99l';
const EMAIL_TEMPLATE_KEY = 'template_lh9jlmm';
const EMAIL_PUBLIC_KEY = 'A8pR6FnD07-Z4fU7Q';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
export default function ContactUs() {
  let subtitle;

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  //TODO: success/ failure conditions
  function afterOpenModal(message) {
    console.log(
      '🚀 ~ file: contactUs.jsx:32 ~ afterOpenModal ~ message:',
      message
    );
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
    if (subtitle === null) return;
    if (typeof message !== 'string') return;

    subtitle.innerText = message;
    console.log(
      '🚀 ~ file: contactUs.jsx:35 ~ afterOpenModal ~ subtitle.innerText:',
      subtitle.innerText
    );
  }

  function closeModal() {
    setIsOpen(false);
  }

  function subFormData(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData));
    const userData = Object.fromEntries(formData);
    const templateParams = {
      name: userData.name,
      phone: userData.phone,
      email: userData.email,
      contactTime: `${new Date(
        userData.contact
      ).toLocaleDateString()} ${new Date(
        userData.contact
      ).toLocaleTimeString()}`,
      ask: userData.ask,
    };
    console.log(templateParams);

    // const emailPromise = new Promise((res, rej) => {
    //   rej(templateParams);
    // });
    // emailPromise
    //   .then((data) => {
    //     setIsOpen(true);
    //   })
    //   .catch((data) => {
    //     setIsOpen(true);
    //   });
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
          setIsOpen(true);
        },
        (err) => {
          console.log('FAILED...', err);
          setIsOpen(true);
        }
      );
  }

  return (
    <div
      id='contactUs'
      className={'contact-us-wrapper'}
    >
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Success Modal'
      >
        <div className='modal-header'>
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>送出成功！</h2>
          <button
            onClick={closeModal}
            className='modal-close'
            type='button'
          ></button>
        </div>
        <div>您的訊息最慢將於 {'xxxx'} 回覆，謝謝</div>
      </Modal>
      <div className={'contact-us'} />
      <div className={'contact-us-content'}>
        <div className={'img-wrapper'}>
          <div className={'image-down'} />
          <div className={'orange-box'} />
        </div>
        <form
          name='contactForm'
          className={'contact-us-form'}
          onSubmit={subFormData}
        >
          <div className={'enter-box name'}>
            <input
              type='text'
              name='name'
            />
          </div>
          <div className={'enter-box phone'}>
            <input
              type='tel'
              name='phone'
            />
          </div>
          <div className={'enter-box email'}>
            <input
              type='email'
              name='email'
            />
          </div>
          <div className={'enter-box contact'}>
            <input
              type='datetime-local'
              name='contact'
              placeholder={new Date(new Date().getTime())}
            />
          </div>
          <div className={'enter-box ask large'}>
            <textarea
              type='text'
              name='ask'
            />
          </div>
          <button
            title='send button'
            className={'send-button'}
            type='submit'
          />
        </form>
      </div>
    </div>
  );
}
