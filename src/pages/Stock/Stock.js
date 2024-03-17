import './Stock.scss';

export function Stock() {
  return (
    <div>
      <section>
        <div className="premium-quality">
          <img className='logo-img' src='/imgs/vbm-logo-large.png' alt='' />
          <h2>PERFECT QUALITY</h2>
          <h2 className='special'>PREMIUM SERVICE</h2>
          <p>
            We offer a wide range or services, spanning from Cryptocurrency Transactions and Luxury Timepieces
            to Top End Automobiles, Clothes and beyond.
          </p>
          <div className='logo-container'>
          <div className='logo-text'>
              <a href='https://www.snapchat.com/add/vbmofficall'>
                <img src='/imgs/snapchat.svg' alt='' />
              </a>
            </div>
            <div className='logo-text'>
              <a href='https://www.instagram.com/vbmofficial_/'>
                <img src='/imgs/instagram.svg' alt='' />
              </a>
            </div>
            <div className='logo-text'>
              <a href='https://www.tiktok.com/@vbmofficial_'>
                <img src='/imgs/tiktok.svg' alt='' />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='img-text-container'>
          <h1 style={{ fontFamily: 'DrukWideBold', color: 'white' }}>IF THERE IS SOMETHING <br></br> <span className='special' style={{ fontFamily: 'DrukWideBold' }}>YOU DESIRE</span></h1>
          <img className='section-img' src='/imgs/jordan-shoe.png' alt='' />
        </div>
      </section>
      <section>
        <div className='img-text-container'>
          <h1 style={{ fontFamily: 'DrukWideBold', color: 'white' }}>JUST LET US <br></br> <span className='special' style={{ fontFamily: 'DrukWideBold' }}>KNOW</span></h1>
          <img className='section-img' src='/imgs/car.png' alt='' />
        </div>
      </section>
      <section>
        <div className='img-text-container'>
          <h1 style={{ fontFamily: 'DrukWideBold', color: 'white' }}>AND WE CAN TAKE CARE OF<br></br> <span className='special' style={{ fontFamily: 'DrukWideBold' }}>THE REST</span></h1>
          <img className='section-img' src='/imgs/bitcoin.png' alt='' />
        </div>
      </section>
      <section className='bottom'>
        <div className="never-miss-a-drop">
          <img className='logo-img' src='/imgs/vbm-logo-large.png' alt='' />
          <h2 style={{ fontFamily: 'DrukWideBold', color: 'white' }} >NEVER MISS A DROP</h2>
          <div className='pill'>
            <h3>CONTACT US</h3>
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
    </div>
  )
}