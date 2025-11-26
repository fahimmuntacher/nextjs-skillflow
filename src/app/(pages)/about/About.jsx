"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaPalette, FaBriefcase } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-indigo-50 to-white flex flex-col items-center justify-center px-4 py-16">
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-indigo-800 mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About SkillFlow
      </motion.h1>

      {/* Animated Subheading */}
      <motion.p
        className="text-lg md:text-xl text-gray-700 max-w-2xl text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        SkillFlow is a learning platform designed to help you grow your skills in Graphic Design, Technology, Business, and more. Our mission is to empower learners with practical knowledge and hands-on experience to achieve their goals.
      </motion.p>

      {/* Course Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        <motion.div
          className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaLaptopCode className="text-5xl text-indigo-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Technology</h3>
          <p className="text-gray-600 text-center">Learn programming, web development, AI, and other tech skills to boost your career.</p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaPalette className="text-5xl text-pink-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
          <p className="text-gray-600 text-center">Master design tools, illustration, branding, and creative skills for professional projects.</p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaBriefcase className="text-5xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Business</h3>
          <p className="text-gray-600 text-center">Explore entrepreneurship, marketing, management, and business growth strategies.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
