"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SocialLogin from "../SocialLogin";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-purple-100 px-4">
      {/* Floating Animation Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-gray-100"
      >
        {/* Title */}
        <motion.h2
          className="text-3xl font-bold text-gray-800 text-center mb-2"
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Welcome Back
        </motion.h2>

        <p className="text-center text-gray-600 mb-8">
          Login to continue your learning journey
        </p>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-5"
        >
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
              placeholder="Enter your password"
              className="input input-bordered w-full rounded-xl border-2 border-blue-300 focus:border-blue-600 focus:outline-none"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-blue-600 hover:underline text-sm"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Login
          </motion.button>
        </motion.form>

        {/* Divider */}
        <div className="mt-6 flex items-center gap-3">
          <div className="h-px bg-gray-300 flex-1" />
          <span className="text-gray-500 text-sm">OR</span>
          <div className="h-px bg-gray-300 flex-1" />
        </div>

        {/* Google Login */}
       <SocialLogin></SocialLogin>

        {/* Register Link */}
        <p className="text-center text-gray-700 mt-6">
          Don’t have an account?{" "}
          <Link href="/register" className="text-blue-600 hover:underline">
            Register now
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
