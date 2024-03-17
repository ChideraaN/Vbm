import { useState } from 'react';
import './HQ.scss';
import emailjs from '@emailjs/browser';
import TimeModal from '../../components/Modal/TimeModal';

export function HQ() {
  const [name, setName] = useState('');
  const [calendar, setCalendar] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_5ea1t9n';
    const templateId = 'template_rpd6vpw';
    const publicKey = 'KdQihMQM0l6ibmgts';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      to_name: 'Web Wizard',
      date: calendar, // You can add more parameters based on your template
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        // Add any additional logic you want after the email is sent
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <TimeModal openModal={openModal} closeModal={closeModal} isModalOpen={isModalOpen} />
      <section>
        <div className="container22">
          <div className="content222">
            <h1 class="main-page-title page-title h0 scroll-trigger animate--fade-in">
              HQ
            </h1>
            <h2>

              PRESENTING VBM HQ

            </h2>
            <p>A premium creator space catering to all your content needs. Book with the best. Book VBM HQ</p>
          </div>
          <div className="videe" style={{ padding: '40px 0px' }}>
            <video
              playsInline
              autoPlay
              loop
              controls
              preload="metadata"
              poster="//296b8a-2.myshopify.com/cdn/shop/files/preview_images/87ffe7c1533b4e1f93a78db57893a004.thumbnail.0000000000_1100x.jpg?v=1703955097"
            >
              <source
                src="https://cdn.shopify.com/videos/c/vp/87ffe7c1533b4e1f93a78db57893a004/87ffe7c1533b4e1f93a78db57893a004.HD-1080p-7.2Mbps-22535980.mp4"
                type="video/mp4"
              />
              <img
                src="//296b8a-2.myshopify.com/cdn/shop/files/preview_images/87ffe7c1533b4e1f93a78db57893a004.thumbnail.0000000000_1100x.jpg?v=1703955097"
                alt="Video Poster"
              />
            </video>
          </div>
          <div className='modaal'>
            <p class="product__text inline-richtext caption-with-letter-spacing ">VBM </p>
            <h2 class="product__title h1">VBM HQ Session
            </h2>
            <span class="price-item price-item--regular">
              €50,00 EUR
            </span>
            <p class="product__text inline-richtext caption-with-letter-spacing " style={{ marginTop: '10px' }}>Tax included. </p>
            <button className='btnn' onClick={openModal}> Schedule Your Time</button>
          </div>
          {/* <form onSubmit={handleSubmit}>
            <div className='contact-details'>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="date"
                placeholder="Date"
                value={calendar}
                onChange={(e) => setCalendar(e.target.value)}
              />
              <button type="submit" className="submit-button">SEND</button>
            </div>
          </form> */}
        </div>
      </section>
    </div>
  );
}
