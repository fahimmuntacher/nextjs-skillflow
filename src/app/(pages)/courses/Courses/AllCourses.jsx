"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Loading from "@/app/Components/Loading/Loading";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState("all");

  // Fetch courses from server
  const fetchCourses = async () => {
    try {
        setLoading(true)
      const url =
        category === "all"
          ? "http://localhost:5000/courses"
          : `http://localhost:5000/courses?type=${category}`;
      const res = await fetch(url);
      const data = await res.json();
      setCourses(data);
      setLoading(false)
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [category]);

  // Filter courses by search term
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if(loading){
    return <Loading></Loading>
  }

  return (
    <div className="px-6 sm:px-10 lg:px-20 py-12">
      {/* Page Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">All Courses</h1>
        <p className="mt-2 text-gray-600">
          Explore our wide range of courses and find the one that suits you best.
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full sm:w-96 rounded-xl ring-2 ring-blue-300 focus:ring-blue-500"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="select select-bordered w-full sm:w-1/4 bg-white border-2 border-blue-500 rounded-xl"
        >
          <option value="all">All Categories</option>
          <option value="Business">Business</option>
          <option value="Tech">Tech</option>
          <option value="Graphic">Graphic</option>
        </select>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">
            No courses found.
          </p>
        ) : (
          filteredCourses.map((course, index) => (
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
                  <Link href={`/courses/${course._id}`} className="flex-1">
                    <button className="w-full sm:flex-1 px-4 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition">
                      Explore Now
                    </button>
                  </Link>

                  <Link href="/" className="flex-1">
                    <button className="w-full sm:flex-1 px-4 py-2 bg-gray-900 text-white rounded-xl font-semibold hover:bg-black transition">
                      Pay Now
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllCourses;
