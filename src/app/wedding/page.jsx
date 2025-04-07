"use client";
import React from "react";
import Image from "next/image";
import pic1 from "../../../public/pic1.jpg";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// Dynamically import Wedding2 and Wedding3
const Wedding2 = dynamic(() => import("@/components/Wedding2"), { ssr: false });
const Wedding3 = dynamic(() => import("@/components/Wedding3"), { ssr: false });

const Page = () => {
  return (
    <div className="bg-background text-text">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[60vh]">
        <div className="absolute inset-0 bg-black">
          <Image
            src={pic1}
            alt="Wedding Destination"
            fill
            className="object-cover opacity-80"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-7xl font-bold font-serif mb-4">
            Destination Weddings
          </h1>
          <p className="text-lg md:text-xl font-sans italic">
            Make your dream wedding a reality
          </p>
        </div>
      </section>

      {/* Wedding Details Section */}
     {/* Wedding Details Section */}
     <div className="w-full h-auto py-16 px-4 md:px-36 bg-gradient-to-b from-blue-50 via-gray-100 to-gray-200 shadow-xl rounded-lg">
     <motion.h2
    className="text-lg md:text-xl font-bold font-mono text-primary text-left mb-4"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    Plan the perfect day...
  </motion.h2>
  <motion.h1
    className="text-4xl md:text-6xl font-extrabold text-secondary font-serif text-secondary text-left mb-6"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
    whileHover={{ scale: 1.1 }}
  >
    WEDDINGS
  </motion.h1>
  <motion.p
    className="text-base md:text-xl  font-serif text-muted leading-relaxed"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 3 }}
  >
    Are you dreaming of a romantic and unforgettable destination wedding? Look
    no further than our travel company's destination wedding services! We
    specialize in creating magical weddings in some of the world's most
    stunning locations.
    <br />
    <br />
    Our experienced team of wedding planners will work closely with you to
    craft a personalized wedding experience that reflects your unique style and
    preferences. From the moment you contact us, we'll guide you through every
    step of the planning process, ensuring that your wedding day is stress-free
    and flawless.
    <br />
    <br />
    We offer a wide range of destination wedding packages, each designed to
    suit different tastes and budgets. Whether you're dreaming of a beach
    wedding in the Caribbean, a vineyard wedding in Tuscany, or a mountaintop
    wedding in Colorado, we can make it happen.
    <br />
    <br />
    Our destination wedding packages include everything from venue selection
    and decoration to catering, entertainment, and transportation. We work
    with a carefully curated network of vendors, ensuring that every aspect of
    your wedding is of the highest quality.
    <br />
    <br />
    We understand that planning a destination wedding can be overwhelming,
    especially if you're unfamiliar with the location. That's why we provide
    on-site support for all of our weddings, ensuring that everything runs
    smoothly from start to finish.
  </motion.p>
</div>

{/* Additional Wedding Sections */}
<div className="py-16 px-4 bg-gradient-to-b from-gray-100 to-gray-200">
  
  <div className="md:h-[500] h-[570] pb-8">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
    >
      <Wedding2 />
    </motion.div>
  </div>
  <div className="mt-12 pt-4">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.3 }}
    >
      <Wedding3 />
    </motion.div>
  </div>
</div>
    </div>
  );
};

export default Page;