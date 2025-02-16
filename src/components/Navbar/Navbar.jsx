import React, { useState } from 'react';
import { FaSearch, FaBell, } from 'react-icons/fa';
import profileImage from '../../assests/profile.jpg';

const Navbar = () => {

  return (
    <div className='navbar h-13 w-100%  top-0 sticky z-10 flex justify-between items-center px-10'>
      <div className="nav_left ">
        <div className="search_box flex items-center h-10  mr-15 pr-5 pl-5 text-white bg-black rounded-full">
          <input type="text" className='border-none outline-0 text-white placeholder:text-white' placeholder='Search'/>
          <FaSearch className='cursor-pointer'/>
        </div>
      </div>

      <div className="middle_left">

      </div>

      <div className="middle_right"></div>

      <div className="nav_right flex items-center cursor-pointer">
        <div className="notification flex items-center h-10 w-10 bg-gray-100 rounded-full mr-5 justify-center">
          <FaBell />
        </div>
        <div className="profile_details flex items-center ">
          <div className='mr-3'>
            <h3 className='text-base'>Kush Patel</h3>
            <h4 className='text-xs'>@Kush224</h4>
          </div>
          <img src={profileImage} className='h-10 w-10 rounded-full' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar