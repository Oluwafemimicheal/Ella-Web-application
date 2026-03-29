// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { HeroDisplayCard } from './HeroDisplayCard';

const heroDetails = [
  {
    bg: "hero-1",
    title: "HIGH -QUALITY OIL-BASE PIGMENT FOR LIPGLOSS PRODUCTION",
    desc: "Move beyond product but lifestyle and brand lover"
  },
  {
    bg: "hero-2",
    title: "Cosmetic Ingredients Lip Gloss Base",
    desc: "Move beyond product but lifestyle and brand lover"
  },
  {
    bg: "hero-3",
    title: "MULTIPURPOSE BUTTER",
    desc: "Move beyond product but lifestyle and brand lover"
  },
]

const Slider = () => {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}

        speed={1000}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="heroSlider flex items-center justify-center"
      >
        {
          heroDetails.map((hero, index) => {
            return <SwiperSlide key={index}>
              <HeroDisplayCard hero={hero} />
            </SwiperSlide>
          })
        }
      </Swiper >
    </>
  );
}

export default Slider;
