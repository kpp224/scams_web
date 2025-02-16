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
      className={`navbar px-10 my-2 w-full h-16 top-0 sticky z-10 flex justify-between items-center rounded-lg ${
        isDarkMode ? 'bg-[#131313] text-white' : 'bg-[#fffefe] text-black'
      }`}>
      <div
        className={`search_box flex items-center h-10 rounded-full ${
          isDarkMode ? 'bg-white' : 'bg-[#131313]'
        }`}>
        <input
          type="text"
          className={`border-none w-xs px-2 outline-none ${isDarkMode?'placeholder:text-black  text-black ':'placeholder:text-white text-white'} bg-transparent`}
          placeholder="Search..."
        />
        <FaSearch className={`mr-5 cursor-pointer ${isDarkMode?'text-black':'text-white'}`} />
      </div>


      <div className="flex items-center space-x-4">

        <div
          className={`flex items-center justify-center h-10 w-10 rounded-full ${
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