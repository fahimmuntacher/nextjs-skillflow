"use client";

import React, { useState } from "react";
import Logo from "../Logo/Logo";
import { FaShoppingBag } from "react-icons/fa";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";
import { useAuth } from "@/AuthContext/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { user, signOutUser } = useAuth();

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
      <div className="navbar h-20 rounded-2xl shadow-lg bg-white/70 backdrop-blur-xl border border-gray-100 px-4 flex justify-between items-center">
        {/* LEFT - Logo & Mobile Menu */}
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden text-3xl text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <IoClose /> : <IoMenu />}
          </button>

          <Link href="/" className="text-2xl font-bold">
            <Logo />
          </Link>
        </div>

        {/* CENTER - Desktop Links */}
        <div className="hidden lg:flex">
          <ul className="flex gap-10">{links}</ul>
        </div>

        {/* RIGHT - User Actions */}
        <div className="flex items-center gap-4 relative">
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
          <div className="hidden relative sm:block">
            <FaShoppingBag className="text-2xl text-gray-700 cursor-pointer hover:text-blue-600 transition" />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full px-2 py-0.5">
              2
            </span>
          </div>

          {/* Auth Buttons / User Dropdown */}
          {!user ? (
            <>
              <Link href="/login">
                <button className="hidden sm:block px-5 py-2 border border-gray-400 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition">
                  Login
                </button>
              </Link>
              <Link href="/register">
                <button className="px-5 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
                  Register
                </button>
              </Link>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 px-4 py-2 border-2 cursor-pointer border-blue-300 rounded-xl hover:bg-gray-100 transition"
              >
                {user.displayName || user.email}
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 p-2 flex flex-col gap-2">
                  <Link href="/add-course">
                    <button className="text-left px-3 py-2 hover:bg-gray-100 rounded-lg">
                      Add Course
                    </button>
                  </Link>
                  <Link href="/manage-courses">
                    <button className="text-left px-3 py-2 hover:bg-gray-100 rounded-lg">
                      Manage Courses
                    </button>
                  </Link>
                  <button
                    onClick={signOutUser}
                    className="text-left px-3 py-2 hover:bg-gray-100 rounded-lg"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <div className="lg:hidden mt-3 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-100 p-5 animate-fadeIn">
          <ul className="flex flex-col gap-5 text-lg">{links}</ul>
          {!user ? (
            <div className="mt-5 flex flex-col gap-3">
              <Link href="/login">
                <button className="px-5 py-2 border border-gray-400 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition">
                  Login
                </button>
              </Link>
              <Link href="/register">
                <button className="px-5 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
                  Register
                </button>
              </Link>
            </div>
          ) : (
            <div className="mt-5 flex flex-col gap-2">
              <Link href="/add-product">
                <button className="px-3 py-2 hover:bg-gray-100 rounded-lg">
                  Add Product
                </button>
              </Link>
              <Link href="/manage-products">
                <button className="px-3 py-2 hover:bg-gray-100 rounded-lg">
                  Manage Products
                </button>
              </Link>
              <button
                onClick={signOutUser}
                className="px-3 py-2 hover:bg-gray-100 rounded-lg"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
