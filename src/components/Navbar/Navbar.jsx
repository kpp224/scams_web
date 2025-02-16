import React, { useState } from 'react';
import { FaSearch, FaBell, FaSun, FaMoon } from 'react-icons/fa'; 
import profileImage from '../../assests/profile.jpg';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark', !isDarkMode); 
  };
  return (
    <div
      className={`navbar w-full h-16 top-0 sticky z-10 flex justify-between items-center px-4 sm:px-8 lg:px-16 ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
      }`}
    >
      <div
        className={`search_box hidden sm:flex items-center h-10 px-4 rounded-full ${
          isDarkMode ? 'bg-black' : 'bg-gray-200'
        }`}
      >
        <input
          type="text"
          className="border-none outline-none placeholder:text-gray-400 bg-transparent"
          placeholder="Search..."
        />
        <FaSearch className="ml-2 cursor-pointer" />
      </div>


      <div className="flex items-center space-x-4">

        <div
          className={`notification flex items-center justify-center h-10 w-10 rounded-full ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
          }`}
        >
          <FaBell />
        </div>
        <div className="hidden sm:flex items-center space-x-2">
          <img
            src={profileImage}
            className="h-10 w-10 rounded-full object-cover"
            alt="Profile"
          />
        </div>
        <div
          className={`theme-toggle p-2 rounded-full cursor-pointer ${
            isDarkMode ? 'bg-yellow-500' : 'bg-gray-300'
          }`}
          onClick={toggleTheme}
        >
          {isDarkMode ? <FaSun className="text-white" /> : <FaMoon />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;