import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import TrainingData from "../components/TrainingData";

export default function Training() {
  return (
    <div>
      <Navbar />
      <HeroImage heading= 'TRAINING' text='Pre-Flight & In-Flight Training.'/>
      {/* Training component will add here */}
      <TrainingData/>
      <Footer />
    </div>
  );
}
