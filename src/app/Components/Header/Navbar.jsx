"use client";

import React, { useState } from "react";
import Logo from "../Logo/Logo";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link";
import { useAuth } from "@/AuthContext/AuthContext";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { user, signOutUser } = useAuth();

  const pathname = usePathname();

  const linkClass = (path) =>
    `relative text-lg font-medium transition ${
      pathname === path
        ? "text-blue-600 font-semibold"
        : "text-gray-700 hover:text-blue-600"
    }`;

  const links = (
    <>
      {/* HOME */}
      <Link href="/">
        <li className={linkClass("/")}>
          Home
          {pathname === "/" && (
            <motion.div
              layoutId="underline"
              className="absolute left-0 right-0 -bottom-1 h-[3px] bg-blue-600 rounded-full"
            />
          )}
        </li>
      </Link>

      {/* COURSES */}
      <Link href="/courses">
        <li className={linkClass("/courses")}>
          Courses
          {pathname === "/courses" && (
            <motion.div
              layoutId="underline"
              className="absolute left-0 right-0 -bottom-1 h-[3px] bg-blue-600 rounded-full"
            />
          )}
        </li>
      </Link>

      {/* ABOUT */}
      <Link href="/about">
        <li className={linkClass("/about")}>
          About
          {pathname === "/about" && (
            <motion.div
              layoutId="underline"
              className="absolute left-0 right-0 -bottom-1 h-[3px] bg-blue-600 rounded-full"
            />
          )}
        </li>
      </Link>

      {/* CONTACT */}
      <Link href="/contact">
        <li className={linkClass("/contact")}>
          Contact
          {pathname === "/contact" && (
            <motion.div
              layoutId="underline"
              className="absolute left-0 right-0 -bottom-1 h-[3px] bg-blue-600 rounded-full"
            />
          )}
        </li>
      </Link>
    </>
  );

  return (
    <div className="px-4 sm:px-6 lg:px-8 mx-auto py-3 sticky top-0 z-50">
      <div className="navbar h-20 rounded-2xl shadow-lg bg-white/70 backdrop-blur-xl border border-gray-100 px-4 flex justify-between items-center">
        {/* LEFT */}
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

        {/* CENTER */}
        <div className="hidden lg:flex">
          <ul className="flex gap-10">{links}</ul>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4 relative">
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
                {user?.displayName || user.email}
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

      {/* MOBILE MENU */}
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
              <Link href="/add-course">
                <button className="px-3 py-2 hover:bg-gray-100 rounded-lg">
                  Add Course
                </button>
              </Link>
              <Link href="/manage-courses">
                <button className="px-3 py-2 hover:bg-gray-100 rounded-lg">
                  Manage Courses
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
