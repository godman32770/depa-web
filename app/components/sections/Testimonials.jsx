import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="">
      <h3 className="text-3xl font-semibold text-center">Review</h3>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="testimonial-box text-center">
          <h4 className="mt-2 font-bold">Ukrit Ngamjing</h4>
          <p className="text-gray-700">"This AI coach helped me land my dream job!"</p>
        </div>
        <div className="testimonial-box text-center">
          <h4 className="mt-2 font-bold ">Thiramet Poothong</h4>
          <p className="text-gray-700">"Incredible insights and resume feedback!"</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
