"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Featured = () => {
  const [courses, setCourses] = useState([]);
  const [activeType, setActiveType] = useState("all");

  // Fetch Data Function
  const fetchCourses = async (type) => {
    const url =
      type === "all"
        ? "http://localhost:5000/courses"
        : `http://localhost:5000/courses?type=${type}`;

    const res = await fetch(url);
    const data = await res.json();
    setCourses(data);
  };

  // Load initial data (All courses)
  useEffect(() => {
    fetchCourses("all");
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div className="bg-linear-to-r from-blue-50 via-[#f6ebff] to-[#f4f4f6] mt-10 p-6 md:p-12 rounded-2xl">
      {/* Heading + Filters */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5">
        <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">
          Our <span className="text-blue-600">Featured</span> Courses
        </h1>

        {/* Filters */}
        <div className="w-full md:w-auto">
          <ul className="flex flex-wrap justify-center md:justify-end gap-4">
            {["all", "business", "graphic", "tech"].map((type) => (
              <li key={type}>
                <button
                  onClick={() => {
                    setActiveType(type);
                    fetchCourses(type);
                  }}
                  className={`px-3 py-1 text-base md:text-lg font-medium ${
                    activeType === type
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-500"
                  }`}
                >
                  {type === "all"
                    ? "All Courses"
                    : type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {courses.map((course, index) => (
          <motion.div
            key={course._id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all border border-gray-100"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-t-2xl">
              <motion.img
                src={course.coverPhoto}
                alt={course.title}
                className="w-full h-40 sm:h-44 md:h-48 object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg md:text-xl font-bold text-gray-800">
                {course.title}
              </h3>

              <div className="flex items-center justify-between mt-3">
                <span className="text-xs md:text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {course.type}
                </span>
                <span className="text-xs md:text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  {course.level}
                </span>
              </div>

              <p className="text-xl md:text-2xl font-bold text-gray-900 mt-4">
                ${course.price}
              </p>

              {/* Buttons */}
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <button className="w-full sm:flex-1 px-4 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition">
                  Explore Now
                </button>

                <button className="w-full sm:flex-1 px-4 py-2 bg-gray-900 text-white rounded-xl font-semibold hover:bg-black transition">
                  Pay Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
