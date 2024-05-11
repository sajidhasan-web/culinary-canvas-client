// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade';

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import Slide from './Slide'

import slide1 from "../../assets/slide1.jpg"
import slide2 from "../../assets/slide2.jpg"
import slide3 from "../../assets/slide3.jpg"


const Slider = () => {
  return (
    <div>
      <Swiper
      
        effect={'fade'}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            img={slide1}
            title='Welcome to CulinaryCanvas'
            des={'Indulge in Exquisite Culinary Delights'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img={slide2}
            title='Discover a World of Flavors'
            des={'Experience Fusion Cuisine at Its Finest'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img={slide3}
            title='Unforgettable Dining Experiences Await'
            des={'Immerse Yourself in a Gastronomic Journey'}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
