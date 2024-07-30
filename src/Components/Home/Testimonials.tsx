// import { Splide, SplideSlide } from '@splidejs/react-splide';
import Slider from 'react-slick';
import { FaUser } from 'react-icons/fa';

const testimonialData = [
  { id: 1, name: 'Sri Ram', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio' },
  { id: 2, name: 'Vishnu', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio' },
  { id: 3, name: 'Shiva', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio' },
  { id: 4, name: 'Vinayak', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio' },
];

const TestimonialCarousel = () => {
  let settings ={
    dots: true, // Show pagination dots
    infinite: true, // Loop slides
    speed: 2000, // Transition speed (ms)
    slidesToShow: 3, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000, // Autoplay interval (ms)
    pauseOnHover: false, // Pause on hover
    arrows: false, // Hide navigation arrows
    adaptiveHeight: false, // Not directly equivalent to fixed height, but may help
    cssEase: 'linear', // Smooth transition
  }
  return (
    <div className="py-10 mb-10 bg-orange-100">
      <div className="container mx-auto">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <p className="text-sm text-orange-500">What our customers are saying</p>
          <h1 className="text-3xl font-bold m-2">Testimonials</h1>
          <p className="text-xs text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
        </div>
        <Slider
          {...settings}
        >
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id}>
              <div className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-white dark:bg-gray-800">
                  <div className="mb-4">
                    <FaUser className="text-6xl text-orange-400 mx-auto" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">{testimonial.text}</p>
                    <h1 className="text-lg font-bold text-black dark:text-light">{testimonial.name}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

