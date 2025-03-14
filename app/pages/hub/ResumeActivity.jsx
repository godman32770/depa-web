import React from "react";

const ResumeActivity = () => {
  const topics = [
    { title: "Understanding Your Resume", description: "Gain insights into the key elements of a strong resume." },
    { title: "Analyzing Your Resume", description: "Identify strengths and weaknesses in your resume." },
    { title: "Improving Resume Formatting", description: "Ensure your resume is visually appealing and easy to read." },
    { title: "Optimizing Keywords in Resume", description: "Learn how to use keywords effectively to pass ATS scans." },
    { title: "Tailoring Resume for Job Applications", description: "Customize your resume to fit specific job roles." },
    { title: "Common Resume Mistakes", description: "Avoid pitfalls that could cost you an interview opportunity." },
    { title: "Enhancing Resume Readability", description: "Make your resume more engaging for recruiters." },
    { title: "Creating an Impactful Resume Summary", description: "Craft a compelling summary that highlights your strengths." }
  ];

  return (
    <section id="testimonials" className=" py-16 bg-gray-100">
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {topics.map((topic, i) => (
          <div key={i} className="testimonial-box text-center">
            <h4 className="mt-2 font-bold">{topic.title}</h4>
            <p className="text-gray-700">"{topic.description}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResumeActivity;