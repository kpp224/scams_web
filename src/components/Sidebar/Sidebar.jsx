import React from 'react';
import { FaHome, FaEnvelope, FaBell, FaPlus, FaSignOutAlt } from 'react-icons/fa';
import logoimage from '../../assests/profile.jpg';

const Sidebar = () => {
  return (
   
    <div className="sidebar ml-2 mt-5 h-160 flex flex-col items-center text-white bg-[#131313] z-20  w-25 fixed rounded-2xl top-0 left-0 cursor-pointer">
          <div className='p-5'>
            <img src={logoimage} className='h-10 w-10 rounded-full' alt="" />
          </div>
          <div className='p-5 text-xl'>
            <FaHome/>
          </div>
          <div className='p-5 text-xl'>
            <FaEnvelope/>
          </div>
          <div className='p-5 text-xl'>
            <FaBell/>
          </div>
          <div className='p-5 text-xl'>
            <FaPlus/>
          </div>
          <div className='p-10 mt-auto text-xl'>
            <FaSignOutAlt/>
          </div>
    </div>
  
  )
}

export default Sidebar