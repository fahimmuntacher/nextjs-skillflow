"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SocialLogin from "../SocialLogin";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-100 via-blue-100 to-blue-50 px-4">
      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
      >
        {/* Title */}
        <motion.h2
          className="text-3xl font-bold text-gray-800 text-center mb-2"
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Create Account
        </motion.h2>

        <p className="text-center text-gray-600 mb-8">
          Start learning new skills today 🚀
        </p>

        {/* Register Form */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="space-y-5"
        >
          {/* Full Name */}
          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full rounded-xl border-2 border-blue-300 focus:border-blue-600 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full rounded-xl border-2 border-blue-300 focus:border-blue-600 focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              className="input input-bordered w-full rounded-xl border-2 border-blue-300 focus:border-blue-600 focus:outline-none"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Re-enter password"
              className="input input-bordered w-full rounded-xl border-2 border-blue-300 focus:border-blue-600 focus:outline-none"
              required
            />
          </div>

          {/* Register Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Create Account
          </motion.button>
        </motion.form>

        {/* Divider */}
        <div className="mt-6 flex items-center gap-3">
          <div className="h-px bg-gray-300 flex-1" />
          <span className="text-gray-500 text-sm">OR</span>
          <div className="h-px bg-gray-300 flex-1" />
        </div>

        {/* Google Signup Button */}
       <SocialLogin></SocialLogin>

        {/* Login Link */}
        <p className="text-center text-gray-700 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
