import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImage from '../../assests/loginImage.jpeg';

const Login = ({ setAuth }) => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();

const handleLogin = (e) => {
e.preventDefault();
if (username === 'user' && password === 'p') {
setAuth(true);
localStorage.setItem('isAuthenticated', 'true');
navigate('/');
} else {
alert('Invalid credentials');
}
};

return (
<div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50">
{/* Left Side - Image (Hidden on small screens) */}
<div className="w-full md:w-[60%] lg:w-[70%] hidden md:block">
<img
src={loginImage}
className="h-screen w-full object-cover"
alt="Login Visual"
/>
</div>

{/* Right Side - Login Form */}
<div className="w-full md:w-[40%] lg:w-[30%] flex justify-center items-center p-6 relative">
{/* Background Image for Mobile */}
<div className="absolute inset-0 bg-cover bg-center z-0 md:hidden" style={{ backgroundImage: `url(${loginImage})` }}></div>
<form
onSubmit={handleLogin}
className="w-full max-w-md p-8 rounded-2xl z-10
bg-transparent md:bg-white md:bg-opacity-100
backdrop-blur-lg border border-white border-opacity-20
shadow-lg md:shadow-none"
>
<h1 className="mb-8 text-3xl font-bold text-center text-white md:text-gray-800">
Welcome Back
</h1>

{/* Username Field */}
<div className="mb-6">
<label htmlFor="username" className="block text-white text-lg font-medium mb-2 md:text-gray-700">
Username
</label>
<input
type="text"
id="username"
value={username}
onChange={(e) => setUsername(e.target.value)}
className="w-full p-3 border border-white border-opacity-30 rounded-lg
focus:outline-none focus:ring-2 focus:ring-blue-500
bg-white bg-opacity-20 placeholder-white placeholder-opacity-70 md:bg-white md:bg-opacity-100 md:placeholder-gray-500"
placeholder="Enter your username"
/>
</div>

{/* Password Field */}
<div className="mb-6">
<label htmlFor="password" className="block text-white text-lg font-medium mb-2 md:text-gray-700">
Password
</label>
<input
type="password"
id="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
className="w-full p-3 border border-white border-opacity-30 rounded-lg
focus:outline-none focus:ring-2 focus:ring-blue-500
bg-white bg-opacity-20 placeholder-white placeholder-opacity-70 md:bg-white md:bg-opacity-100 md:placeholder-gray-500"
placeholder="Enter your password"
/>
<a href="#" className="text-sm text-white hover:text-blue-300 mt-2 block md:text-blue-500">
Forgot Password?
</a>
</div>

{/* Login Button */}
<button
type="submit"
className="w-full bg-blue-600 text-white p-3 rounded-lg
hover:bg-blue-700 focus:outline-none focus:ring-2
focus:ring-blue-500 focus:ring-offset-2 mb-4"
>
Login
</button>

{/* Divider */}
<div className="text-center my-6">
<span className="text-white text-opacity-70 md:text-gray-600">Or login with</span>
</div>

{/* Google Login Button */}
<div className="flex justify-center">
<button
type="button"
className="flex items-center justify-center w-full p-3
border border-white border-opacity-30 rounded-lg
hover:bg-white hover:bg-opacity-10 focus:outline-none
focus:ring-2 focus:ring-blue-500"
>
<img
src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
alt="Google"
className="w-6 h-6"
/>
<span className="ml-2 text-white md:text-gray-700">Google</span>
</button>
</div>
</form>
</div>
</div>
);
};

export default Login;