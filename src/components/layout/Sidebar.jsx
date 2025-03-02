// src/components/layout/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom"; // If you are using React Router for navigation

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">AI Career Coachs</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/" className="hover:text-blue-500">Home</Link>
        </li>
        <li>
          <Link to="#features" className="hover:text-blue-500">Features</Link>
        </li>
        <li>
          <Link to="#testimonials" className="hover:text-blue-500">Testimonials</Link>
        </li>
        <li>
          <Link to="#" className="bg-blue-600 text-white px-4 py-2 rounded-md">Sign In</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
