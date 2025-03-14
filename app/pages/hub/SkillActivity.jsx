import React from "react";

const SkillActivity = () => {
  const topics = [
    { title: "Understanding Your Skills", description: "Recognize your core competencies and strengths." },
    { title: "Analyzing Transferable Skills", description: "Identify skills that can be applied across industries." },
    { title: "Developing Soft Skills", description: "Enhance communication, teamwork, and leadership abilities." },
    { title: "Improving Technical Skills", description: "Stay ahead by upgrading your industry-specific skills." },
    { title: "Identifying In-Demand Skills", description: "Discover skills employers are actively seeking." },
    { title: "Skill Gap Analysis", description: "Assess where you need to improve to stay competitive." },
    { title: "Showcasing Skills in Resume", description: "Learn how to present your skills effectively." },
    { title: "Building a Skill Development Plan", description: "Create a roadmap for continuous learning and growth." }
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

export default SkillActivity;
