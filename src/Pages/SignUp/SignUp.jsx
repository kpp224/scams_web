import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import signUpImage from "../../assests/loginImage.jpeg"; // Replace with your signup image if different

const tagline = "Helping You Stay Secure Online";

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

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showAdditionalFields, setShowAdditionalFields] = useState(false); // State to toggle additional fields
  const [countryCode, setCountryCode] = useState("+91");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const navigate = useNavigate();

  const handleInitialSubmit = (e) => {
    e.preventDefault();

    // Validation for Name and Email
    if (!name || !email) {
      alert("Please fill in both Name and Email.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Show additional fields after validation
    setShowAdditionalFields(true);
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    // Validation for additional fields
    if (!mobile || !otp || !dateOfBirth) {
      alert("Please fill all fields.");
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!/^\d{6}$/.test(otp)) {
      alert("Please enter a valid 6-digit OTP.");
      return;
    }

    const today = new Date();
    const dob = new Date(dateOfBirth);
    if (dob >= today) {
      alert("Please enter a valid date of birth.");
      return;
    }

    // Add your sign-up logic here
    console.log("Name:", name, "Email:", email, "Mobile:", `${countryCode} ${mobile}`, "OTP:", otp, "Date of Birth:", dateOfBirth);
  };

  const handleMobileInput = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setMobile(value.slice(0, 10)); // Limit to 10 digits
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      {/* Background Image for Mobile */}
      <div className="md:hidden fixed inset-0 z-0">
        <img
          src={signUpImage}
          className="h-full w-full object-cover"
          alt="Sign Up Visual"
        />
      </div>

      {/* Left Side - Sign Up Form */}
      <div className="w-full md:w-[40%] lg:w-[35%] flex justify-center items-center p-6 h-[90vh] md:h-full relative z-10">
        <form
          onSubmit={showAdditionalFields ? handleSignUp : handleInitialSubmit}
          className="w-full max-w-md p-8 rounded-3xl z-10
          bg-white/70 backdrop-blur-md border border-white/30
          shadow-lg md:bg-white/90 md:backdrop-blur-0 overflow-y-auto scrollbar-hide"
          style={{ maxHeight: "90vh" }}
        >
          <motion.h1 className="mb-8 text-3xl font-bold text-center text-gray-800">
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

          {/* Name and Email Fields */}
          {!showAdditionalFields && (
            <>
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
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 text-lg font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  bg-white/50 placeholder-gray-400"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </>
          )}

          {/* Additional Fields */}
          {showAdditionalFields && (
            <>
              <div className="mb-6">
                <label htmlFor="mobile" className="block text-gray-700 text-lg font-medium mb-2">
                  Mobile Number
                </label>
                <div className="flex">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="w-1/4 p-3 border border-gray-300 rounded-l-lg
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                    bg-white/50"
                  >
                    <option value="+91">+91 (IN)</option>
                    <option value="+1">+1 (US)</option>
                    <option value="+44">+44 (UK)</option>
                  </select>
                  <input
                    type="text"
                    id="mobile"
                    value={mobile}
                    onChange={handleMobileInput}
                    className="w-3/4 p-3 border border-gray-300 rounded-r-lg
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                    bg-white/50 placeholder-gray-400"
                    placeholder="Enter your mobile number"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="otp" className="block text-gray-700 text-lg font-medium mb-2">
                  OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  className="w-full p-3 border border-gray-300 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  bg-white/50 placeholder-gray-400"
                  placeholder="Enter OTP"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="dob" className="block text-gray-700 text-lg font-medium mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  bg-white/50 placeholder-gray-400"
                  required
                />
              </div>
            </>
          )}

          {/* Google Button */}
          <div className="flex justify-center">
            <button
              type="button"
              className="flex items-center justify-center w-full mb-3 p-3
              border border-gray-300 rounded-lg
              hover:bg-gray-50 focus:outline-none
              focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            >
              <img src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" alt="Google" className="w-6 h-6" />
              <span className="ml-2 text-gray-700">Google</span>
            </button>
          </div>

          <hr className="mb-4 text-gray-200"></hr>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-lg
            hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2
            focus:ring-blue-500 focus:ring-offset-2 mb-4 transition-all duration-300"
          >
            {showAdditionalFields ? "Sign Up" : "Next"}
          </button>

          {/* Login Option */}
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 hover:underline hover:text-blue-800"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-[60%] lg:w-[65%] hidden md:block relative h-screen">
        <img
          src={signUpImage}
          className="h-full w-full object-cover rounded-l-3xl"
          alt="Sign Up Visual"
          style={{ objectPosition: "center" }}
        />
      </div>
    </div>
  );
};

export default SignUp;