import React from "react";
import fa1 from "../../src/Assets/fa1.jpg";
import fa2 from "../../src/Assets/fa2.jpg";
import fa3 from "../../src/Assets/fa3.jpg";
import fa4 from "../../src/Assets/fa4.jpg";
import fa5 from "../../src/Assets/fa5.jpg";
import fa6 from "../../src/Assets/fa6.jpg";
import fa7 from "../../src/Assets/fa7.jpg";
import fa8 from "../../src/Assets/fa8.jpg";
import fa9 from "../../src/Assets/fa9.jpg";
import "../Components/style/Gallery.css";

const Faculty = () => {
  return (
    <>
      <section className="gallery-section">
        <div className="container">
          <div className="row">
            <h2> Faculty</h2>
            <div className="gallery-box col-10 mx-auto">
              <div className="gallery-row">
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
              </div>
              <div className="gallery-row">
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
              </div>
              <div className="gallery-row">
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
                <div className="cardimg-box">
                  <a href="#" className="cardimg">
                    <img src={fa9} alt="" />
                  </a>
                  <p>Dr Virendra Bahadur Singh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Faculty;
