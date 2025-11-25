"use client";

import React from "react";
import Logo from "../Logo/Logo";
import { FaShoppingBag } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = (
    <>
      <Link href="/">
        <li className="text-lg font-medium hover:text-blue-600 transition">
          Home
        </li>
      </Link>

      <Link href="/courses">
        <li className="text-lg font-medium hover:text-blue-600 transition">
          Courses
        </li>
      </Link>

      <Link href="/about">
        <li className="text-lg font-medium hover:text-blue-600 transition">
          About
        </li>
      </Link>

      <Link href="/contact">
        <li className="text-lg font-medium hover:text-blue-600 transition">
          Contact
        </li>
      </Link>
    </>
  );

  return (
    <div className="px-4 sm:px-6 lg:px-8 mx-auto py-3 sticky top-0 z-50">
      <div className="navbar h-20 rounded-2xl shadow-lg bg-white/70 backdrop-blur-xl border border-gray-100 px-4">

        {/* LEFT - Logo & Mobile Menu */}
        <div className="navbar-start flex items-center gap-3">

          {/* Mobile Toggle Button */}
          <button
            className="lg:hidden text-3xl text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <IoClose /> : <IoMenu />}
          </button>

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <Logo />
          </Link>
        </div>

        {/* CENTER - Desktop Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-10">{links}</ul>
        </div>

        {/* RIGHT - Search + Buttons */}
        <div className="navbar-end flex items-center gap-4">

          {/* Search (Desktop Only) */}
          <div className="hidden lg:flex">
            <label className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-xl bg-white/60 backdrop-blur-xl focus-within:ring-2 focus-within:ring-blue-400 transition">
              <svg
                className="h-5 w-5 opacity-60"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                className="bg-transparent outline-none"
                type="search"
                placeholder="Search courses..."
              />
            </label>
          </div>

          {/* Cart */}
          <div className="relative">
            <FaShoppingBag className="text-2xl text-gray-700 cursor-pointer hover:text-blue-600 transition" />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full px-2 py-0.5">
              2
            </span>
          </div>

          {/* Login */}
          <Link href="/login">
            <button className="px-5 py-2 border border-gray-400 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition">
              Login
            </button>
          </Link>

          {/* Register */}
          <Link href="/register">
            <button className="px-5 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
              Register
            </button>
          </Link>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <div className="lg:hidden mt-3 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-100 p-5 animate-fadeIn">
          <ul className="flex flex-col gap-5 text-lg">{links}</ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
