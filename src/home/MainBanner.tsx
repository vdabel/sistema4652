import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MainBanner.css";
import slide1 from "./../assets/images/banner1.jpg";
import slide2 from "./../assets/images/banner2.jpg";
import slide3 from "./../assets/images/banner3.jpg";
import slide4 from "./../assets/images/banner4.jpg";


const MainBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="relative">
          <img src={slide1} alt="" className="w-full" />
          <div className="banner-caption">
            <h5>Nuevos proyectos</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quia, omnis debitis et sit id autem vitae error! Excepturi quod tempora officia quibusdam blanditiis.</p>
          </div>
        </div>
        <div className="relative">
          <img src={slide2} alt="" className="w-full" />
        </div>
        <div className="relative">
          <img src={slide3} alt="" className="w-full" />
        </div>
        <div className="relative">
          <img src={slide4} alt="" className="w-full" />
        </div>
      </Slider>
    </div>
  );
}

export default MainBanner