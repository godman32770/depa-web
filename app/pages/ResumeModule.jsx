import React from "react";
import ModuleCard from "../components/sections/ModuleCard";
import ResumeActivity from "./hub/ResumeActivity"; // Import Testimonials
url = "https://static.vecteezy.com/system/resources/previews/003/528/134/non_2x/resume-concept-woman-makes-resume-illustration-flat-vector.jpg"


const ResumeModule = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <ModuleCard
        title="Resume Feedback"
        description="Your resume is your ticket to opportunity! This module uses AI-powered tips to help you create a resume that shines, even if you’re just starting out. Learn how to showcase your school projects, extracurriculars, and part-time jobs in a way that grabs attention."
        image={url}
        category="Module"
        duration="60-120 min"
      />

      {/* Add Testimonials Below */}
      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-6">Module Activity</h2>
        <ResumeActivity />
      </section>
    </div>
  );
};

export default ResumeModule;
