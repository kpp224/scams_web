import React from 'react';
import { FaHome, FaEnvelope, FaFire, FaPlus, FaUser, FaSignOutAlt } from 'react-icons/fa';
import TRCELogo from '../../assests/TRCELogo.png';


const Sidebar = () => {
  return (
    <div className='h-full w-full flex flex-col items-center bg-white text-black'>
      <div className="logo flex items-center my-4">
        <img src={TRCELogo} alt="Logo" className="w-25 h-10 mr-12" />
      </div>
      <div className="flex flex-col space-y-7 mt-10 flex-grow">
        <a href="#" className="sidebar-icon flex items-center space-x-2">
          <FaHome size="24" />
          <span>Home</span>
        </a>
        <a href="#" className="sidebar-icon flex items-center space-x-2">
          <FaEnvelope size="24" />  
          <span>Message</span>
        </a>
        <a href="#" className="sidebar-icon flex items-center space-x-2">
          <FaFire size="24" />
          <span>Trending Post</span>
        </a>
        <a href="#" className="sidebar-icon flex items-center space-x-2">
          <FaUser size="24" />
          <span>Profile</span>
        </a>
        <a href="#" className="sidebar-icon flex items-center space-x-2">
          <FaPlus size="24" />
          <span>Create Post</span>
        </a>
      </div>
      <div className="mt-auto mr-10 mb-10">
        <a href="#" className="sidebar-icon flex items-center  space-x-2">
          <FaSignOutAlt size="24" />
          <span>Logout</span>
        </a>
      </div>
    </div>
  )
}

export default Sidebar;