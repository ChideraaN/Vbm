import './Carousel.css';

export function Carousel() {
  return (
    <div id='gallery'>
      <div className="parent-container">
          <div className="child-container" id="one">
            <img src='/plantain.png' width="100%" height="auto" alt='' />
            <img src='images/vbm_group_pic.jpeg' width="100%" height="auto" alt=''/>
            <img src="images/irish_influencer.jpeg" width="100%" height="auto" alt=''/>
            <img src="images/crocs.jpeg" width="100%" height="auto" alt=''/>
          </div>
          <div className="child-container" id="two">
            <img src="images/fiona.jpeg" width="100%" height="auto" alt=''/>
            <img src="images/jordan_lows.jpeg" width="100%" height="auto" alt=''/>
            <img src="images/vbm_camera.jpeg" width="100%" height="auto" alt=''/>

          </div>
          <div className="child-container" id="three">
            <img src="/twins.png" width="100%" height="auto" alt=''/>
            <img src="images/IMG_3106.JPEG" width="100%" height="auto" alt=''/>
            <img src="images/vbm_bags.jpeg" width="100%" height="auto" alt=''/>
            <img src="images/jordan_colorways.jpeg" width="100%" height="auto/" alt=''/>
          </div>
        </div>
    </div>
  );
}