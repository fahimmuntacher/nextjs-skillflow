import React from "react";
import Logo from "../Logo/Logo";

const Navbar = () => {
    const links = <>
        <li>
            <a>Home</a>
        </li>
        <li>
            <a>Courses</a>
        </li>
        <li>
            <a>About</a>
        </li>
        <li>
            <a>Contact</a>
        </li>
    </>
  return (
    <div className="px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="navbar bg-base-100 shadow-sm rounded-2xl h-16 py-0">
        <div className="navbar-start h-full flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
           {links}
            </ul>
          </div>
          <span className="btn btn-ghost text-xl"><Logo></Logo></span>
        </div>
        <div className="navbar-center hidden lg:flex h-full items-center">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end h-full flex items-center">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
