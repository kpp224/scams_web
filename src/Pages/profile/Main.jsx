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
        {/* Sidebar Navigation */}
        <div className='border-r-2 border-gray-100 pl-3 pt-5 w-[20%] h-[92%] flex flex-col items-start justify-start '>
          <Link
            to="/main/profile"
            onClick={() => setActiveLink('/main/profile')}
            className={`mb-4 w-[190px] p-2 rounded-md transition-all duration-500 flex items-center space-x-2 relative ${
              activeLink === '/main/profile' ? 'bg-[#007BFF] text-white border-l-4 border-blue-500 shadow-md' : 'hover:bg-gray-200 hover:text-black'
            }`}
          >
            <FaUser size="20" className="ml-2" />
            <span>Profile</span>
            {activeLink === '/main/profile' && (
              <FaArrowRight size="14" className="text-white absolute right-[5px] transition-transform duration-300 scale-125 hidden md:inline" />
            )}
          </Link>
          <Link
            to="/main/settings"
            onClick={() => setActiveLink('/main/settings')}
            className={`mb-4 w-[190px] p-2 rounded-md transition-all duration-500 flex items-center space-x-2 relative ${
              activeLink === '/main/settings' ? 'bg-[#007BFF] text-white border-l-4 border-blue-500 shadow-md' : 'hover:bg-gray-200 hover:text-black'
            }`}
          >
            <FaCog size="20" className="ml-2" />
            <span>Settings</span>
            {activeLink === '/main/settings' && (
              <FaArrowRight size="14" className="text-white absolute right-[5px] transition-transform duration-300 scale-125 hidden md:inline" />
            )}
          </Link>
          <Link
            to="/main/security"
            onClick={() => setActiveLink('/main/security')}
            className={`mb-4 w-[190px] p-2 rounded-md transition-all duration-500 flex items-center space-x-2 relative ${
              activeLink === '/main/security' ? 'bg-[#007BFF] text-white border-l-4 border-blue-500 shadow-md' : 'hover:bg-gray-200 hover:text-black'
            }`}
          >
            <FaLock size="20" className="ml-2" />
            <span>Safety</span>
            {activeLink === '/main/security' && (
              <FaArrowRight size="14" className="text-white absolute right-[5px] transition-transform duration-300 scale-125 hidden md:inline" />
            )}
          </Link>
          <Link
            to="/main/activity"
            onClick={() => setActiveLink('/main/activity')}
            className={`mb-4 w-[190px] p-2 rounded-md transition-all duration-500 flex items-center space-x-2 relative ${
              activeLink === '/main/activity' ? 'bg-[#007BFF] text-white border-l-4 border-blue-500 shadow-md' : 'hover:bg-gray-200 hover:text-black'
            }`}
          >
            <FaChartLine size="20" className="ml-2" />
            <span>Activity</span>
            {activeLink === '/main/activity' && (
              <FaArrowRight size="14" className="text-white absolute right-[5px] transition-transform duration-300 scale-125 hidden md:inline" />
            )}
          </Link>
          <Link
            to="/main/help"
            onClick={() => setActiveLink('/main/help')}
            className={`mb-4 w-[190px] p-2 rounded-md transition-all duration-500 flex items-center space-x-2 relative ${
              activeLink === '/main/help' ? 'bg-[#007BFF] text-white border-l-4 border-blue-500 shadow-md' : 'hover:bg-gray-200 hover:text-black'
            }`}
          >
            <FaQuestionCircle size="20" className="ml-2" />
            <span>Help</span>
            {activeLink === '/main/help' && (
              <FaArrowRight size="14" className="text-white absolute right-[5px] transition-transform duration-300 scale-125 hidden md:inline" />
            )}
          </Link>
          <Link
            to="/main/delete"
            onClick={() => setActiveLink('/main/delete')}
            className={`mt-auto w-[190px] p-2 rounded-md transition-all duration-500 flex items-center space-x-2 relative ${
              activeLink === '/main/delete' ? 'bg-[#ff0000] text-white border-l-4 border-red-500 shadow-md' : 'hover:bg-gray-200 hover:text-black'
            }`}
          >
            <FaTrashAlt size="20" className="ml-2" />
            <span>Delete Account</span>
            {activeLink === '/main/delete' && (
              <FaArrowRight size="14" className="text-white absolute right-[5px] transition-transform duration-300 scale-125 hidden md:inline" />
            )}
          </Link>
        </div>

        {/* Main Content Area */}
        <div className='w-[80%] h-[92%] flex items-center justify-center'>

          <div className="w-[90%] h-[90%] bg-white p-6 rounded-lg shadow-md overflow-y-auto">
            {/* Outlet for nested routes */}
            
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;