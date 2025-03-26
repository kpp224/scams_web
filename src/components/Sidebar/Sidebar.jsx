import React, { useState, useEffect } from 'react';
import { FaHome, FaEnvelope, FaFire, FaPlus, FaUser, FaSignOutAlt, FaArrowRight } from 'react-icons/fa';
import TRCELogo from '../../assests/TRCELogo.png';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = ({ setAuth }) => {
  const [activeLink, setActiveLink] = useState('/');
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    setAuth(false);
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  }

  return (
    <div className='h-full w-auto text-black flex flex-col items-start p-4'>
      {/* Logo Section */}
      <div className="logo flex items-center my-4 ml-3 cursor-pointer">
        <Link to='/'>
          <img src={TRCELogo} alt="Logo" className="w-20 h-8" />
        </Link> 
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col space-y-4 mt-6 flex-grow w-full">
        {/* Home */}
        <Link
          to="/"
          onClick={() => setActiveLink('/')}
          className={`sidebar-icon flex items-center space-x-2 p-2 rounded-md transition-all duration-500 w-full relative ${
            activeLink === '/'
              ? 'bg-black text-white border-l-4 border-blue-500 shadow-md'
              : 'hover:bg-gray-200 hover:text-black'
          }`}
        >
          <FaHome size="20" className="ml-2" />
          <span className="flex-grow text-left hidden lg:inline">Home</span>
          {activeLink === '/' && (
            <FaArrowRight
              size="14"
              className="text-white absolute right-[5px] transition-transform duration-300 scale-125 hidden md:inline"
            />
          )}
        </Link>

        {/* Profile */}
        <Link
          to="/main"
          onClick={() => setActiveLink('/main')}
          className={`sidebar-icon flex items-center space-x-2 p-2 rounded-md transition-all duration-500 w-full relative ${
            activeLink === '/main'
              ? 'bg-black text-white border-l-4 border-blue-500 shadow-md'
              : 'hover:bg-gray-200 hover:text-black'
          }`}
        >
          <FaUser size="20" className="ml-2" />
          <span className="flex-grow text-left hidden lg:inline">Profile</span>
          {activeLink === '/main' && (
            <FaArrowRight
              size="14"
              className="text-white absolute right-[5px] transition-transform duration-300 scale-125 hidden md:inline"
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
          <span className="flex-grow text-left hidden lg:inline">Popular Posts</span>
          {activeLink === '/popular' && (
            <FaArrowRight
              size="14"
              className="text-white absolute right-[5px] transition-transform duration-300 scale-125 hidden md:inline"
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
          <span className="flex-grow text-left hidden lg:inline">Messages</span>
          {activeLink === '/messages' && (
            <FaArrowRight
              size="14"
              className="text-white absolute right-[5px] transition-transform duration-300 scale-125 hidden md:inline"
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
          <span className="flex-grow text-left hidden lg:inline">Create Post</span>
          {activeLink === '/create-post' && (
            <FaArrowRight
              size="14"
              className="text-white absolute right-[5px] transition-transform duration-300 scale-125 hidden md:inline"
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
          <span className="flex-grow text-left hidden lg:inline">Bookmark</span>
          {activeLink === '/bookmark' && (
            <FaArrowRight
              size="14"
              className="text-white absolute right-[5px] transition-transform duration-300 scale-125 hidden md:inline"
            />
          )}
        </Link>
      </div>

      {/* Logout Button */}
      <div className="mt-auto mb-4 w-full relative ">
        <button
          onClick={handleLogout}
          className={`sidebar-icon flex items-center space-x-2 p-2 rounded-md hover:bg-red-600 hover:text-white transition cursor-pointer duration-300 w-full ${
            activeLink === '/logout'
              ? 'bg-black text-white border-l-4 border-blue-500 shadow-md'
              : 'hover:bg-gray-200 hover:text-black'
          }`}
        >
          <FaSignOutAlt size="20" className="ml-2" />
          <span className="flex-grow text-left hidden lg:inline">Logout</span>
          <FaArrowRight
            size="14"
            className="text-white absolute right-[5px] transition-transform duration-300 scale-125 hidden md:inline"
          />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;