// sections/Features.jsx
import React from "react";

const Features = () => {
  return (
    <section id="features" className="py-16 px-8 text-center ">
      <h3 className="text-3xl font-semibold">Features</h3>
      <div className="mt-8 grid grid-cols-1 md-grid-cols-3 gap-6">
        <div className="module-card p-6 bg-white shadow-md rounded-lg">
          <h4 className="font-bold">AI Chatbot</h4>
          <p className="mt-2 text-gray-700">Get career guidance from an intelligent assistant.</p>
        </div>
        <div className="module-card p-6 bg-white shadow-md rounded-lg">
          <h4 className="font-bold">Resume Feedback</h4>
          <p className="mt-2 text-gray-700">Receive AI-driven insights to improve your resume.</p>
        </div>
        <div className="module-card p-6 bg-white shadow-md rounded-lg">
          <h4 className="font-bold">Skill Recommendations</h4>
          <p className="mt-2 text-gray-700">Discover skills to enhance your job prospects.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
