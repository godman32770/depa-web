import React from "react";
import ModuleCard from "../components/sections/ModuleCard";
import SkillActivity from "./hub/SkillActivity"; // Import Skill Activity
url = "https://media.istockphoto.com/id/1470714068/vector/soft-skills-or-personal-attribute-to-be-success-confident-businessman-with-elements-of-soft.jpg?s=612x612&w=0&k=20&c=CQc0A0zQpCIjuX2_nTWKvffJqEtc08KBTFH6aQ8JidI="


const SkillRecommend = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <ModuleCard
        title="Skill Recommendations"
        description="Wondering what skills will set you up for success? This module helps you figure out what you’re already good at and what you can learn to stand out in your future career. Explore in-demand skills for industries like tech, healthcare, or the arts."
        image={url}
        category="Module"
        duration="45-90 min"
      />

      {/* Add Skill Activity Below */}
      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-6">Module Activity</h2>
        <SkillActivity />
      </section>
    </div>
  );
};

export default SkillRecommend;
