import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="https://placeimg.com/1200/600/nature" alt="Carousel Image 1" className="w-full h-auto" />
      </div>
      <div>
        <img src="https://placeimg.com/1200/600/arch" alt="Carousel Image 2" className="w-full h-auto" />
      </div>
      <div>
        <img src="https://placeimg.com/1200/600/tech" alt="Carousel Image 3" className="w-full h-auto" />
      </div>
    </Slider>
  );
};

export default Carousel;
