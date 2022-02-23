import React from "react";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Topnavbar from "./Components/Topnavbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Faculty from "./Components/Faculty";
import Facilities from "./Components/Facilities";
import Contact from "./Components/Contact";
import Admission from "./Components/Admission";

const App = () => {
  return (
    <>
      <Topnavbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/faculty" element={<Faculty />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/facilities" element={<Facilities />} />
        <Route exact path="/admission" element={<Admission />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
