import './HQ.scss';

export function HQ() {
  return (
    <div>
      <section>
        <div className="container22">
          <div className="content222">
            <h1 className="main-page-title page-title h0 scroll-trigger animate--fade-in">
              HQ
            </h1>
            <p>A premium creator space catering to all your content needs. VBM HQ</p>
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
          {/* <div className='modaal'>
            <p class="product__text inline-richtext caption-with-letter-spacing ">VBM </p>
            <h2 class="product__title h1">VBM HQ Session
            </h2>
            <span class="price-item price-item--regular">
              €50,00 EUR
            </span>
            <p class="product__text inline-richtext caption-with-letter-spacing " style={{ marginTop: '10px' }}>Tax included. </p>
            <button className='btnn' onClick={openModal}> Schedule Your Time</button>
          </div> */}
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
