import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImage from '../../assests/loginImage.jpeg';

const Login = ({ setAuth }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple authentication logic (replace with real authentication)
    if (username === 'user' && password === 'p') {
      setAuth(true);
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center h-screen">
      <div className='w-[60%]'>
        <img src={loginImage} className='h-screen w-full object-cover rounded-e-[7%]' alt="" />
      </div>
      <div className='flex justify-center items-center w-[40%]'>
        <form onSubmit={handleLogin}>
          <h1 className='mb-10 text-2xl'>Nice to see you again</h1>
          <div className="mb-4">
            <label htmlFor="username" className="block text-black text-xl">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-black text-xl">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />  
          </div>
          <button type="submit" className="w-full cursor-pointer bg-blue-500 text-white p-2 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;