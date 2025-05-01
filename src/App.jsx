import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import CreatePost from './Pages/CreatPost/CreatePost';
import Feed from './components/Feed/Feed';
import Login from './Pages/Login/Login';
import Main from './Pages/profile/Main'; // Import Main layout
import Profile from './Pages/profile/Profile'; // Import Profile page
import Settings from './Pages/profile/Settings'; // Import Settings page
import Security from './Pages/profile/Security'; // Import Security page
import Activity from './Pages/profile/Acitivity'; // Import Activity page
import Help from './Pages/profile/Help'; // Import Help page
import DeleteAccount from './Pages/profile/DeleteAccount'; // Import Delete Account page

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Define isAuthenticated state
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'Raaz',
      profilePhoto: 'https://i.pravatar.cc/150?img=3', // Valid placeholder URL
      time: '2 hours ago',
      content: 'As technology advances, so do cyber threats...',
      image: 'https://picsum.photos/600/400', // Valid placeholder URL
      likes: 12,
      comments: 8,
      shares: 7,
    },
    {
      id: 2,
      username: 'Test User',
      profilePhoto: 'https://i.pravatar.cc/150?img=5', // Valid placeholder URL
      time: '1 hour ago',
      content: 'This is a test post.',
      image: 'https://picsum.photos/600/400', // Valid placeholder URL
      likes: 5,
      comments: 2,
      shares: 1,
    },
  ]);

  // Function to add a new post
  const addPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <div className="flex">
      {isAuthenticated && (
        <div className="w-[15%] h-screen">
          <Sidebar setAuth={setIsAuthenticated} />
        </div>
      )}
      <div className={isAuthenticated ? 'w-[85%] h-screen' : 'w-full h-screen'}>
        <Routes>
          <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          <Route path="/create-post" element={isAuthenticated ? <CreatePost addPost={addPost} /> : <Navigate to="/login" />}
          />
         <Route path="/" element={isAuthenticated ? <Home posts={posts} /> : <Navigate to="/login" />}
         />
          <Route path="/main" element={isAuthenticated ? <Main /> : <Navigate to="/login" />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="security" element={<Security />} />
            <Route path="activity" element={<Activity />} />
            <Route path="help" element={<Help />} />
            <Route path="delete" element={<DeleteAccount />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;