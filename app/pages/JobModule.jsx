import React from "react";
import ModuleCard from "../components/sections/ModuleCard";
import JobActivity from "./hub/JobActivity"; // Import Job Activity

const JobModule = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <ModuleCard
        title="Job Search Assistance"
        description="Finding the right job can be tough, but this module simplifies the process. Get AI-powered job recommendations, resume screening insights, and personalized tips to stand out in your industry."
        image={"https://static.vecteezy.com/system/resources/thumbnails/002/302/910/small_2x/people-enjoy-online-learning-courses-to-add-new-skills-illustration-suitable-for-landing-page-ui-website-mobile-app-editorial-poster-flyer-article-and-banner-vector.jpg"}
        category="Module"
        duration="30-60 min"
      />

      {/* Add Job Activity Below */}
      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-6">Module Activity</h2>
        <JobActivity />
      </section>
    </div>
  );
};

export default JobModule;
