import React from 'react'
import './Hero.scss';

export function Hero() {
  return (
    <section className='hero-section'>
      <video id='vid' src='/hero-video.mp4' autoPlay loop muted />
      <div className='centerr'>
      <img className='vbm-image' src='/imgs/vbm-logo-large.png' alt='' />

      </div>
    </section>
  )
}