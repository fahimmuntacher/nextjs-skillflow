"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import {
  FaArrowRight,
  FaBookOpen,
  FaLaptopCode,
  FaGraduationCap,
  FaPenFancy,
  FaLightbulb,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

// ---------------------------
// TYPEWRITER HOOK
// ---------------------------
const useTypewriter = (text, speed = 70, pause = 1200) => {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let i = displayed.length;

    const run = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayed(text.slice(0, i + 1));

        if (i + 1 === text.length) {
          setTimeout(() => setIsDeleting(true), pause); // Pause before deleting
        }
      } else {
        // Deleting
        setDisplayed(text.slice(0, i - 1));

        if (i - 1 === 0) {
          setIsDeleting(false); // Start typing again
        }
      }
    }, speed);

    return () => clearTimeout(run);
  }, [displayed, isDeleting, text, speed, pause]);

  return displayed;
};

// ---------------------------
// FLOATING ICON
// ---------------------------
const FloatingIcon = ({ Icon, size, top, left, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{
      opacity: 0.2,
      y: [-30, 30, -30],
      x: [-15, 15, -15],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
    className="absolute text-blue-700"
    style={{ top, left }}
  >
    <Icon className={`${size} drop-shadow-lg`} />
  </motion.div>
);

// ---------------------------
// PARTICLE BACKGROUND
// ---------------------------
const ParticleBG = () => {
  const count = 25;
  const particles = Array.from({ length: count });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-2 h-2 bg-white/40 rounded-full"
          initial={{
            x: Math.random() * 1200,
            y: Math.random() * 800,
            scale: Math.random() * 1.2,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

// ---------------------------
// ANIMATED SVG SHAPES
// ---------------------------
const AnimatedShapes = () => (
  <svg
    className="absolute top-10 right-10 w-40 opacity-20"
    viewBox="0 0 200 200"
  >
    <motion.path
      fill="#5b8bf7"
      d="M44.8,-77.6C58.4,-69.2,68.8,-55.6,75.3,-41.2C81.9,-26.7,84.6,-11.3,84.5,3.3C84.3,18,81.3,31.9,73.1,43.3C64.9,54.7,51.6,63.7,37.2,71.2C22.9,78.7,7.7,84.8,-6.4,86.1C-20.4,87.5,-33.3,84.1,-46.3,77.5C-59.3,70.8,-72.5,61,-81.7,48.3C-91,35.6,-96.3,20.1,-97.5,4.3C-98.6,-11.6,-95.6,-27.6,-89.4,-42.2C-83.2,-56.7,-73.8,-69.8,-61.2,-78.5C-48.5,-87.1,-32.7,-91.2,-17.1,-89.4C-1.5,-87.7,14.9,-80.1,29.1,-72.4C43.3,-64.8,55.1,-57,44.8,-77.6Z"
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 8, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </svg>
);

// ---------------------------
// MAIN BANNER COMPONENT
// ---------------------------
const Banner = () => {
  const title = useTypewriter(
    "Unlock Your Potential With World-Class Learning"
  );

  // PARALLAX IMAGE
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden bg-linear-to-r from-[#f4f4f6] via-[#f6ebff] to-blue-50 min-h-screen flex flex-col rounded-2xl"
    >
      <ParticleBG />
      <AnimatedShapes />

      {/* Background Learning Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingIcon
          Icon={FaBookOpen}
          size="text-6xl"
          top="15%"
          left="8%"
          delay={0}
        />
        <FloatingIcon
          Icon={FaLaptopCode}
          size="text-7xl"
          top="65%"
          left="5%"
          delay={1}
        />
        <FloatingIcon
          Icon={FaGraduationCap}
          size="text-6xl"
          top="20%"
          left="75%"
          delay={1.5}
        />
        <FloatingIcon
          Icon={FaPenFancy}
          size="text-5xl"
          top="60%"
          left="85%"
          delay={2}
        />
        <FloatingIcon
          Icon={FaLightbulb}
          size="text-6xl"
          top="35%"
          left="50%"
          delay={0.7}
        />
        <FloatingIcon
          Icon={FaChalkboardTeacher}
          size="text-7xl"
          top="5%"
          left="45%"
          delay={1.8}
        />
      </div>

      {/* HERO CONTENT */}
      <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center mx-auto gap-10 p-10 w-11/12 relative z-10">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col space-y-6"
        >
          <h2 className="text-4xl md:text-6xl text-[#082A5E] font-bold leading-tight">
            {title}
            <span className="animate-pulse text-blue-600">|</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Learn smarter and faster. Explore curated courses, track your
            progress, and gain real-world skills—whether you're starting or
            leveling up.
          </p>

          {/* CTA + Phone */}
          <div className="flex flex-wrap gap-6 items-center">
            <Link href="/courses">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn border-2 border-blue-500 rounded-lg font-bold py-3 bg-blue-500 text-lg px-7 text-white hover:bg-blue-700 flex items-center gap-2"
              >
                Try for Free <FaArrowRight />
              </motion.button>
            </Link>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3"
            >
              <IoCallOutline className="text-5xl text-blue-600" />
              <div>
                <h2 className="text-lg font-semibold text-blue-500">
                  Have any queries?
                </h2>
                <p className="text-xl font-bold hover:text-blue-600 cursor-pointer">
                  +8801234567
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE (Parallax + 3D Tilt) */}
        <motion.div
          style={{ y: yParallax }}
          whileHover={{ rotateY: 10, rotateX: 10, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="relative w-full flex justify-center items-end"
        >
          <div className="absolute w-96 h-96 bg-pink-300 rounded-full blur-[120px] opacity-40 bottom-0 left-10"></div>
          <div className="absolute w-80 h-80 bg-blue-300 rounded-full blur-[110px] opacity-40 bottom-0 right-0"></div>

          <img
            className="w-full max-w-xl relative z-10 drop-shadow-xl mt-auto rounded-2xl"
            src="https://i.ibb.co.com/1YDnt1zZ/pexels-olly-3793238.jpg"
            alt="Banner"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
