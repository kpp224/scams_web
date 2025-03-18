import React, { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { FaUser, FaLock, FaCog, FaQuestionCircle, FaTrashAlt, FaArrowRight, FaChartLine } from 'react-icons/fa';

const Profile = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <div className='bg-gray-100 w-full h-full flex items-center justify-center'>
      <div className="w-[95%] h-[95%] rounded-2xl bg-[#ffffff] flex items-center justify-start">
        <div className='border-r-2 border-gray-100 pl-3 pt-5 w-[20%] h-[92%] flex flex-col items-start justify-start '>
          <Link
            to="/profile"
            onClick={() => setActiveLink('/profile')}
            className={`mb-4 w-[190px] p-2 rounded-md transition-all duration-500 flex items-center space-x-2 relative ${
              activeLink === '/profile' ? 'bg-[#007BFF] text-white border-l-4 border-blue-500 shadow-md' : 'hover:bg-gray-200 hover:text-black'
            }`}
          >
            <FaUser size="20" className="ml-2" />
            <span>Profile</span>
            {activeLink === '/profile' && (
              <FaArrowRight size="14" className="text-white absolute right-[5px] transition-transform duration-300 scale-125 hidden md:inline" />
            )}
          </Link>
          <Link
            to="/profile/settings"
            onClick={() => setActiveLink('/profile/settings')}
            className={`mb-4 w-[190px] p-2 rounded-md transition-all duration-500 flex items-center space-x-2 relative ${
              activeLink === '/profile/settings' ? 'bg-[#007BFF] text-white border-l-4 border-blue-500 shadow-md' : 'hover:bg-gray-200 hover:text-black'
            }`}
          >
            <FaCog size="20" className="ml-2" />
            <span>Settings</span>
            {activeLink === '/profile/settings' && (
              <FaArrowRight size="14" className="text-white absolute right-[5px] transition-transform duration-300 scale-125 hidden md:inline" />
            )}
          </Link>
          <Link
            to="/profile/security"
            onClick={() => setActiveLink('/profile/security')}
            className={`mb-4 w-[190px] p-2 rounded-md transition-all duration-500 flex items-center space-x-2 relative ${
              activeLink === '/profile/security' ? 'bg-[#007BFF] text-white border-l-4 border-blue-500 shadow-md' : 'hover:bg-gray-200 hover:text-black'
            }`}
          >
            <FaLock size="20" className="ml-2" />
            <span>Safety</span>
            {activeLink === '/profile/security' && (
              <FaArrowRight size="14" className="text-white absolute right-[5px] transition-transform duration-300 scale-125 hidden md:inline" />
            )}
          </Link>
          <Link
            to="/profile/activity"
            onClick={() => setActiveLink('/profile/activity')}
            className={`mb-4 w-[190px] p-2 rounded-md transition-all duration-500 flex items-center space-x-2 relative ${
              activeLink === '/profile/activity' ? 'bg-[#007BFF] text-white border-l-4 border-blue-500 shadow-md' : 'hover:bg-gray-200 hover:text-black'
            }`}
          >
            <FaChartLine size="20" className="ml-2" />
            <span>Activity</span>
            {activeLink === '/profile/activity' && (
              <FaArrowRight size="14" className="text-white absolute right-[5px] transition-transform duration-300 scale-125 hidden md:inline" />
            )}
          </Link>
          <Link
            to="/profile/help"
            onClick={() => setActiveLink('/profile/help')}
            className={`mb-4 w-[190px] p-2 rounded-md transition-all duration-500 flex items-center space-x-2 relative ${
              activeLink === '/profile/help' ? 'bg-[#007BFF] text-white border-l-4 border-blue-500 shadow-md' : 'hover:bg-gray-200 hover:text-black'
            }`}
          >
            <FaQuestionCircle size="20" className="ml-2" />
            <span>Help</span>
            {activeLink === '/profile/help' && (
              <FaArrowRight size="14" className="text-white absolute right-[5px] transition-transform duration-300 scale-125 hidden md:inline" />
            )}
          </Link>
          <Link
            to="/profile/delete"
            onClick={() => setActiveLink('/profile/delete')}
            className={`mt-auto w-[190px] p-2 rounded-md transition-all duration-500 flex items-center space-x-2 relative ${
              activeLink === '/profile/delete' ? 'bg-[#ff0000] text-white border-l-4 border-red-500 shadow-md' : 'hover:bg-gray-200 hover:text-black'
            }`}
          >
            <FaTrashAlt size="20" className="ml-2" />
            <span>Delete Account</span>
            {activeLink === '/profile/delete' && (
              <FaArrowRight size="14" className="text-white absolute right-[5px] transition-transform duration-300 scale-125 hidden md:inline" />
            )}
          </Link>
        </div>
        <div className='w-[80%] h-[92%] flex items-center justify-center'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;