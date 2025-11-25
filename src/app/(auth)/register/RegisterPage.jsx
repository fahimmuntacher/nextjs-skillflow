"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SocialLogin from "../SocialLogin";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useAuth } from "@/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { useAxiosSecure } from "@/app/Hooks/useAxiosSecure";

const RegisterPage = () => {
  const { registerUser, updateUserProfile } = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
    const axiosInstance = useAxiosSecure()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");

  const handleRegistration = async (data) => {
    try {
      const userCredential = await registerUser(data.email, data.password);

      await updateUserProfile({ displayName: data.userName });
      const userInfo = {
        name : data.userName,
        email: data.email,
        role: "user"
      }
      axiosInstance.post("/users", userInfo).then(res =>{
        console.log(res);
      })
      toast.success("Registration successful!");
      router.push("/");
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-purple-100 via-blue-100 to-blue-50 px-4">
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
          onSubmit={handleSubmit(handleRegistration)}
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
              {...register("userName", { required: "Full name is required" })}
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full rounded-xl border-2 border-blue-300 focus:border-blue-600 focus:outline-none"
            />
            {errors.userName && (
              <span className="text-sm text-red-500 font-bold">
                {errors.userName.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Email Address
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full rounded-xl border-2 border-blue-300 focus:border-blue-600 focus:outline-none"
            />
            {errors.email && (
              <span className="text-sm text-red-500 font-bold">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block mb-2 text-gray-700 font-medium">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must be at least 8 characters, include uppercase, lowercase, number and special character",
                },
              })}
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              className="input input-bordered w-full rounded-xl border-2 border-blue-300 focus:border-blue-600 focus:outline-none pr-12"
            />
            <div
              className="absolute right-3 top-[38px] cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </div>
            {errors.password && (
              <span className="text-sm text-red-500 font-bold">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="block mb-2 text-gray-700 font-medium">
              Confirm Password
            </label>
            <input
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              type={showConfirm ? "text" : "password"}
              placeholder="Re-enter password"
              className="input input-bordered w-full rounded-xl border-2 border-blue-300 focus:border-blue-600 focus:outline-none pr-12"
            />
            <div
              className="absolute right-3 top-[38px] cursor-pointer text-gray-500"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </div>
            {errors.confirmPassword && (
              <span className="text-sm text-red-500 font-bold">
                {errors.confirmPassword.message}
              </span>
            )}
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
        <SocialLogin />

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
