import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="text-center py-16 bg-gray-100">
      <h3 className="text-3xl font-semibold">Activity in this module</h3>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h4 className="mt-2 font-bold"> Skill Inventory</h4>
          <p className="text-gray-700">"This AI coach helped me land my dream job!"</p>
          
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h4 className="mt-2 font-bold"> Goal Workshop</h4>
          <p className="text-gray-700">"Incredible insights and resume feedback!"</p>
          
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
