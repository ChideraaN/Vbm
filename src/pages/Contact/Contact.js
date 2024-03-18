import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss'

export const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_5ea1t9n';
    const templateId = 'template_rpd6vpw';
    const publicKey = 'KdQihMQM0l6ibmgts';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Web Wizard',
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

  return (
    <section id='contact-us'  >
      <div className='email-section'>
        <div style={{ display: 'flex', alignItems: 'center' }} className='contact-form-top'>
          <img style={{ width: '15%' }} src='imgs/vbm-logo-large.png' alt='' />
          <h1 style={{ color: 'white', fontFamily: 'DrukWideBold' }}>CONTACT US</h1>
        </div>
        <p style={{ color: 'white', marginBottom: '10px' }}>Any questions or want to get involved? Reach out to ud through our form or social media.
          Let's make the urban resale market more vibrant and trustworthy together.
        </p>
        <form onSubmit={handleSubmit} className='emailForm'>
          <div className='contact-details'>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='message-body'>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              placeholder='Type Message'
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            >
            </textarea>
          </div>
          <div onClick={handleSubmit} className='submit-button' style={{ marginTop:'10px' }}>
            SEND
            {/* <button type="submit">Send Email</button> */}
          </div>
        </form>
      </div>
      <div className='details-sction'>
        <h1>General Contact</h1>
        <div className="">
          <h3>Email</h3>
          <h3>vbm@gmail.com</h3>
        </div>
        <div className="">
          <h3>Phone</h3>
          <h3>(+353) 899754431</h3>
        </div>
        <div className="">
          <h3>Address</h3>
          <h3>HQ Address</h3>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <img src="images/instagram.png" alt="" />
          <img src="images/snapchat.png" alt="" />
          <img src="images/tik-tok.png" alt="" />
        </div>
      </div>
      <div>

      </div>
    </section>
  )
};