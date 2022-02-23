import React from "react";
import Slider from "react-slick";
import cardimg1 from "../../src/Assets/cardimg1.jpg";
import sa1 from "../../src/Assets/sa1.jpg";
import sa2 from "../../src/Assets/sa2.jpg";
import sa3 from "../../src/Assets/sa3.jpg";
import sa4 from "../../src/Assets/sa4.jpg";
import sa5 from "../../src/Assets/sa5.jpg";
import sa6 from "../../src/Assets/sa6.jpg";
import sa7 from "../../src/Assets/sa7.jpg";
import "../Components/style/Cardcarousel.css";
import LeftArrow from "../../src/Assets/left-arrow.svg";
import RightArrow from "../../src/Assets/right-arrow.svg";

const Cardcarousel = () => {
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
      <section className="cardcarousel">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <h2> School Activities </h2>
              <Slider {...settings}>
                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={sa1} alt="" />
                  </a>
                </div>
                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={sa2} alt="" />
                  </a>
                </div>
                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={sa3} alt="" />
                  </a>
                </div>
                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={sa4} alt="" />
                  </a>
                </div>

                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={sa5} alt="" />
                  </a>
                </div>
                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={sa6} alt="" />
                  </a>
                </div>
                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={sa7} alt="" />
                  </a>
                </div>
                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={sa7} alt="" />
                  </a>
                </div>
              </Slider>
            </div>
          </div>
          <div className="col-10 mx-auto school-activities-textbox">
            <p>
              The Global School is one of the best boarding schools in Dehradun.
              This boarding school provides the best education with social and
              cultural values. Apart from academics, the Boarding schools in
              Dehradun also focus on the overall development of students. This
              reputed boarding school in Dehradun was opened in the year 2000 by
              the Global Educational Charitable Society. With the many best
              boarding schools in Dehradun, the Global School is ranked as the
              best boarding school. The Global school is a day boarding
              co-educational school that runs the classes from Nursery to XII
              and gives the English medium atmosphere. This school affiliated to
              the Central Board of Secondary Education (CBSE). The main purpose
              of Global School is to provides world-class education to learners.
              Along with academics, this school also focuses on extracurricular
              activities and offers excellent dining and residential facilities
              to students. Furthermore, this boarding school encourages students
              to expose them to a modern and advanced technological environment
              and develop sound ethical values to become world citizens.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cardcarousel;
