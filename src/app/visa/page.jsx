"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import visa from "../../../public/visa.jpg";

const page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[42vh] md:h-[50vh]">
        <div className="absolute inset-0 bg-black">
          <Image
            src={visa}
            alt="Visa"
            fill
            className="object-cover opacity-80"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center text-white text-left p-4 md:ml-24 md:mt-10">
          <motion.h1
            className="trips-exotica-header font-serif text-3xl md:text-7xl font-bold mb-2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            >
            Visa
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl font-serif"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
           
          >
            Immigration & Visa Consulting
          </motion.p>
        </div>
      </section>

      {/* Visa Details Section */}
      <div className="w-full py-8 px-4 md:px-12 bg-gradient-to-b from-white via-gray-100 to-gray-200 shadow-lg rounded-lg">
        <motion.h1
          className="text-4xl md:text-7xl font-bold font-serif text-secondary text-center md:text-left mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.06 ,textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)", hanging: "0px 0px 10px rgba(0, 0, 0, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          
        >
          Visa
        </motion.h1>
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Text Section */}
          <motion.div
            className="w-full md:w-1/2 px-4 md:px-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <motion.p
              className="text-base md:text-xl italic font-serif text-stone-800 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              
            >
              Travel Visas are required to gain entry to most countries around
              the world. For instance, you will need a visa to USA, Canada,
              England, China, Australia, Middle East, just to name a few of the
              popular destinations. There are a few certain countries that
              simply require an available Visa page in your current Passport to
              be stamped at the airport upon arrival, but in most cases one will
              need to acquire a Travel Visa before even departing from India.
              Many international travelers are often not sure of the
              documentation required to enter foreign countries. Visa is an
              official entry permit to your required destination.
            </motion.p>
            <div className="mt-5 text-center md:text-left">
              <motion.a
                href="tel:+919811110850"
                className="text-2xl md:text-3xl font-bold text-secondary hover:text-stone-400"
                whileHover={{ scale: 1.1, textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                Call Now
              </motion.a>
            </div>
          </motion.div>

          {/* Video Section */}
          <motion.div
            className="w-full md:w-1/2 mt-8 md:mt-0 px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            whileHover={{ scale: 1.1 }}
          >
            <video
              src="https://media.istockphoto.com/id/1485306959/video/hands-holding-application-for-schengen-visa-with-stamp-approved-closeup-4k-movie-slow-motion.mp4?s=mp4-640x640-is&k=20&c=QEIItAGK0jp8kBVJjsrXZCasF_cY0saME6KffYDOrCo="
              autoPlay
              loop
              muted
              className="rounded-2xl w-full h-auto shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default page;