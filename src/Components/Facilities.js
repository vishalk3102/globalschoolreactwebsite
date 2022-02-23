import React from "react";
import f1 from "../../src/Assets/f1.jpg";
import f2 from "../../src/Assets/f2.jpg";
import f3 from "../../src/Assets/f3.jpg";
import f4 from "../../src/Assets/f4.jpg";
import f7 from "../../src/Assets/f7.jpg";
import f6 from "../../src/Assets/f6.jpg";
import "../Components/style/Gallery.css";

const Facilities = () => {
  return (
    <>
      <section className="gallery-section">
        <div className="container">
          <div className="row">
            <h2> Academic Facilities</h2>
            <div className="gallery-box col-10 mx-auto">
              <div className="gallery-row">
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
              </div>
              <div className="gallery-row">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Facilities;
