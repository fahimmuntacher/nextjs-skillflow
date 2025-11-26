"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import Loading from "@/app/Components/Loading/Loading";
import NotFound from "@/app/Components/notfound/NotFound";
import useAxiosSecure from "@/app/Hooks/useAxiosSecure";

const CourseDetails = ({ id }) => {
  const axiosSecure = useAxiosSecure();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false)

  useEffect(() => {
    setLoading(true);

    axiosSecure
      .get(`/courses/${id}`)
      .then((res) => {
        setCourse(res.data);
      })
      .catch((err) => {
        setErr(true)
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, axiosSecure]);



  if (loading) {
    return <Loading></Loading>;
  }

  if(err){
    return <NotFound></NotFound>
  }


  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-purple-50 px-4 py-10">
      <title>{course.name} | SkillFlow</title>
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-gray-700 bg-white px-4 py-2 rounded-xl shadow-md border border-gray-200 hover:bg-gray-100 transition mb-6"
        >
          <FaArrowLeft /> Back
        </motion.button>

        {/* Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src={course.coverPhoto}
            alt="course image"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-8 bg-white shadow-xl p-8 rounded-2xl border border-gray-200"
        >
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            {course.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-6">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-xl font-medium">
              Price: ${course.price}
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-xl font-medium">
              Level: {course.level}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line mb-10">
            {course.description}
          </p>

          {/* Pay Now Button */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto px-8 py-4 bg-black text-white rounded-2xl font-semibold text-lg shadow-lg hover:bg-gray-900 transition-all"
          >
            Pay Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseDetails;
