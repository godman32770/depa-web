"use client";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobActivity from "./hub/JobActivity.jsx";

import HeroSection from "../components/sections/HeroSection.jsx";
import Features from "../components/sections/Features.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";
import PendingActivities from "../components/sections/PendingActivities.jsx";
import RecommendedModules from "../components/sections/RecommendedModules.jsx";

import JobModule from "./JobModule.jsx";
import ResumeModule from "./ResumeModule.jsx";
import SkillRecommend from "./SkillRecommend.jsx";

import AgentLearningPath from "../chat/agent_learning_path/page.tsx";
const Home = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        {/* Navbar */}
        
        {/* <header className="bg-white shadow-md pb-4 py-4 px-8 fixed w-full top-0 z-10 flex justify-between">
          <div className="flex items-center gap-3">
            <img src={coachlabicon} alt="Coach Lab Icon" className="object-contain pl-20" />
            <h1 className="text-2xl font-bold text-blue-600">AI Career Coach</h1>
          </div>
          <nav>
            <ul className="flex space-x-6 text-lg font-medium">
              <li>
                <a href="#features" className="hover:text-blue-600 transition duration-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#modules" className="hover:text-blue-600 transition duration-300">
                  Modules
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-blue-600 transition duration-300">
                  Testimonials
                </a>
              </li>
            </ul>
          </nav>
        </header> */}
        
        {/* Define Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Hero Section */}
                <div className="pt-20">
                  <HeroSection />
                </div>

                {/* Features Section */}
                <section id="features" className="bg-white">
                  <Features />
                </section>

                {/* Recommended Modules */}
                <section id="modules" className="bg-gray-50">
                  <RecommendedModules />
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="py-16">
                  <Testimonials />
                </section>

                {/* Pending Activities */}
                <section className="py-20 bg-white">
                  <PendingActivities />
                </section>

                {/* Call-to-Action */}
                <section className="text-center py-20 bg-blue-600 text-white">
                  <h3 className="text-4xl font-semibold">Start Your Career Journey Today</h3>
                  <p className="mt-4 text-lg">Join now and take your first step towards a successful future!</p>
                  <a
                    href="#"
                    className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold shadow-md hover:bg-gray-200 transition duration-300"
                  >
                    Join Now
                  </a>
                </section>

                {/* Footer */}
                <footer className="py-6 bg-gray-900 text-white text-center">
                  <p>&copy; {new Date().getFullYear()} AI Career Coach. All rights reserved.</p>
                </footer>
              </>
            }
          />
          <Route path="/job-module" element={<JobModule />} />
          <Route path="/resume-module" element={<ResumeModule />} />
          <Route path="/skill-recommend" element={<SkillRecommend />} />
          <Route path="/job-activity" element={<JobActivity />} />
          <Route path="/chat/agent_learning_path" element={<AgentLearningPath />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Home;
