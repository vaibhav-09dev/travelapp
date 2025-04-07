"use client";
import React from "react";
import Image from "next/image";
import cruise1 from "../../public/cruise1.jpg";
import Link from "next/link";
import { motion } from "framer-motion";

const Third = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-[600px] w-full bg-gradient-to-r  px-4 md:px-8 py-16">
      {/* Image Section */}
      <motion.div
        className="h-auto md:h-[620px] w-full md:w-[900px] flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src={cruise1}
          alt="Luxury Cruise"
          className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          height={620}
          width={900}
          style={{ objectFit: "cover" }}
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="h-auto md:h-[600px] w-full md:w-[500px] text-center md:text-left mt-10 md:mt-0 md:ml-16"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h2
          className="text-xl md:text-2xl font-bold font-serif text-secondary tracking-wide uppercase"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Quick
        </motion.h2>
        <motion.h1
          className="text-3xl md:text-6xl font-extrabold italic  bg-clip-text bg-gradient-to-r text-secondary drop-shadow-lg mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          whileHover={{ scale: 1.1 }}
        >
          SERVICES
        </motion.h1>
        <motion.p
          className="font-sans text-gray-600 font-medium text-base md:text-lg leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          As one of the fastest-growing luxury travel companies, Wellcome Tours
          offers an extensive selection of hotels, flights, buses, and tour
          packages to meet every specific need of individual, group, and
          corporate clients.
        </motion.p>

        {/* Links Section */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 text-lg md:text-2xl text-gray-700 font-bold font-serif">
          {[
            { name: "Cruises", href: "/cruise" },
            { name: "Visa", href: "/visa" },
            { name: "Hotels", href: "/hotels" },
            { name: "Yachts", href: "/form" },
            { name: "Flights", href: "/form" },
            { name: "Travel", href: "/form" },
            { name: "Insurance", href: "/form" },
          ].map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={link.href}
                className="hover:text-blue-500 transition-all duration-300"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Third;