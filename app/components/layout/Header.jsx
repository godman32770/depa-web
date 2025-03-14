import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-6 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">AI Career Coachs</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#features" className="hover:text-blue-600">Features</a></li>
          <li><a href="#testimonials" className="hover:text-blue-600">Testimonials</a></li>
          <li><a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md">Sign In</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;