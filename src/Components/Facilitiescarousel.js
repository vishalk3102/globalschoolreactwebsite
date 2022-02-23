import React from "react";
import Slider from "react-slick";
import f1 from "../../src/Assets/f1.jpg";
import f2 from "../../src/Assets/f2.jpg";
import f3 from "../../src/Assets/f3.jpg";
import f4 from "../../src/Assets/f4.jpg";
import f7 from "../../src/Assets/f7.jpg";
import f6 from "../../src/Assets/f6.jpg";
import "../Components/style/Facultycarousel.css";
import LeftArrow from "../../src/Assets/left-arrow.svg";
import RightArrow from "../../src/Assets/right-arrow.svg";

const Facilitiescarousel = () => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img className="arrow" src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img className="arrow" src={RightArrow} alt="nextArrow" {...props} />
  );
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="Facultycarousel">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <h2> Facilities </h2>
              <Slider {...settings}>
                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={f1} alt="" />
                  </a>
                  <p>Outing</p>
                </div>
                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={f2} alt="" />
                  </a>
                  <p>Library</p>
                </div>
                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={f3} alt="" />
                  </a>
                  <p>Boarding</p>
                </div>
                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={f4} alt="" />
                  </a>
                  <p>Recreation</p>
                </div>

                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={f7} alt="" />
                  </a>
                  <p>Food and Accommodation</p>
                </div>
                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={f6} alt="" />
                  </a>
                  <p>Healthcare</p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Facilitiescarousel;
