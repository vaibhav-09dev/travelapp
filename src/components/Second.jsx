"use client";
import { motion } from "framer-motion";
import CircularGallery from "../components/ui/CircularGallery";
import Link from "next/link";
import React from "react";

const Second = () => {
  return (
    <div className="h-auto w-full flex flex-col md:flex-row justify-around items-center bg-gradient-to-b from-blue-50 via-gray-100 to-gray-200 px-4 md:px-0 py-16">
      {/* Text Section */}
      <motion.div
        className="mt-10 md:mt-20 w-full font-bold md:w-[700px] md:ml-28 text-center md:text-left "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.h2
          className="font-bold text-2xl md:text-3xl text-blue-600 tracking-wide uppercase"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Explore the Popular
        </motion.h2>
        <motion.h1
          className="text-3xl md:text-7xl font-extrabold  tracking-wide bg-clip-text bg-gradient-to-r text-secondary drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, delay: 0.4 }}
          whileHover={{ scale: 1.1, hanging: "0px 0px 10px rgba(0, 0, 0, 0.5)" }}
          whileTap={{ scale: 2}}
        >
          Destination
        </motion.h1>
        <br />
        <motion.p
          className="w-full md:w-[700px] text-gray-700 text-sm md:text-lg tracking-wide leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, delay: 0.8 }}
        >
          Welcome to our travel company, where we offer an exceptional range of
          domestic travel services that will take you on an adventure through
          some of the most beautiful and diverse destinations within your own
          country.
        </motion.p>
      </motion.div>

      {/* Circular Gallery Section */}
      <motion.div
        style={{ height: "400px", position: "relative" }}
        className="w-full md:w-1/2 mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link href="/international">
          
            {/* Circular Gallery Component */}
        <CircularGallery bend={0} textColor="black" borderRadius={0.05} />
        </Link>
      </motion.div>
    </div>
  );
};

export default Second;