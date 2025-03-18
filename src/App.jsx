import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import Profile from './Pages/profile/Profile';
import PopularPosts from './Pages/PopularPosts/PopularPosts';
import Messages from './Pages/Messages/Messages';
import CreatePost from './Pages/CreatPost/CreatePost';
import Bookmark from './Pages/Bookmark/Bookmark';
import Login from './Pages/Login/Login';
import Security from './Pages/profile/Security';
import Settings from './Pages/profile/Settings';
import Help from './Pages/profile/Help';
import DeleteAccount from './Pages/profile/DeleteAccount';
import Acitivity from './Pages/profile/Acitivity';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className='flex'>
      {isAuthenticated && (
        <div className='w-[15%] h-screen'>
          <Sidebar setAuth={setIsAuthenticated} />
        </div>
      )}
      <div className={isAuthenticated ? 'w-[85%] h-screen' : 'w-full h-screen'}>
        <Routes>
          <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}>
            <Route path="security" element={<Security />} />
            <Route path="settings" element={<Settings />} />
            <Route path="help" element={<Help />} />
            <Route path="delete" element={<DeleteAccount />} />
            <Route path="activity" element={<Acitivity />} />
          </Route>
          <Route path="/popular" element={isAuthenticated ? <PopularPosts /> : <Navigate to="/login" />} />
          <Route path="/messages" element={isAuthenticated ? <Messages /> : <Navigate to="/login" />} />
          <Route path="/create-post" element={isAuthenticated ? <CreatePost /> : <Navigate to="/login" />} />
          <Route path="/bookmark" element={isAuthenticated ? <Bookmark /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;