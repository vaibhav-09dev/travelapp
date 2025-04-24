"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../components/ui/images-slider";
import { useRouter } from "next/navigation";

const First = () => {
  const router = useRouter();
  const images = [
    "https://www.chardham.in/uploads/chardham-yatra-guide.jpg",
    "https://www.shikhar.com/blog/wp-content/uploads/2023/01/chardham-yatra-by-Helicopter.jpg",
    "https://media.cntravellerme.com/photos/650af944349d8c31fad3d512/2:1/w_2560%2Cc_limit/LONDON%2520GettyImages-1286286521.jpg",
    "https://static.toiimg.com/photo/112543368.cms",
    "https://www.worldatlas.com/upload/88/3b/8e/pura-ulun-danu-bratan-temple-bali-indonesia-guitar-photographer.jpg",
    "https://cdn.britannica.com/82/195482-050-2373E635/Amalfi-Italy.jpg",
  ];

  const des = () => {
    router.push("/destinations");
  };

  return (
    
    
    <ImagesSlider className="h-[30rem] md:h-[45rem] lg:h-[50rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center text-center px-4"
      >
        {/* Heading */}
        <motion.p
          className="font-bold text-xl md:text-4xl lg:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, delay: 0.3 }}
        >
          Travel far and wide, <br /> and make memories that will last a lifetime.
        </motion.p>

        {/* Button */}
        <motion.button
          onClick={des}
          className="px-4 py-2 md:px-6 md:py-3 bg-primary text-white font-semibold text-sm md:text-lg rounded-full shadow-lg hover:bg-secondary transition-all duration-300 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0, delay: 0 }}
          whileHover={{ scale: 1.5, textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Now →
        </motion.button>
      </motion.div>
    </ImagesSlider>
  );
};

export default First;