import React from "react";
import { useNavigate } from "react-router-dom";
import JobSearchModule from "./JobSearchModule";
import ResumeFeedbackModule from "./ResumeFeedbackModule";
import SkillRecommendationsModule from "./SkillRecommendationsModule";

const RecommendedModules = () => {
  const navigate = useNavigate();

  return (
    <section id="modules" className="py-16 px-8">
      <h3 className="pb-8 text-3xl font-semibold text-center mb-8">Recommended Modules</h3>
      <div className="space-y-8">
        <div onClick={() => navigate("/job-module")} className="cursor-pointer">
          <JobSearchModule />
        </div>
        <div onClick={() => navigate("/resume-module")} className="cursor-pointer">
          <ResumeFeedbackModule />
        </div>
        <div onClick={() => navigate("/skill-recommend")} className="cursor-pointer">
          <SkillRecommendationsModule />
        </div>
      </div>
    </section>
  );
};

export default RecommendedModules;
