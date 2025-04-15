import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import Main from './Pages/profile/Main';
import Profile from './Pages/profile/Profile';
import Security from './Pages/profile/Security';
import Settings from './Pages/profile/Settings';
import Help from './Pages/profile/Help';
import DeleteAccount from './Pages/profile/DeleteAccount';
import Activity from './Pages/profile/Acitivity';
import Login from './Pages/Login/Login';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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