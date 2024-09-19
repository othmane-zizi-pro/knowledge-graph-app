import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Knowledge Graphy</div>
        <ul className="flex flex-row space-x-6 list-none m-0 p-0"> {/* Ensure it's a horizontal row */}
          <li className="inline-block">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li className="inline-block">
            <a href="#" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li className="inline-block">
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
