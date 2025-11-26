"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-indigo-50 to-white flex flex-col items-center justify-center px-4 py-16">
         {/* Animated Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-indigo-800 mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </motion.h1>

      {/* Animated Subheading */}
      <motion.p
        className="text-lg md:text-xl text-gray-700 max-w-2xl text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Have questions about SkillFlow or our courses? Reach out to us via the form below, or contact us through email, phone, or visit our office.
      </motion.p>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-12">
        <motion.div
          className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaEnvelope className="text-4xl text-indigo-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-gray-600 text-center">support@skillflow.com</p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaPhone className="text-4xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-gray-600 text-center">+880 1234 567890</p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <FaMapMarkerAlt className="text-4xl text-pink-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Location</h3>
          <p className="text-gray-600 text-center">Dhaka, Bangladesh</p>
        </motion.div>
      </div>
        <motion.div
      className="w-full bg-white p-8 rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-6 text-center">
        Send Us a Message
      </h2>

      <form className="flex flex-col gap-4">
        {/* Name */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label className="mb-1 font-medium text-gray-700">Message</label>
          <textarea
            rows="5"
            placeholder="Your Message"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          ></textarea>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="bg-indigo-600 text-white font-semibold py-3 rounded-lg mt-2 hover:bg-indigo-700 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
    </div>
  );
};

export default Contact;
