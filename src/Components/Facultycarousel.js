import React from "react";
import Slider from "react-slick";
import fa1 from "../../src/Assets/fa1.jpg";
import fa2 from "../../src/Assets/fa2.jpg";
import fa3 from "../../src/Assets/fa3.jpg";
import fa4 from "../../src/Assets/fa4.jpg";
import fa5 from "../../src/Assets/fa5.jpg";
import fa6 from "../../src/Assets/fa6.jpg";
import fa7 from "../../src/Assets/fa7.jpg";
import fa8 from "../../src/Assets/fa8.jpg";
import "../Components/style/Facultycarousel.css";
import LeftArrow from "../../src/Assets/left-arrow.svg";
import RightArrow from "../../src/Assets/right-arrow.svg";

const Facultycarousel = () => {
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
              <h2> Faculty </h2>
              <Slider {...settings}>
                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={fa1} alt="" />
                  </a>
                  <p>Prof.(Dr) Kamal Ghanshala</p>
                </div>
                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={fa2} alt="" />
                  </a>
                  <p>Prof.(Dr) R.C joshi</p>
                </div>
                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={fa3} alt="" />
                  </a>
                  <p>Prof.(Dr) H.N. Nagaraja</p>
                </div>
                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={fa4} alt="" />
                  </a>
                  <p>Maj Gen Prof (Dr)OP Soni</p>
                </div>

                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={fa5} alt="" />
                  </a>
                  <p>Dr. Devesh Pratap Singh</p>
                </div>
                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={fa6} alt="" />
                  </a>
                  <p>Dr. Padmanabh Thakur</p>
                </div>
                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={fa7} alt="" />
                  </a>
                  <p>Dr. Md. Irfanul Hasan</p>
                </div>
                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={fa8} alt="" />
                  </a>
                  <p>Dr Sanjeev Kumar</p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Facultycarousel;
