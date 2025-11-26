"use client";

import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useAxiosSecure } from "@/app/Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { useAuth } from "@/AuthContext/AuthContext";

const AddCourse = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axiosSecure.post("/courses", data);
      toast.success("Course added successfully!");
      reset();
      console.log(res.data);
    } catch (err) {
      toast.error("Failed to add course!");
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-purple-50 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
          Add New Course
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Table Style Form */}
          <table className="w-full text-left border-separate border-spacing-y-6">
            <tbody>
              {/* Title */}
              <tr>
                <td className="font-medium text-gray-700 w-40">Title</td>
                <td>
                  <input
                    {...register("title", { required: true })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter course title"
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm mt-1">Title is required</p>
                  )}
                </td>
              </tr>

              {/* Type */}
              <tr>
                <td className="font-medium text-gray-700">Type</td>
                <td>
                  <select
                    {...register("type", { required: true })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Type</option>
                    <option value="Graphic">Graphic</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Marketing">Marketing</option>
                  </select>
                  {errors.type && (
                    <p className="text-red-500 text-sm mt-1">Type is required</p>
                  )}
                </td>
              </tr>

              {/* Level */}
              <tr>
                <td className="font-medium text-gray-700">Level</td>
                <td>
                  <select
                    {...register("level", { required: true })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select Level</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </td>
              </tr>

              {/* Price */}
              <tr>
                <td className="font-medium text-gray-700">Price</td>
                <td>
                  <input
                    {...register("price", { required: true })}
                    type="number"
                    step="0.01"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500"
                    placeholder="39.99"
                  />
                </td>
              </tr>

              {/* Cover Photo */}
              <tr>
                <td className="font-medium text-gray-700">Cover Photo URL</td>
                <td>
                  <input
                    {...register("coverPhoto", { required: true })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                    placeholder="https://image-link.com/photo.jpg"
                  />
                </td>
              </tr>

              {/* Description */}
              <tr>
                <td className="font-medium text-gray-700">Description</td>
                <td>
                  <textarea
                    {...register("description", { required: true })}
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500"
                    placeholder="Course description..."
                  ></textarea>
                </td>
              </tr>

              {/* Added By */}
              <tr>
                <td className="font-medium text-gray-700">Added By</td>
                <td>
                  <input
                    {...register("addedBy", { required: true })}
                    defaultValue={`${user?.displayName}`}
                    readOnly
                    disabled
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                </td>
              </tr>

              {/* Email */}
              <tr>
                <td className="font-medium text-gray-700">Email</td>
                <td>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    defaultValue={`${user?.email}`}
                    readOnly
                    disabled
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 cursor-not-allowed"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-10 bg-black text-white py-4 rounded-2xl text-lg font-semibold shadow-lg hover:bg-gray-900 transition"
            type="submit"
          >
            Add Course
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
