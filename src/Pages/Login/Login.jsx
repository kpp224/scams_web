import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import loginImage from "../../assests/loginImage.jpeg";

// Animated Tagline Component
const tagline = "Empowering You to Stay Safe in the Digital World";

const AnimatedTagline = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isErasing, setIsErasing] = useState(false);
  const [index, setIndex] = useState(0);

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
  const [isSignUp, setIsSignUp] = useState(false); 
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+1"); 
  const [phoneOtp, setPhoneOtp] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "user" && password === "p") {
      setAuth(true);
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000); 
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Sign Up logic goes here");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="w-full md:w-[60%] lg:w-[70%] hidden md:block relative">
        <img
          src={loginImage}
          className="h-screen w-full object-cover rounded-r-3xl" 
          alt="Login Visual"
        />
        <div className="absolute top-[47%] -right-1 transform -translate-y-1/2 flex flex-col space-y-8">
          {/* Sign In Button */}
          <button
            className="w-32 px-6 py-3 text-white font-bold text-lg transition-all duration-300"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0)", 
              color: isSignUp ? "gray" : "white", 
            }}
            onClick={() => setIsSignUp(false)} 
          >
            Sign In
          </button>
          {/* Sign Up Button */}
          <button
            className="w-32 px-6 py-3 text-white font-bold text-lg transition-all duration-300"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0)", 
              color: isSignUp ? "white" : "gray", 
            }}
            onClick={() => setIsSignUp(true)} 
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Right Side - Login or Sign Up Form */}
      <div className="w-full md:w-[40%] lg:w-[30%] flex justify-center items-center p-6 relative">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 md:hidden"
          style={{ backgroundImage: `url(${loginImage})` }}
        ></div>

        {/* Form */}
        <form
          onSubmit={isSignUp ? handleSignUp : handleLogin}
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
          {!isSignUp && (
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
          )}

          {/* Password Field */}
          {!isSignUp && (
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
          )}

          {isSignUp && (
            <>
              {/* Name Field */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 text-lg font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  bg-white/50 placeholder-gray-400"
                  placeholder="Enter your name"
                />
              </div>

              {/* Mobile Number Field with Country Code */}
              <div className="mb-6">
                <label htmlFor="phoneNumber" className="block text-gray-700 text-lg font-medium mb-2">
                  Mobile Number
                </label>
                <div className="flex">
                  {/* Country Code Dropdown */}
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="w-24 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50"
                  >
                    <option value="+1">+1 (USA)</option>
                    <option value="+91">+91 (India)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+81">+81 (Japan)</option>
                    {/* Add more country codes as needed */}
                  </select>
                  {/* Phone Number Input */}
                  <input
                    type="tel"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="flex-1 p-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 placeholder-gray-400"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* OTP for Phone Number */}
              <div className="mb-6">
                <label htmlFor="phoneOtp" className="block text-gray-700 text-lg font-medium mb-2">
                  OTP for Phone Number
                </label>
                <input
                  type="text"
                  id="phoneOtp"
                  value={phoneOtp}
                  onChange={(e) => setPhoneOtp(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 placeholder-gray-400"
                  placeholder="Enter OTP for phone number"
                />
              </div>
            </>
          )}

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

          {/* Login/Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-lg
            hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2
            focus:ring-blue-500 focus:ring-offset-2 mb-4 transition-all duration-300"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>

          {/* Divider */}
          <div className="text-center my-6">
            <span className="text-gray-500">Or {isSignUp ? "sign up" : "login"} with</span>
          </div>

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

          {/* Mobile-Specific Buttons */}
          <div className="md:hidden mt-6">
            <div className="flex justify-around">
              <button
                className={`w-1/2 py-3 text-lg font-bold ${
                  !isSignUp ? "text-blue-600" : "text-gray-500"
                } bg-transparent border-none`} 
                onClick={() => setIsSignUp(false)}
              >
                Sign In
              </button>
              <button
                className={`w-1/2 py-3 text-lg font-bold ${
                  isSignUp ? "text-blue-600" : "text-gray-500"
                } bg-transparent border-none`} 
                onClick={() => setIsSignUp(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;