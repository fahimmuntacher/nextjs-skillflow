"use client";

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-sky-700 text-white px-6 sm:px-10 lg:px-20 py-12 rounded-t-2xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Logo />
            </div>
          </Link>
          <p className="text-sm">
            Build your skills and explore top courses from our platform.
          </p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="hover:text-blue-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Menu Links */}
        <div>
          <h3 className="font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-200 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-blue-200 transition">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-200 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-200 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-100 text-sm">
            <li>Email: support@skillflow.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 Main Street, City, Country</li>
          </ul>
        </div>

        {/* Newsletter / Info */}
        <div>
          <h3 className="font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-gray-100 text-sm">
            Subscribe to our newsletter to get the latest updates and offers.
          </p>
          <form className="mt-3 flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-xl outline-none flex-1 text-gray-300 ring-2"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-white/30 pt-5 text-center text-white/80 text-sm">
        &copy; {new Date().getFullYear()} SkillFlow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
