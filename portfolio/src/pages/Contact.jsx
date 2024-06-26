import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zx2jc7m', 'template_60nek6r', form.current, {
        publicKey: 'Eqs0i9CbXZzjU6DTK',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contact'>
        <h2>Feel free to email me with any questions</h2>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
  );
};