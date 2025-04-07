"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../../public/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className="md:opacity-80 opacity-80 shadow-2xl fixed top-0 left-0 w-full z-50 bg-white bg-opacity-90 transition-all duration-500"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex md:justify-between justify-around items-center h-[80px] px-4 md:px-8">
        {/* Logo Section */}
        <motion.div
          className="h-[80px] w-[200px] flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Link
            className="hover:text-yellow-500 ml-6 transition-all duration-300 hover:scale-110"
            href={"/"}
          >
          <Image
            src={logo}
            width={80}
            alt="logo"
            className="rounded-full py-1"
          />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          className="hidden md:flex w-auto font-sans text-primary font-bold text-lg text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Link
            className="hover:text-yellow-500 ml-6 transition-all duration-300 hover:scale-110"
            href={"/"}
          >
            HOME
          </Link>
          <Link
            className="hover:text-yellow-500 ml-6 transition-all duration-300 hover:scale-110"
            href={"/about"}
          >
            ABOUT US
          </Link>
          <Link
            className="hover:text-yellow-500 ml-6 transition-all duration-300 hover:scale-110"
            href={"/wedding"}
          >
            WEEDINGS
          </Link>
          <Link
            className="hover:text-yellow-500 ml-6 transition-all duration-300 hover:scale-110"
            href={"/hotels"}
          >
            HOTELS
          </Link>
          <Link
            className="hover:text-yellow-500 ml-6 transition-all duration-300 hover:scale-110"
            href={"/cruise"}
          >
            CRUISES
          </Link>
          <Link
            className="hover:text-yellow-500 ml-6 transition-all duration-300 hover:scale-110"
            href={"/visa"}
          >
            VISA
          </Link>
          <Link
            className="hover:text-yellow-500 ml-6 transition-all duration-300 hover:scale-110"
            href={"/dham"}
          >
            4-DHAAM
          </Link>
          <Link
            className="hover:text-yellow-500 ml-6 transition-all duration-300 hover:scale-110"
            href={"/form"}
          >
            CONTACT US
          </Link>
          <Link
            className="hover:text-yellow-500 ml-6 transition-all duration-300 hover:scale-110"
            href={"/admin"}
          >
            ADMIN
          </Link>
        </motion.div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-[80px] left-0 w-full  bg-white shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center py-4">
            <Link
              className="hover:text-yellow-500 py-2 text-lg text-gray-800 transition-all duration-300"
              href={"/"}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              className="hover:text-yellow-500 py-2 text-lg text-gray-800 transition-all duration-300"
              href={"/about"}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              className="hover:text-yellow-500 py-2 text-lg text-gray-800 transition-all duration-300"
              href={"/wedding"}
              onClick={() => setIsOpen(false)}
            >
              Weddings
            </Link>
            <Link
              className="hover:text-yellow-500 py-2 text-lg text-gray-800 transition-all duration-300"
              href={"/hotels"}
              onClick={() => setIsOpen(false)}
            >
              Hotels
            </Link>
            <Link
              className="hover:text-yellow-500 py-2 text-lg text-gray-800 transition-all duration-300"
              href={"/cruise"}
              onClick={() => setIsOpen(false)}
            >
              Cruises
            </Link>
            <Link
              className="hover:text-yellow-500 py-2 text-lg text-gray-800 transition-all duration-300"
              href={"/visa"}
              onClick={() => setIsOpen(false)}
            >
              Visa
            </Link>
            <Link
              className="hover:text-yellow-500 py-2 text-lg text-gray-800 transition-all duration-300"
              href={"/form"}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              className="hover:text-yellow-500 py-2 text-lg text-gray-800 transition-all duration-300"
              href={"/admin"}
              onClick={() => setIsOpen(false)}
            >
              Admin
            </Link>
            </div>
          </motion.div>
        )}

        {/* Hamburger Icon */}
        <motion.div
          className="md:hidden flex items-center cursor-pointer"
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-800"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;