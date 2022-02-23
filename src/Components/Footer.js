import React from "react";
import facebook from "../../src/Assets/facebook.png";
import twitter from "../../src/Assets/twitter.png";
import youtube from "../../src/Assets/youtube.png";
import instagram from "../../src/Assets/instagram.png";
import linkedin from "../../src/Assets/linkedin.png";
import "../Components/style/Footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="social-media-icon">
                <a href="https://www.facebook.com/geuofficial/">
                  <img src={facebook} alt="" />
                </a>
                <a href="https://www.instagram.com/geuofficial/">
                  <img src={instagram} alt="" />
                </a>
                <a href="https://www.linkedin.com/school/graphic-era-official/">
                  <img src={linkedin} alt="" />
                </a>
                <a href="https://www.youtube.com/GraphicEraOfficial">
                  <img src={youtube} alt="" />
                </a>
                <a href="https://twitter.com/GEU_Official">
                  <img src={twitter} alt="" />
                </a>
              </div>
              <div className="footer-text-box">
                <p>
                  Rules /Careers /Sitemap/ Disclaimer /Privacy/ Policy/ Email
                  /Terms & Conditions /Refund Policy GEU Journal/ IT Policy
                  Library
                </p>
                <p>Graphic Era Global School © 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
