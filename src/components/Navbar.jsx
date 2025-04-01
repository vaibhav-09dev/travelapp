"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white shadow-md fixed top-0 left-0 w-[400] md:w-full z-50">
      <div className="flex justify-between items-center h-[80px] px-4 md:px-8">
        {/* Logo Section */}
        <div className="h-[80px] w-[200px] flex justify-center items-center">
          <Image
            src={logo}
            width={90}
            alt="logo"
            className="rounded-4xl py-1"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-auto font-sans text-blue-500 font-bold text-lg">
          <Link className="hover:text-stone-400 ml-6" href={"/"}>
            Home
          </Link>
          <Link href={"/about"} className="ml-6 hover:text-stone-400">
            About Us
          </Link>
          <Link href={"/wedding"} className="ml-6 hover:text-stone-400">
            Weddings
          </Link>
          <Link href={"/hotels"} className="ml-6 hover:text-stone-400">
            Hotels
          </Link>
          <Link href={"/cruise"} className="ml-6 hover:text-stone-400">
            Cruises
          </Link>
          <Link href={"/visa"} className="ml-6 hover:text-stone-400">
            Visa
          </Link>
          <Link href={"/form"} className="ml-6 hover:text-stone-400">
            Contact Us
          </Link>
          <Link href={"/admin"} className="ml-6 hover:text-stone-400">
            Admin
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[80px] left-0 w-full bg-white shadow-md">
          <div className="flex flex-col items-center py-4">
            <Link
              className="hover:text-green-500 py-2 text-lg"
              href={"/"}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href={"/about"}
              className="hover:text-green-500 py-2 text-lg"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href={"/wedding"}
              className="hover:text-green-500 py-2 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Weddings
            </Link>
            <Link
              href={"/hotels"}
              className="hover:text-green-500 py-2 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Hotels
            </Link>
            <Link
              href={"/cruise"}
              className="hover:text-green-500 py-2 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Cruises
            </Link>
            <Link
              href={"/visa"}
              className="hover:text-green-500 py-2 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Visa
            </Link>
            <Link
              href={"/form"}
              className="hover:text-green-500 py-2 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href={"/admin"}
              className="hover:text-green-500 py-2 text-lg"
              onClick={() => setIsOpen(false)}
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;