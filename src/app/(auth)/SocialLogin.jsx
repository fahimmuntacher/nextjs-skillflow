"use client";
import { useAuth } from "@/AuthContext/AuthContext";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import React from "react";
import { toast } from "react-toastify";

const SocialLogin = () => {
  const router = useRouter();
  const { signInWithGoogle } = useAuth();
  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      router.push("/");
      toast.success("Logged in with Google!");
    } catch (error) {
      console.error(error);
      alert("Failed to login");
    }
  };
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
