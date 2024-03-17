import './About.scss';

export function About() {
  return (
    <div id="about">

      <section id='top'>
        <div className='container'>
          <div className="image-container">
            <img src='images/sharky.png' className='hidden' alt='' />
            <img className="hidden" src='images/vbm_camera.jpeg' alt='' />
          </div>
        </div>
      </section>

      <section id='middle-container'>
        <div className='middle'>
          <div className="middle-text">
            <h1 style={{ fontFamily: 'DrukWideBold', color: 'var(--vbm-color)' }}>ABOUT VBM</h1>
            <p style={{ fontFamily: 'Avenir-Roman', color: 'white' }}>
              From humble beginnings, we've grown to serve over 10,000
              clients spanning diverse ages and demographics, including
              high profile individuals who trust us with their unique requirements.
              At VBM, we take pride in our journey, starting from the bottom and now
              standing tall as a go-to solution for business, fashion and tech enthusiasts alike.
            </p>
          </div>
          <div className="alt-image-container">
            <img src='images/plantain_papi.jpeg' className='' alt='' />
            <img className="" src='images/vbm_group_pic.jpeg' alt='' />
          </div>
        </div>
      </section>

      <section id="bottom">
        <div className='bottom-text'>
          <h1 style={{ fontFamily: 'DrukWideBold', color: 'var(--vbm-color)',marginBottom:'10px' }}>SATISFACTION IS THE MISSION</h1>
          <p style={{ fontFamily: 'Avenir-Roman', color: 'white',marginBottom:'10px' ,lineHeight:'30px' }}>
            As a team of highly talented individuals we are dedicated to
            providing high value affordable services that elevate your business and personal experiences.
            Whether you are seeking cutting Edge tech Solutions stylish business attire or a seamless blend of both
            VBM is your one-stop destination for all things innovative fashionable and tailored to your unique needs join us on this exciting
            journey where your satisfaction is not just the goal it's our mission.
          </p>
          <h1 style={{ fontFamily: 'DrukWideBold', color: 'var(--vbm-color)', marginBottom: '7%'}}>VOUCHED BY MANY</h1>
        </div>
      </section>
    </div>
  )
}