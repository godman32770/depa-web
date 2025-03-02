import React from "react";
import jpg1 from "/pic/job.jpg";
import jpg2 from "/pic/resume.jpg";
import jpg3 from "/pic/skills.jpg";
const modules = [
  {
    title: "Effective Job Search",
    description:
      "Ready to explore the world of work? This module teaches you the secrets to finding jobs that match your passions and strengths. Get step-by-step strategies to decode job postings, write standout applications, and build networking skills that connect you with people who can guide your career. Perfect for high school students starting to think about life after graduation—discover how to land a role that excites you!",
    image: jpg1,
    category: "Module ",
    duration: "80-145 min",
  },
  {
    title: "Resume Feedback",
    description:
      "Your resume is your ticket to opportunity! This module uses AI-powered tips to help you create a resume that shines, even if you’re just starting out. Learn how to showcase your school projects, extracurriculars, and part-time jobs in a way that grabs attention. Tailor it to your dream career path and get ready to impress colleges, internships, or future employers—perfect for high schoolers taking their first steps.",
    image: jpg2,
    category: "Module ",
    duration: "60-120 min",
  },
  {
    title: "Skill Recommendations",
    description:
      "Wondering what skills will set you up for success? This module helps you figure out what you’re already good at and what you can learn to stand out in your future career. Explore in-demand skills for industries like tech, healthcare, or the arts, and build a custom plan to grow your talents. Ideal for high school students eager to get a head start on their dream job!" ,
    image: jpg3,
    category: "Module ",
    duration: "45-90 min",
  },
];

const RecommendedModules = () => {
  return (
    <section className="py-16 px-8">
      <h3 className="text-3xl font-semibold text-center mb-8">Recommended Modules</h3>
      <div className="space-y-8"> {/* Ensures vertical spacing between cards */}
        {modules.map((module, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 flex flex-col w-full max-w-2xl mx-auto p-6 "
          >
            {/* Image Section */}
            <div className="w-full h-48 flex items-center justify-center bg-gray-100 rounded-md">
              <img
                src={module.image}
                alt={module.title}
                className="h-70 object-contain " 
              />
            </div>

            {/* Content Section */}
            <div className="p-6 flex-1 flex flex-col">
              {/* Category and Duration */}
              <div className="flex justify-between items-center text-sm text-gray-500 mt-4 ">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs ">
                  {module.category}
                </span>
                <span className="text-gray-600 font-semibold">{module.duration}</span>
              </div>

              {/* Title */}
              <h4 className="text-xl font-bold text-gray-900 mt-3">{module.title}</h4>

              {/* Description */}
              <p className="text-gray-700 mt-3">{module.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedModules;
