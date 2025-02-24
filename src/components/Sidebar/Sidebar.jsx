import React, { useState } from 'react';
import { FaHome, FaEnvelope, FaFire, FaPlus, FaUser, FaSignOutAlt, FaArrowRight } from 'react-icons/fa';
import TRCELogo from '../../assests/TRCELogo.png';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation(); // Get current route
  const [activeLink, setActiveLink] = useState(location.pathname); // Track active link

  return (
    <div className='h-full w-64 bg-white text-black flex flex-col items-start p-4'>
      {/* Logo Section */}
      <div className="logo flex items-center my-4 ml-2">
        <img src={TRCELogo} alt="Logo" className="w-20 h-8" />
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col space-y-4 mt-6 flex-grow w-full">
        {/* Home */}
        <Link
          to="/home"
          onClick={() => setActiveLink('/home')}
          className={`sidebar-icon flex items-center space-x-2 p-2 rounded-md transition-all duration-500 w-full relative ${
            activeLink === '/home'
              ? 'bg-black text-white border-l-4 border-blue-500 shadow-md'
              : 'hover:bg-gray-200 hover:text-black'
          }`}
        >
          <FaHome size="20" className="ml-2" />
          <span className="flex-grow text-left">Home</span>
          {activeLink === '/home' && (
            <FaArrowRight
              size="14"
              className="text-white absolute right-[5px] transition-transform duration-300 scale-125"
            />
          )}
        </Link>

        {/* Profile */}
        <Link
          to="/profile"
          onClick={() => setActiveLink('/profile')}
          className={`sidebar-icon flex items-center space-x-2 p-2 rounded-md transition-all duration-500 w-full relative ${
            activeLink === '/profile'
              ? 'bg-black text-white border-l-4 border-blue-500 shadow-md'
              : 'hover:bg-gray-200 hover:text-black'
          }`}
        >
          <FaUser size="20" className="ml-2" />
          <span className="flex-grow text-left">Profile</span>
          {activeLink === '/profile' && (
            <FaArrowRight
              size="14"
              className="text-white absolute right-[5px] transition-transform duration-300 scale-125"
            />
          )}
        </Link>

        {/* Popular Posts */}
        <Link
          to="/popular"
          onClick={() => setActiveLink('/popular')}
          className={`sidebar-icon flex items-center space-x-2 p-2 rounded-md transition-all duration-500 w-full relative ${
            activeLink === '/popular'
              ? 'bg-black text-white border-l-4 border-blue-500 shadow-md'
              : 'hover:bg-gray-200 hover:text-black'
          }`}
        >
          <FaFire size="20" className="ml-2" />
          <span className="flex-grow text-left">Popular Posts</span>
          {activeLink === '/popular' && (
            <FaArrowRight
              size="14"
              className="text-white absolute right-[5px] transition-transform duration-300 scale-125"
            />
          )}
        </Link>

        {/* Messages */}
        <Link
          to="/messages"
          onClick={() => setActiveLink('/messages')}
          className={`sidebar-icon flex items-center space-x-2 p-2 rounded-md transition-all duration-500 w-full relative ${
            activeLink === '/messages'
              ? 'bg-black text-white border-l-4 border-blue-500 shadow-md'
              : 'hover:bg-gray-200 hover:text-black'
          }`}
        >
          <FaEnvelope size="20" className="ml-2" />
          <span className="flex-grow text-left">Messages</span>
          {activeLink === '/messages' && (
            <FaArrowRight
              size="14"
              className="text-white absolute right-[5px] transition-transform duration-300 scale-125"
            />
          )}
        </Link>

        {/* Create Post */}
        <Link
          to="/create-post"
          onClick={() => setActiveLink('/create-post')}
          className={`sidebar-icon flex items-center space-x-2 p-2 rounded-md transition-all duration-500 w-full relative ${
            activeLink === '/create-post'
              ? 'bg-black text-white border-l-4 border-blue-500 shadow-md'
              : 'hover:bg-gray-200 hover:text-black'
          }`}
        >
          <FaPlus size="20" className="ml-2" />
          <span className="flex-grow text-left">Create Post</span>
          {activeLink === '/create-post' && (
            <FaArrowRight
              size="14"
              className="text-white absolute right-[5px] transition-transform duration-300 scale-125"
            />
          )}
        </Link>

        {/* Bookmark */}
        <Link
          to="/bookmark"
          onClick={() => setActiveLink('/bookmark')}
          className={`sidebar-icon flex items-center space-x-2 p-2 rounded-md transition-all duration-500 w-full relative ${
            activeLink === '/bookmark'
              ? 'bg-black text-white border-l-4 border-blue-500 shadow-md'
              : 'hover:bg-gray-200 hover:text-black'
          }`}
        >
          <FaUser size="20" className="ml-2" />
          <span className="flex-grow text-left">Bookmark</span>
          {activeLink === '/bookmark' && (
            <FaArrowRight
              size="14"
              className="text-white absolute right-[5px] transition-transform duration-300 scale-125"
            />
          )}
        </Link>
      </div>

      {/* Logout Button */}
      <div className="mt-auto mb-4 w-full relative">
        <Link
          to="/logout"
          className="sidebar-icon flex items-center space-x-2 p-2 rounded-md hover:bg-red-600 hover:text-white transition duration-300 w-full"
        >
          <FaSignOutAlt size="20" className="ml-2" />
          <span className="flex-grow text-left">Logout</span>
          <FaArrowRight
            size="14"
            className="text-white absolute right-[5px] transition-transform duration-300 scale-125"
          />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;