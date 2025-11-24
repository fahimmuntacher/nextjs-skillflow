import React from "react";
import Logo from "../Logo/Logo";
import { FaShoppingBag } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const links = (
    <>
      <Link href="/">
        <li className="text-lg font-medium">
          <span>Home</span>
        </li>
      </Link>
      <Link href="/courses">
        <li className="text-lg font-medium">
          <span>Courses</span>
        </li>
      </Link>
      <Link href="/about">
        <li className="text-lg font-medium">
          <span>About</span>
        </li>
      </Link>
      <Link href="/contact">
        <li className="text-lg font-medium">
          <span>Contact</span>
        </li>
      </Link>
    </>
  );

  return (
    // Outer container: centers content and applies responsive horizontal padding
    <div className="px-4 sm:px-6 lg:px-8 mx-auto py-3.5">
      {/* Navbar wrapper */}
      <div className="navbar shadow-sm rounded-2xl h-16 bg-white px-4 py-8">
        {/* Left side: logo + mobile dropdown */}
        <div className="navbar-start h-full flex items-center">
          {/* Mobile dropdown: visible only on small screens (lg:hidden) */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* Dropdown menu items (mobile) */}
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          {/* Logo section. Use Logo props to change variant/size if needed */}
          <span className="btn btn-ghost text-xl">
            <Logo />
          </span>
        </div>

        {/* Center: desktop menu (hidden on small screens) */}
        <div className="navbar-center hidden lg:flex h-full items-center gap-10">
          <ul className="menu menu-horizontal px-1">{links}</ul>

          {/* Simple search input inside navbar */}
          <div>
            <label className="input ring-2 ring-blue-200 rounded-2xl w-64 flex items-center px-3 active:ring-blue-500">
              <svg
                className="h-5 w-5 opacity-50 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                className="bg-transparent outline-none w-full"
                type="search"
                placeholder="Search"
              />
            </label>
          </div>
        </div>

        {/* Right side: actions (e.g., sign in, CTA). Update as needed. */}
        <div className="navbar-end h-full flex items-center gap-5">
          <div className="border-r-3 pr-3.5 border-gray-400">
            <FaShoppingBag className="text-xl text-gray-700" />
          </div>
          <Link href="/login">
            <button className="btn border-2 border-gray-400 rounded-lg font-bold py-4 bg-white text-lg px-5 hover:text-white hover:bg-blue-700">
              {" "}
              Login
            </button>
          </Link>
          <Link href="/register">
            <button className="btn border-2 border-blue-400 rounded-lg font-bold py-4 bg-white text-lg px-5 hover:text-white hover:bg-blue-700">
              Register Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
