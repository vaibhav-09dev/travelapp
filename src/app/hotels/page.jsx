"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import hotels1 from "../../../public/hotels1.jpg";
import hotels from "../../../public/hotels.jpg";

const page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[42vh] md:h-[50vh]">
        <div className="absolute inset-0 bg-black">
          <Image
            src={hotels1}
            alt="Hotels"
            fill
            className="object-cover opacity-80"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center text-white text-left p-4 md:ml-24 md:mt-10">
          <motion.h1
            className="trips-exotica-header font-serif text-3xl md:text-7xl font-bold mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hotels
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl font-serif"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
           
          >
            The Best for Your Rest
          </motion.p>
        </div>
      </section>

      {/* Hotels Section */}
      <div className="w-full py-8 px-4 md:px-12 bg-gradient-to-b from-white via-gray-100 to-gray-200 shadow-lg rounded-lg">
        <motion.h1
          className="text-4xl md:text-7xl  font-bold font-serif text-secondary text-center md:text-left mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.06, textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }}
        >
          Hotels
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
              className="text-base md:text-xl  font-serif text-stone-800 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              
            >
              Welcome to our luxury hotels section, where you'll find some of
              the most exquisite accommodations in the world. We have scoured
              the globe to bring you the best of the best in luxury hospitality,
              from chic boutique hotels to sprawling resorts. Our collection
              includes some of the most iconic properties on the planet, each
              offering its own unique blend of style, comfort, and indulgence.
              <br />
              <br />
              Step into a world of opulence and sophistication, where every
              detail has been carefully considered to ensure an unforgettable
              experience. From the moment you arrive, you'll be greeted with
              warm hospitality and impeccable service. Whether you're looking
              for a romantic retreat, a family vacation, or a solo escape, our
              luxury hotels offer something for everyone.
            </motion.p>
            <div className="mt-5 text-center md:text-left">
              <motion.a
                href="tel:+919811110850"
                className="text-2xl md:text-3xl font-bold text-secondary hover:text-stone-400"
                whileHover={{ scale: 1.1,  }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                Call Now
              </motion.a>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/2 mt-8 md:mt-0 px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            whileHover={{ scale: 1.1 }}
          >
            <Image
              src={hotels}
              alt="Luxury Hotels"
              className="rounded-3xl w-full h-auto shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default page;