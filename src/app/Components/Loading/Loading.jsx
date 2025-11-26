"use client";

import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  const circleVariants = {
    animate: {
      y: [0, -15, 0], 
      transition: {
        yoyo: Infinity, 
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-linear-to-r from-blue-100 via-purple-100 to-pink-100">
      {/* Logo or Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10 animate-pulse">
        Loading...
      </h1>

      {/* Animated Dots */}
      <div className="flex gap-4">
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="w-5 h-5 sm:w-7 sm:h-7 bg-blue-600 rounded-full"
            variants={circleVariants}
            animate="animate"
            transition={{ delay: index * 0.2 }}
          />
        ))}
      </div>

      {/* Optional Subtext */}
      <p className="mt-6 text-gray-600 text-sm sm:text-base">
        Please wait while we fetch your courses.
      </p>
    </div>
  );
};

export default Loading;
