import React from "react";
import Cardcarousel from "./Cardcarousel";
import Contact from "./Contact";
import Facilitiescarousel from "./Facilitiescarousel";
import Facultycarousel from "./Facultycarousel";
import Mainslider from "./Mainslider";
import Visionmission from "./Visionmission";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <>
      <Mainslider />
      <Welcome />
      <Visionmission />
      <Cardcarousel />
      <Facultycarousel />
      <Contact />
      <Facilitiescarousel />
    </>
  );
};
export default Home;
