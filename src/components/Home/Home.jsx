import React from "react";
import Header from "../shared/Header/Header";
import Hero from "../Herosection/Hero";
import Service from "../Services/Service";
import Clinic from "../Specialities/Clinic";
import InfoPage from "../infoSec/InfoPage";
import BookDoctor from "../Booking/BookDoctor";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";

function Home() {
  return (
    <div>
      <Hero />
      <InfoPage />
      <Service />
      <Clinic />
      <Gallery />
      {/* <BookDoctor /> */}
    </div>
  );
}

export default Home;
