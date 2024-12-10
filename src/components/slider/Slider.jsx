
import Slider from "react-slick";

import { sliderImgs } from '../../utils/image';
function Headingslider() {
    let settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="slider">
            <div className="container">
                <Slider className='slider-content' {...settings}>
                    <div>
                        <img src={sliderImgs[0]} alt="slider-img" />
                    </div>
                    <div>
                        <img src={sliderImgs[1]} alt="slider-img" />
                    </div>
                </Slider>
            </div>
        </div>


    )
}

export default Headingslider