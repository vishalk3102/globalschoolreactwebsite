import React from "react";
import "./style/Welcome.css";
import welcomeimg from "../../src/Assets/welcomeimg.jpg";
import { NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <section className="welcome-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto d-flex justify-content-center align-items-center">
              <div className="welcome-text-box col-6">
                <h4>#1 Co-ed School in Dehradun</h4>
                <h2>Welcome to The Global School</h2>
                <p>
                  To bring together the traditions and ethos of India with
                  modern technology in an environment where every child is an
                  individual. The Global School is a day boarding school in
                  Dehradun which offers English medium, secular, co-educational
                  education from classes Nursery to XII. The School is
                  affiliated to the Central Board of Secondary Education.
                  <br />
                  <br />
                  There is no better place for a child to appreciate the joys of
                  nature and to become environmentally conscious.
                </p>
                <div className="welcome-btn">
                  <NavLink exact to="/about" type="button" class="btn ">
                    Know more
                  </NavLink>
                </div>
              </div>
              <div className="welcome-img-box col-6">
                <img src={welcomeimg} alt="welcomeimg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Welcome;
