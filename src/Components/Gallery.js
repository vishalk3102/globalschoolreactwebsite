import React from "react";
import sa1 from "../../src/Assets/sa1.jpg";
import sa2 from "../../src/Assets/sa2.jpg";
import sa3 from "../../src/Assets/sa3.jpg";
import sa4 from "../../src/Assets/sa4.jpg";
import sa5 from "../../src/Assets/sa5.jpg";
import sa6 from "../../src/Assets/sa6.jpg";
import sa7 from "../../src/Assets/sa7.jpg";
import ga1 from "../../src/Assets/ga1.jpg";
import ga2 from "../../src/Assets/ga2.jpg";
import ga3 from "../../src/Assets/ga3.jpg";
import ga4 from "../../src/Assets/ga4.jpg";
import ga5 from "../../src/Assets/ga5.jpg";
import ga6 from "../../src/Assets/ga6.jpg";
import ga7 from "../../src/Assets/ga7.jpg";
import ga8 from "../../src/Assets/ga8.jpg";
import "../Components/style/Gallery.css";

const Gallery = () => {
  return (
    <>
      <section className="gallery-section">
        <div className="container">
          <div className="row">
            <h2> Gallery</h2>
            <div className="gallery-box col-10 mx-auto">
              <div className="gallery-row">
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
              </div>
              <div className="gallery-row">
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
                    <img src={ga1} alt="" />
                  </a>
                </div>
              </div>
              <div className="gallery-row">
                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={ga2} alt="" />
                  </a>
                </div>
                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={ga3} alt="" />
                  </a>
                </div>
                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={ga4} alt="" />
                  </a>
                </div>
                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={ga5} alt="" />
                  </a>
                </div>
              </div>
              <div className="gallery-row">
                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={ga6} alt="" />
                  </a>
                </div>
                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={ga7} alt="" />
                  </a>
                </div>
                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={ga8} alt="" />
                  </a>
                </div>
                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={sa1} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Gallery;
