import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1'>
        <Home />  
      </div>
    </div>
  )
}

export default App