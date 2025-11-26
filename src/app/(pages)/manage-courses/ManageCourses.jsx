"use client";

import React, { useEffect, useState } from "react";

import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

import { useAuth } from "@/AuthContext/AuthContext";
import Swal from "sweetalert2";
import Loading from "@/app/Components/Loading/Loading";

import Link from "next/link";
import useAxiosSecure from "@/app/Hooks/useAxiosSecure";

const ManageCourses = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch courses by email
  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    axiosSecure
      .get(`/courses?email=${user.email}`)
      .then((res) => setCourses(res.data))
      .catch((err) => console.log(err));
    setLoading(false);
  }, [user?.email, axiosSecure]);

  // Handle Delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/courses/${id}`);

          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "The course has been deleted successfully.",
              icon: "success",
              timer: 1500,
            });

            // Update state: remove deleted course
            setCourses((prevCourses) =>
              prevCourses.filter((c) => c._id !== id)
            );
          }
        } catch (error) {
          console.error("Delete failed:", error);
          Swal.fire({
            title: "Error!",
            text: "Failed to delete the course. Please try again.",
            icon: "error",
          });
        }
      }
    });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-purple-50 px-6 py-10">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
          Manage Your Courses
        </h1>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-700 text-sm uppercase">
                <th className="p-4">Cover</th>
                <th className="p-4">Title</th>
                <th className="p-4">Price</th>
                <th className="p-4">Level</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {courses.map((course) => (
                <motion.tr
                  key={course._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="p-4">
                    <img
                      src={course.coverPhoto}
                      alt="cover"
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                  </td>

                  <td className="p-4 font-semibold">{course.title}</td>
                  <td className="p-4">${course.price}</td>
                  <td className="p-4">{course.level}</td>

                  <td className="p-4 flex items-center justify-center gap-4">
                    {/* Edit Button */}
                    <Link href={`/courses/${course._id}`}>
                      <button
                        onClick={() => console.log("Edit", course._id)}
                        className="p-2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-xl"
                      >
                        <FaEye></FaEye>
                      </button>
                    </Link>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleDelete(course._id)}
                      className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-xl"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </motion.tr>
              ))}

              {courses.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-10 text-gray-500 text-lg"
                  >
                    No courses found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageCourses;
