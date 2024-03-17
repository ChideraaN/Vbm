import Slider from 'react-infinite-logo-slider'
import './LogoSlider.scss'

export function LogoSlider() {

    return (
        <div className='slider'>
            <Slider
            width="300px"
            duration={30}
            pauseOnHover={true}
            blurBorders={false}
        >
            <Slider.Slide>
                <img src="/imgs/apple.png" alt="any" />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/imgs/dior.png" alt="any" />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/imgs/louis-vuitton.png" alt="any"  />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/imgs/jordan.png" alt="any" />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/imgs/asics.png" alt="any" />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/imgs/on-cloud.png" alt="any" className='logo-large' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/imgs/layer2.png" alt="any"/>
            </Slider.Slide>
            <Slider.Slide>
                <img src="/imgs/under-armour.png" alt="any" />
            </Slider.Slide>
            <Slider.Slide>
                <img src="/imgs/nike.png" alt="any" />
            </Slider.Slide>
        </Slider>
        </div>
    )
}
