"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" md:opacity-100 shadow-2xl fixed top-0 left-0 w-full z-50">
      <div className="flex md:justify-between justify-around items-center h-[80px] px-4 md:px-8">
        {/* Logo Section */}
        <div className="h-[80px] w-[200px] flex justify-center items-center">
          <Image
            src={logo}
            width={80}
            alt="logo"
            className="rounded-full py-1"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-auto font-sans text-primary font-bold text-lg text-cyan-600">
          <Link className="hover:text-secondary ml-6 transition-all duration-300" href={"/"}>
            Home
          </Link>
          <Link className="hover:text-secondary ml-6 transition-all duration-300" href={"/about"}>
            About Us
          </Link>
          <Link className="hover:text-secondary ml-6 transition-all duration-300" href={"/wedding"}>
            Weddings
          </Link>
          <Link className="hover:text-secondary ml-6 transition-all duration-300" href={"/hotels"}>
            Hotels
          </Link>
          <Link className="hover:text-secondary ml-6 transition-all duration-300" href={"/cruise"}>
            Cruises
          </Link>
          <Link className="hover:text-secondary ml-6 transition-all duration-300" href={"/visa"}>
            Visa
          </Link>
          <Link className="hover:text-secondary ml-6 transition-all duration-300" href={"/form"}>
            Contact Us
          </Link>
          <Link className="hover:text-secondary ml-6 transition-all duration-300" href={"/admin"}>
            Admin
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center font-extrabold ">
          <button
            onClick={toggleMenu}
            className="text-cyan-600 focus:outline-none"
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
              className="hover:text-secondary py-2 text-lg transition-all duration-300"
              href={"/"}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              className="hover:text-secondary py-2 text-lg transition-all duration-300"
              href={"/about"}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              className="hover:text-secondary py-2 text-lg transition-all duration-300"
              href={"/wedding"}
              onClick={() => setIsOpen(false)}
            >
              Weddings
            </Link>
            <Link
              className="hover:text-secondary py-2 text-lg transition-all duration-300"
              href={"/hotels"}
              onClick={() => setIsOpen(false)}
            >
              Hotels
            </Link>
            <Link
              className="hover:text-secondary py-2 text-lg transition-all duration-300"
              href={"/cruise"}
              onClick={() => setIsOpen(false)}
            >
              Cruises
            </Link>
            <Link
              className="hover:text-secondary py-2 text-lg transition-all duration-300"
              href={"/visa"}
              onClick={() => setIsOpen(false)}
            >
              Visa
            </Link>
            <Link
              className="hover:text-secondary py-2 text-lg transition-all duration-300"
              href={"/form"}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              className="hover:text-secondary py-2 text-lg transition-all duration-300"
              href={"/admin"}
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