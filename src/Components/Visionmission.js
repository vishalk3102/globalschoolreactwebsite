import React from "react";
import "./style/Visionmission.css";
import principalimg from "../../src/Assets/principalimg.jpg";
import { NavLink } from "react-router-dom";

const Visionmission = () => {
  return (
    <>
      <section className="visionmission-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto d-flex justify-content-center align-item-center">
              <div className="visionmission-text-box col-6">
                <div className="vision-text">
                  <h3> Our Vision</h3>
                  <p>
                    To cater to the educational needs of the children of
                    transferable Central Government employees including Defence
                    and Para-Military personnel by providing a common programme
                    of education; To pursue excellence and set the pace in the
                    field of school education To initiate and promote
                    experimentation and innovativeness in education in
                    collaboration with other bodies like the Central Board of
                    Secondary Education and the National Council of Educational
                    Research and Training etc.
                  </p>
                </div>
                <div className="mission-text">
                  <h3>our Mission</h3>
                  <p>
                    To cater to the educational needs of children of
                    transferable Central Government including Defence and
                    Para-military personnel by providing a common programme of
                    education To pursue excellence and set the pace in the field
                    of school education;
                  </p>
                </div>
                <div className="readmore-btn">
                  <NavLink exact to="/about" type="button" class="btn ">
                    Read more
                  </NavLink>
                </div>
              </div>
              <div className="principal-text-box col-6">
                <h3>From The Principal's Desk</h3>
                <div className="principal-img">
                  <img src={principalimg} alt="principalimg" />
                </div>
                <div className="principal-text">
                  <p>
                    “The only person who is educated is the one who has learned
                    how to learn …and change”, so stated American psychologist
                    Carl Rogers and today more than ever the aim of
                    educationists is to teach students how to learn, while
                    adapting to the new normal. I joined the school in the most
                    unique and unprecedented times, which is when the entire
                    world was under a lockdown. However, though the gates of
                    schools were shut, the process of teaching and learning
                    definitely was not and therefore we too, the management and
                    staff<span>…Read More</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Visionmission;
