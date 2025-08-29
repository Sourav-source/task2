import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Challenges from "../components/Challenges";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import SolutionsTabs from "../components/SolutionsTabs";
import SupportedCRM from "../components/SupportedCRM";
import RevenueEngine from "../components/RevenueEngine";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Challenges />
      <HowItWorks />
      <Testimonials />
      <SolutionsTabs />
      <SupportedCRM />
      <RevenueEngine />
      <Footer />
    </div>
  );
};

export default LandingPage;