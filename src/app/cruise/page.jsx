"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import cruise from "../../../public/cruise.webp";
import a1 from "../../../public/a1.jpg";
import a2 from "../../../public/a2.png";
import a3 from "../../../public/a3.jpg";
import a4 from "../../../public/a4.jpg";

const page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[42vh] md:h-[50vh]">
        <div className="absolute inset-0 bg-black">
          <Image
            src={cruise}
            alt="Cruises"
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
            Cruises
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl font-serif"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
           
          >
            Choose a vacation on the ocean
          </motion.p>
        </div>
      </section>

      {/* Cruises Section */}
      <div className="w-full py-8 px-4 md:px-12 bg-gradient-to-b from-white via-gray-100 to-gray-200 shadow-lg rounded-lg">
        <motion.h1
          className="text-4xl md:text-7xl font-bold  text-secondary text-center md:text-left mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.08, textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }}
        >
          Cruises
        </motion.h1>
        <div className="container mx-auto">
          <div className="max-w-full mx-auto space-y-8 px-4 md:px-12">
            {[
              {
                title: "Caribbean",
                description:
                  "The Caribbean is one of the most popular cruise destinations in the world, known for its beautiful beaches, crystal-clear waters, and tropical climate. Popular ports of call include Nassau, Cozumel, and St. Thomas.",
              },
              {
                title: "Mediterranean",
                description:
                  "The Mediterranean is another popular cruise destination, with its ancient cities, stunning coastline, and rich history. Popular ports of call include Barcelona, Rome, and Santorini.",
              },
              {
                title: "Alaska",
                description:
                  "Alaska offers some of the most breathtaking natural scenery in the world, with its glaciers, fjords, and wildlife. Popular ports of call include Ketchikan, Juneau, and Skagway.",
              },
              {
                title: "Northern Europe",
                description:
                  "Northern Europe offers a unique and diverse range of cultures and landscapes, from the fjords of Norway to the castles of Scotland. Popular ports of call include Copenhagen, St. Petersburg, and Amsterdam.",
              },
              {
                title: "South Pacific",
                description:
                  "The South Pacific is a tropical paradise, with its turquoise waters, coral reefs, and lush islands. Popular ports of call include Bora Bora, Fiji, and Tahiti.",
              },
              {
                title: "Asia",
                description:
                  "Asia offers a rich cultural and historical experience, with its ancient temples, bustling cities, and delicious cuisine. Popular ports of call include Tokyo, Shanghai, and Hong Kong.",
              },
            ].map((cruise, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-300 pb-4 last:border-b-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.08 }}
              >
                <h3 className="text-2xl mb-2 trips-exotica-gold font-bold">
                  {cruise.title}:
                </h3>
                <p className="text-gray-700 text-lg font-bold">
                  {cruise.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-white py-8 px-4 md:px-12 flex flex-col md:flex-row items-center">
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <video
            src="https://cdn.pixabay.com/video/2020/10/12/52185-478214404_tiny.mp4"
            autoPlay
            loop
            muted
            className="rounded-2xl w-full md:w-[600px] h-auto shadow-lg"
          />
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-xl font-bold font-mono text-stone-500">
            Your Tour
          </h2>
          <h1 className="text-4xl md:text-6xl font-extrabold  text-secondary mb-3">
            
            Your way
          </h1>
          <p className="text-base md:text-lg text-neutral-600 mt-4 leading-relaxed">
            A luxury cruise refers to a type of cruise vacation that is
            characterized by upscale amenities, personalized service, and a
            focus on relaxation and indulgence. Luxury cruises typically
            feature spacious and elegantly appointed accommodations, gourmet
            dining options, top-of-the-line onboard facilities, and a variety
            of activities and entertainment options.
          </p>
          <div className="mt-5">
            <Link
              href="/form"
              className="text-2xl font-bold text-stone-700 hover:text-stone-400"
            >
              Book Now
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Associations Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold font-serif text-primary mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Association
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-muted leading-relaxed max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Wellcome Tours is a paradigm of convenient and secured travel for
            all. It is your one-stop destination to find the best and exotic
            domestic or international travel deals.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-8">
            {[a1, a2, a3, a4].map((image, index) => (
              <motion.div
                key={index}
                className="w-50 h-40 flex items-center justify-center bg-white shadow-lg rounded-lg p-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: index * 0.1 }}
                whileHover={{ scale: 1.3}}
              >
                <Image
                  src={image}
                  alt={`Partner ${index + 1}`}
                  width={120}
                  height={80}
                  className="max-w-full max-h-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;