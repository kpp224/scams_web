import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import Profile from './Pages/profile/Profile';
import PopularPosts from './Pages/PopularPosts/PopularPosts';
import Messages from './Pages/Messages/Messages';
import CreatePost from './Pages/CreatPost/CreatePost';
import Bookmark from './Pages/Bookmark/Bookmark';
import Logout from './Pages/Logout/Logout';

const App = () => {
  return (
    <div className='flex'>
      <div className='w-[15%] bg-gray-100 h-screen'>
        <Sidebar />
      </div>
      <div className='w-[85%] bg-gray-100 h-screen'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/popular" element={<PopularPosts />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  )
}

export default App