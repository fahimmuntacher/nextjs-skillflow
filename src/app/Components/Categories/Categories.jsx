"use client";

import { motion } from "framer-motion";
import {
  FaChartLine,
  FaLaptopCode,
  FaPaintBrush,
  FaFlask,
  FaBriefcase,
} from "react-icons/fa";

const categories = [
  { icon: <FaLaptopCode />, title: "Web Development", count: "12 Courses" },
  { icon: <FaFlask />, title: "Science", count: "08 Courses" },
  { icon: <FaPaintBrush />, title: "Design & Art", count: "15 Courses" },
  { icon: <FaChartLine />, title: "Finance", count: "10 Courses" },
  { icon: <FaBriefcase />, title: "Business", count: "06 Courses" },
];

export default function Categories() {
  return (
    <div className="w-full mt-16 rounded-2xl bg-linear-to-r from-[#f4f4f6] via-[#f6ebff] to-blue-50 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="inline-block bg-white/70 px-4 py-1 rounded-full text-blue-600 font-medium shadow">
            Explore Courses
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Discover <span className="text-blue-600">New Skills</span>
            <br />
            By Categories
          </h2>

          <p className="text-gray-600 max-w-md">
            Improve your knowledge with our curated online courses designed for
            learners of all levels.
          </p>

          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
            All Categories →
          </button>
        </motion.div>

        {/* RIGHT GRID */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white shadow-md rounded-2xl p-6 text-center flex flex-col items-center group hover:shadow-xl transition"
            >
              <div className="text-blue-600 text-4xl mb-3 group-hover:text-blue-700 transition">
                {cat.icon}
              </div>
              <h3 className="font-semibold text-gray-800 text-lg">
                {cat.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{cat.count}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
