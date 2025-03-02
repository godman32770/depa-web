import React from "react";
import HeroSection from "../components/sections/HeroSection.jsx";
import Features from "../components/sections/Features.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";
import PendingActivities from "../components/sections/PendingActivities";
import RecommendedModules from "../components/sections/RecommendedModules";

const Home = () => {
  
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <header className="bg-white shadow-md py-6 px-8 flex justify-between items-center inline-block ">
        <h1 className="text-xl font-bold px-8 py-2 ">AI Career Coachs</h1>
        <nav>
          <ul className="flex space-x-6">

          </ul>
        </nav>
      </header>
      <HeroSection />
      <Features />
      <RecommendedModules />
      <Testimonials />
      <PendingActivities />
      
      {/* Hero Section */}
      

      {/* Call-to-Action */}
      <section className="text-center py-16 bg-blue-600 text-white">
        <h3 className="text-3xl font-semibold">Start Your Career Journey Today</h3>
        <a href="#" className="mt-6 inline-block bg-white text-blue-500 px-6 py-3 rounded-md font-semibold">Join Now</a>
      </section>
    </div>
  );
};

export default Home;