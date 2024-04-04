import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import PricingCards from "../components/PricingCards";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading='PRICING' text='Choose Your Trip'/>
      {/* PricingCards component will add here */}
      <PricingCards/>
      <Footer />
    </div>
  );
};

export default Pricing;
