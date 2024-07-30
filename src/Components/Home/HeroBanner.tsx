// import { Splide, SplideSlide } from '@splidejs/react-splide';
import Slider from 'react-slick'
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";
import '@splidejs/splide/dist/css/splide.min.css'; // Import Splide styles
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const slides = [
  {
    title: '70% off on all Products Sale',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: banner1,
  },
  {
    title: '50% off on all Women\'s wear',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: banner2,
  },
  {
    title: '30% off on all Men\'s wear',
    description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: banner3,
  }
];

const HeroBanner = () => {
  let settings ={
    dots: true, // Show pagination dots
    infinite: true, // Loop slides
    speed: 2000, // Transition speed (ms)
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000, // Autoplay interval (ms)
    pauseOnHover: false, // Pause on hover
    arrows: false, // Hide navigation arrows
    adaptiveHeight: false, // Not directly equivalent to fixed height, but may help
    cssEase: 'linear', // Smooth transition
  }
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* Background Element */}
      <div className="h-[700px] w-[650px] bg-orange-200 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-8"></div>

      <div className="container pb-8 sm:pb-0">
        <Slider
          {...settings}
        >
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center p-12">
                <div className="flex flex-col justify-center gap-4 pt-16 sm:pt-12 text-center sm:text-left">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    {slide.title}
                  </h1>
                  <p className="text-sm">
                    {slide.description}
                  </p>
                  <Link to="/all">
                    <button className="bg-orange-600 duration-200 text-white py-2 px-4 rounded-md w-32">
                      Explore Now
                    </button>
                  </Link>
                </div>
                <div>
                  <img src={slide.image} alt="" className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] object-cover mx-auto" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroBanner;








