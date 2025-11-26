"use client";

import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";


const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-purple-100 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-10 rounded-3xl shadow-2xl max-w-xl w-full text-center border border-gray-200"
      >
        {/* Icon */}
        <motion.div
          initial={{ rotate: -10 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-6"
        >
          <FaExclamationTriangle className="text-red-500 text-7xl" />
        </motion.div>

        {/* Title */}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">404</h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-700 mb-6">
          Oops! The page you're looking for doesn’t exist.
        </p>

        {/* Description */}
        <p className="text-gray-600 mb-10">
          It may have been moved, deleted, or the link might be broken.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition shadow-md"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-xl bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition shadow-md"
          >
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
