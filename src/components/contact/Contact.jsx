import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import{FaWhatsapp} from 'react-icons/fa'
import{TbBrandTelegram, TbBrandTwitter} from 'react-icons/tb'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ks27agp', 'template_s8q1d8p', form.current, '-Wch1sLimKhZvPQUK')
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ayushman45679@gmail.com</h5>
            <a href="mailto:ayushman45679@gmail.com">SEND A MESSAGE</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+917900741009</h5>
            <a href="https://wa.me/917900741009?text=Hello%20Harsh%2C%20I%20have%20some%20queries%20related%20to%20your%20work%3F">SEND A MESSAGE</a>
          </article>
          <article className="contact__option">
            <TbBrandTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>@ayushman45679</h5>
            <a href="https://twitter.com/ayushman45679">SEND A MESSAGE</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7"placeholder= 'Your Message'required ></textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact