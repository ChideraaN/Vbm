import './Home.scss';
import { Hero } from '../../components/HeroSection/Hero';
import { Frame } from '../../components/Frame/Frame';
import { Quote } from '../../components/Quote/Quote';
import { Carousel } from '../../components/Carousel/Carousel';
import Modal from '../../components/Modal/Modal';
import { useState } from 'react';
import { useEffect } from 'react';
export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    // This effect will run when the component mounts
    setIsModalOpen(true); // Open the modal when the homepage mounts
  }, []);
  return (
    <div className='home'>
      <Hero />
      <Modal   closeModal={closeModal} isModalOpen={isModalOpen} />

      <section id='buy-sell-source'>
        <div className='content'>
          <div className='layered-image'>
            <img src='/imgs/tri-image.png' alt='Layered Images' />
          </div>
          <div className='business-info-text'>
            <div className='title'>
              BUY <br /><span>SELL</span> <br />SOURCE
            </div>
            <p>
              Welcome to Vouched By Many (VBM) - your ultimate urban reselling
              platform where authenticity meets modernity.
              At VBM we're not just a marketplace;
              we're community where every item has a story
              and every transaction is a step towards a sustainable future.
            </p>
            <p>
              Born in the heart of the city we understand the Pulse of urban fashion
              and tech. Our mission is to provide a trustworthy and seamless reselling
              experience vouch by a community of passionate individuals.
            </p>
          </div>
        </div>
      </section>
      <section id='testimonials'>
        <div className='testimonials-content'>
          <div className='testimonials-title'>
            OUR IMPACT IN NUMBERS
          </div>
          <div className='frames'>
            <Frame text='Over 1000+ Happy Bosses' source='/imgs/person.svg' />
            <Frame text='100% Authenticity' source='/imgs/verified.svg' />
            <Frame text='5000+ Items Sold' source='/imgs/shopping.svg' />
          </div>
        </div>
      </section>
      <section id='what-people-say' className='what-people-say'>
        {/* <div className='logo-slider'>
          <LogoSlider />
        </div> */}
        <div className='quote-container'>
          <Quote>
            VBM has revolutionized the way I shop for gear. Every purchase feels personal and authentic - Alex J
          </Quote>
          <Quote>
            VBM was a breeze my items were sold quickly and the process was very efficient 😁 - Samantha K
          </Quote>
          <Quote>
            I was hesitant buying resole items online, <br /> but VBM's authenticity guarantee gave me the confidence to dive in. Best decision ever ! - Mike D
          </Quote>
          <Quote>
            Simply the best grafter and best seller in the game. Nothing less than perfect every time - Colin S
          </Quote>
        </div>
      </section>
      <section id='img-display'>
        <Carousel />
      </section>
      <section className='bottom'>
        <div className="never-miss-a-drop">
          <img className='logo-img' src='/imgs/vbm-logo-large.png' alt='' />
          <h2 style={{ fontFamily: 'DrukWideBold', color: 'white' }} >NEVER MISS A DROP</h2>
          <div className='pill'>
            <h3  >CONTACT US</h3>
          </div>
          <p style={{ color: 'white', padding: '10px' }}>
            We offer a wide range or services, spanning from Cryptocurrency Transactions and Luxury Timepieces
            to Top End Automobiles, Clothes and beyond.
          </p>
          <div className='logo-container-bottom'>
          <div className='logo-text'>
              <a href='https://www.snapchat.com/add/vbmofficall'>
                <img src='/imgs/snapchat.svg' alt='' />
                <h4 style={{ fontFamily: 'DrukWideBold' }} className='special'>VBMOFFICIAL_</h4>
              </a>
            </div>
            <div className='logo-text'>
              <a href='https://www.instagram.com/vbmofficial_/'>
                <img src='/imgs/instagram.svg' alt='' />
                <h4 style={{ fontFamily: 'DrukWideBold', }} className='special'>VBMOFFICIAL_</h4>
              </a>
            </div>
            <div className='logo-text'>
              <a href='https://www.tiktok.com/@vbmofficial_'>
                <img src='/imgs/tiktok.svg' alt='' />
                <h4 style={{ fontFamily: 'DrukWideBold', }} className='special'>VBMOFFICIAL_</h4>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div >
  )
}