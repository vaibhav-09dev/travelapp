"use client";
import React from "react";
import { motion } from "framer-motion";
import RollingGallery from "../components/ui/RollingGallery";

const Wedding2 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-12 py-16 bg-gradient-to-b from-white via-gray-100 to-gray-100 shadow-lg rounded-lg">
      {/* Text Section */}
      <motion.div
        className="md:ml-10 md:mb-0 md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-lg md:text-xl font-bold font-mono italic text-primary mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Your Wedding
        </motion.h2>
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text  text-secondary mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          whileHover={{ scale: 1.1 }}
        >
          Your Way...
        </motion.h1>
        <motion.p
          className="md:text-xl font-medium  font-serif text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          At our travel company, we believe that every couple deserves the
          wedding of their dreams. Let us make your destination wedding a
          reality. Contact us today to learn more about our destination wedding
          services and start planning your dream wedding.
        </motion.p>
      </motion.div>

      {/* Rolling Gallery Section */}
      <motion.div
        className="w-full md:w-[800px] md:mb-0 mb-20 md:mt-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{ scale: 1.02 }}
      >
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </motion.div>
    </div>
  );
};

export default Wedding2;