import React from "react";
import "./style/Mainslider.css";
import img1 from "../../src/Assets/slideimg1.jpg";
import img2 from "../../src/Assets/slideimg2.jpg";
import { NavLink } from "react-router-dom";

const Mainslider = () => {
  return (
    <>
      <section className="mainslider-section">
        <div className="conatainer-fluid">
          <div className="row">
            <div className="col-12">
              <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                  ></div>
                  <div className="carousel-item active">
                    <img src={img1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h1>Graphic era Global school</h1>
                      <h4>Ranked #1 Best CBSE school in Dehradun</h4>
                      <p>
                        The Global School is among the best schools in Dehradun
                        which provide co-educational Boarding school. The Global
                        School offers co-educational education from Nursery to
                        XII and is affiliated to the CBSE Board.
                      </p>
                      <div className="carousel-btn">
                        <NavLink exact to="/contact" type="button" class="btn ">
                          Contact us
                        </NavLink>
                        <NavLink exact to="/about" type="button" class="btn ">
                          Know more
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={img2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                      <h1>Graphic era global school</h1>
                      <h4>Ranked #1 Best CBSE school in Dehradun</h4>
                      <p>
                        The Global School is among the best schools in Dehradun
                        which provide co-educational Boarding school. The Global
                        School offers co-educational education from Nursery to
                        XII and is affiliated to the CBSE Board.
                      </p>
                      <div className="carousel-btn">
                        <NavLink exact to="/contact" type="button" class="btn ">
                          Contact us
                        </NavLink>
                        <NavLink exact to="/about" type="button" class="btn ">
                          Know more
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Mainslider;
