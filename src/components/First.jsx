"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "../components/ui/images-slider";
import { useRouter } from "next/navigation";

const First = () => {
  const router = useRouter();
  const images = [
    "https://www.chardham.in/uploads/chardham-yatra-guide.jpg",
    "https://media.cntravellerme.com/photos/650af944349d8c31fad3d512/2:1/w_2560%2Cc_limit/LONDON%2520GettyImages-1286286521.jpg",
    "https://static.toiimg.com/photo/112543368.cms",
    "https://www.worldatlas.com/upload/88/3b/8e/pura-ulun-danu-bratan-temple-bali-indonesia-guitar-photographer.jpg",
    "https://cdn.britannica.com/82/195482-050-2373E635/Amalfi-Italy.jpg",
  ];

  const des = () => {
    router.push("/destinations");
  };

  return (
    <ImagesSlider className="md:h-[45rem] h-[50rem] mt-20" images={images}>
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
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
        Travel far and wide, <br /> and make memories that will last a lifetime.
        </motion.p>
        <button onClick={des} className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Explore Now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
};

export default First;