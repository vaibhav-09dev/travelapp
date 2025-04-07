"use client";
import { motion } from "framer-motion";
import CircularGallery from "../components/ui/CircularGallery";

const Second = () => {
  return (
    <div className="h-auto w-full flex flex-col md:flex-row justify-around items-center bg-background px-4 md:px-0">
      {/* Text Section */}
      <motion.div
        className="mt-10 md:mt-20 w-full font-bold md:w-[700px] md:ml-28 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h2
          className="font-bold text-xl text-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Explore the Popular
        </motion.h2>
        <motion.h1
          className="text-4xl md:text-7xl font-bold font-[cursive] italic text-stone-500 bg-clip-text bg-gradient-to-r from-primary to-secondary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          Destination
        </motion.h1>
        <br />
        <motion.p
          className="w-full md:w-[700px] font-serif italic text-muted font-medium text-base md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Welcome to our travel company, where we offer an exceptional range of
          domestic travel services that will take you on an adventure through
          some of the most beautiful and diverse destinations within your own
          country.
        </motion.p>
      </motion.div>

      {/* Circular Gallery Section */}
      <motion.div
        style={{ height: "400px", position: "relative" }}
        className="w-full md:w-1/2 mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.1, bend: 5}}
        whileTap={{ scale: 0.9 }}
      >
        <CircularGallery bend={0} textColor="black" borderRadius={0.05} />
      </motion.div>
    </div>
  );
};

export default Second;