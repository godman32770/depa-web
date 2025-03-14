import React from "react";

const ModuleCard = ({ title, description, image, category, duration }) => {
  return (
    <div className="module-card">

      {/* Image Section */}
      <div className="w-full h-48 flex items-center justify-center bg-gray-100 rounded-md border-b-2 border-blue-300">
        <img src={image} alt={title} className="h-full object-contain" />
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Category and Duration */}
        <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">
            {category}
          </span>
          <span className="text-gray-600 font-semibold">{duration}</span>
        </div>

        {/* Title */}
        <h4 className="text-xl font-bold text-gray-900 mt-3">{title}</h4>

        {/* Description */}
        <p className="text-gray-700 mt-3">{description}</p>
      </div>
    </div>
  );
};

export default ModuleCard;
