import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import loginImage from "../../assests/loginImage.jpeg";

// Animated Tagline Component
const tagline = "Helping You Stay Secure Online";

const AnimatedTagline = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isErasing, setIsErasing] = useState(false);
  const [index, setIndex] = useState(0);

  // Animation logic
  useEffect(() => {
    const typingSpeed = isErasing ? 40 : Math.random() * (150 - 80) + 80;

    const timeout = setTimeout(() => {
      if (!isErasing) {
        if (index < tagline.length) {
          setDisplayedText(tagline.substring(0, index + 1));
          setIndex(index + 1);
        } else {
          setTimeout(() => setIsErasing(true), 1500);
        }
      } else {
        if (index > 0) {
          setDisplayedText(tagline.substring(0, index - 1));
          setIndex(index - 1);
        } else {
          setIsErasing(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isErasing]);

  return (
    <motion.span
      className="block text-lg font-light text-gray-600"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {displayedText}
      <motion.span
        className="inline-block w-2 h-6 bg-blue-500 ml-1"
        animate={{ opacity: [0, 1, 0], scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
      ></motion.span>
    </motion.span>
  );
};

// Login Component
const Login = ({ setAuth }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "user" && password === "p") {
      setAuth(true); // Update isAuthenticated state in App.jsx
      localStorage.setItem("isAuthenticated", "true"); // Persist authentication state
      navigate("/"); // Redirect to the home page
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Left Side - Image */}
      <div className="w-full md:w-[60%] lg:w-[70%] hidden md:block relative">
        <img
          src={loginImage}
          className="h-screen w-full object-cover rounded-r-3xl"
          alt="Login Visual"
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-[40%] lg:w-[30%] flex justify-center items-center p-6 relative">
        {/* Background Image for Mobile */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 md:hidden"
          style={{ backgroundImage: `url(${loginImage})` }}
        ></div>

        {/* Form */}
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md p-8 rounded-2xl z-10
          bg-white/0 backdrop-blur-lg border border-white/30
          shadow-lg md:bg-white md:backdrop-blur-0"
        >
          <motion.h1 className="mb-8 text-3xl font-bold text-center text-gray-800">
            {/* TRCE - Cybercrime-Inspired Animation */}
            <motion.p
              className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 tracking-wide"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
            >
              TRCE
            </motion.p>

            <AnimatedTagline />
          </motion.h1>

          {/* Username Field */}
          <div className="mb-6">
            <label htmlFor="username" className="block text-gray-700 text-lg font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-blue-500
              bg-white/50 placeholder-gray-400"
              placeholder="Enter your username"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-lg font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-blue-500
              bg-white/50 placeholder-gray-400"
              placeholder="Enter your password"
            />
            <a href="#" className="text-sm text-blue-600 hover:text-blue-500 mt-2 block">
              Forgot Password?
            </a>
          </div>

          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-4 text-red-500 text-sm"
              >
                Invalid credentials. Please try again.
              </motion.div>
            )}
          </AnimatePresence>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-lg
            hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2
            focus:ring-blue-500 focus:ring-offset-2 mb-4 transition-all duration-300"
          >
            Login
          </button>
          <hr className="mb-4 text-gray-200"></hr>

          {/* Google Login Button */}
          <div className="flex justify-center">
            <button
              type="button"
              className="flex items-center justify-center w-full p-3
              border border-gray-300 rounded-lg
              hover:bg-gray-50 focus:outline-none
              focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            >
              <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google" className="w-6 h-6" />
              <span className="ml-2 text-gray-700">Google</span>
            </button>
          </div>
          
          <span className="block text-center text-gray-500 text-sm mt-4">Or</span>

          {/* Create Account Link */}
          <div className="text-center mt-1">
            <a href="/signup" className="text-blue-600 hover:text-blue-500">
              Create an account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;