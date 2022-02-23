import React from "react";
import "./style/Topnavbar.css";
import logo from "../../src/Assets/logo.png";
import { NavLink } from "react-router-dom";
import facebook from "../../src/Assets/facebook.png";
import twitter from "../../src/Assets/twitter.png";
import instagram from "../../src/Assets/instagram.png";
import youtube from "../../src/Assets/youtube.png";
import linkedin from "../../src/Assets/linkedin.png";

const Topnavbar = () => {
  return (
    <>
      <div className="container-fluid topnavbar-section">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="number-box me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        +91 8459126643 | school@gmail.com
                      </a>
                    </li>
                  </ul>
                  <ul className="social-icon-box ms-auto mb-2 mb-lg-0 d-flex justify-content-center align-item-center">
                    {/* <li className="login-btn my-auto">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Login |
                      </a>
                    </li> */}
                    <li className="social-icon">
                      <a
                        href="https://www.facebook.com/geuofficial/"
                        target="_blank"
                        className="facebook"
                      >
                        <img src={facebook} alt="" />
                      </a>
                    </li>
                    <li className="social-icon">
                      <a
                        href="https://www.instagram.com/geuofficial/"
                        target="_blank"
                        className="instagram"
                      >
                        <img src={instagram} alt="" />
                      </a>
                    </li>
                    <li className="social-icon">
                      <a
                        href="https://twitter.com/GEU_Official"
                        target="_blank"
                        className="twitter"
                      >
                        <img src={twitter} alt="" />
                      </a>
                    </li>
                    <li className="social-icon">
                      <a
                        href="https://www.youtube.com/GraphicEraOfficial"
                        target="_blank"
                        className="twitter"
                      >
                        <img src={youtube} alt="" />
                      </a>
                    </li>
                    <li className="social-icon">
                      <a
                        href="https://www.linkedin.com/school/graphic-era-official/"
                        target="_blank"
                        className="twitter"
                      >
                        <img src={linkedin} alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="container-fluid navbar-section">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav class="navbar navbar-expand-lg ">
              <div class="container-fluid">
                <a class="school-logo" href="#">
                  <img src={logo} alt="logo" />
                </a>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <NavLink
                        exact
                        to="/"
                        class="nav-link "
                        aria-current="page"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink
                        exact
                        to="/about"
                        class="nav-link "
                        aria-current="page"
                        href="#"
                      >
                        About
                      </NavLink>
                    </li>
                    <li class="nav-item dropdown">
                      <NavLink
                        class="nav-link dropdown-toggle"
                        exact
                        to="/academia"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Academia
                      </NavLink>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <NavLink class="dropdown-item" exact to="/faculty">
                            Faculty
                          </NavLink>
                        </li>
                        <li>
                          <NavLink exact to="/facilities" class="dropdown-item">
                            Academic Facilities
                          </NavLink>
                        </li>
                        {/* <li>
                          <a class="dropdown-item" href="#">
                            School schedule
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Curriculum
                          </a>
                        </li> */}
                      </ul>
                    </li>
                    <li class="nav-item">
                      <NavLink
                        class="nav-link "
                        aria-current="page"
                        exact
                        to="/admission"
                      >
                        Admission
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink
                        class="nav-link "
                        aria-current="page"
                        exact
                        to="/gallery"
                      >
                        Gallery
                      </NavLink>
                    </li>

                    <li class="nav-item">
                      <NavLink
                        class="nav-link "
                        aria-current="page"
                        exact
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Topnavbar;
