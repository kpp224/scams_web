import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';

const App = () => {
  return (
    <div className='flex'>
      <div className='w-[15%] bg-gray-100 h-screen'>
        <Sidebar />
      </div>
      <div className='w-[85%] bg-gray-100 h-screen'>
        <Home />
      </div>
    </div>
  )
}

export default App