import React from 'react';
import { FaHome, FaEnvelope, FaBell, FaPlus, FaSignOutAlt, FaBookmark, FaFire, FaEdit } from 'react-icons/fa';
import logoimage from '../../assests/vite.svg';

const Sidebar = () => {
  return (
    <div className="sidebar h-[80vh] w-18 flex flex-col items-center text-white bg-[#131313] z-20 fixed top-[5vh] left-3 rounded-2xl cursor-pointer">
      <div className='p-5 mt-5'>
        <img src={logoimage} className='h-10 w-10 rounded-full' alt="" />
      </div>
      <div className='p-5 text-xl'>
        <FaHome/>
      </div>
      <div className='p-5 text-xl'>
        <FaFire/>
      </div>
      <div className='p-5 text-xl'>
        <FaEnvelope/>
      </div>
      <div className='p-5 text-xl'>
        <FaBookmark/>
      </div>
      <div className='p-5 text-xl'>
        <FaEdit/>
      </div>
      <div className='p-10 mt-auto text-xl'>
        <FaSignOutAlt/>
      </div>
    </div>
  )
}

export default Sidebar;