import React from 'react'
import './contact.css'
import {GoMail} from 'react-icons/go'
import {RiMessengerLine} from 'react-icons/ri'
import {SiWhatsapp} from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hxovc8d', 'template_yvq8zc3', form.current, 'GZku8nGgzd2LO-kVw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Entrer en contact</h5>
      <h2>Contactez moi</h2>
      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option">
            <GoMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mh.loembe@gmail.com</h5>
            <a href='mailto:mh.loembe@gmail.com' target='_blank'>Envoyer un message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Marguerite Helène</h5>
            <a href='https://www.facebook.com/profile.php?id=100080205086864'    target='_blank'>Envoyer un message</a>
          </article>
          <article className="contact__option">
            <SiWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+33 7 45 42 60 16</h5>
            <a href=' https://wa.me/33745426016' target='_blank'>Envoyer un message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nom complet' required/>
          <input type="email" name='email' placeholder='Votre email' required/>
          <textarea name="message" id="" rows="7" placeholder='Votre message' required></textarea>
          <button type="submit" className='btn btn-primary'>Envoyer</button>
        </form>
      </div>
    </section>
  )
}

export default Contact