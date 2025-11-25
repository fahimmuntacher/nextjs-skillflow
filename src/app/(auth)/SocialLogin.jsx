"use client";
import { motion } from "framer-motion";
import React from "react";

const SocialLogin = () => {
    const handleGoogleLogin =() =>{
        
    }
  return (
    <motion.button
    onClick={handleGoogleLogin}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="mt-6 w-full py-3 bg-white border border-gray-300 rounded-xl font-medium shadow-sm hover:shadow-md flex items-center justify-center gap-2"
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        className="w-5 h-5"
      />
      Sign Up with Google
    </motion.button>
  );
};

export default SocialLogin;
