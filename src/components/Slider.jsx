"use client";
import React from "react";
import { motion } from "framer-motion";

const Slider = () => {
  const reviews = [
    {
      text: "We had a fantastic experience on our Dubai tour with Welcome Tours. The trip was well-organized and meticulously planned, with no delays or issues throughout. The hotel recommended to us was exceptional, adding to the overall enjoyment of our trip. Our experience with Welcome Tours was truly amazing.",
      name: "Pooja Saluja",
    },
    {
      text: "Visited Kumbh on 13-14 Feb through Wellcome Tours. Had an amazing experience; everything was very well explained and coordinated. Thanks, Ankur ji 🙏.",
      name: "Sanjeev Jain",
    },
    {
      text: "I recently took a car with Wellcome Tours and was thoroughly impressed! The car provided was in excellent condition and very comfortable. The driver was professional, friendly, and knew the area well. Overall, a fantastic experience that I highly recommend. Will definitely be booking with Wellcome Tours again!",
      name: "Purab Bhatia",
    },
    {
      text: "Working with Wellcome Tours was an absolute pleasure from start to finish. Their attention to detail, prompt communication, and expert knowledge made planning our trip effortless. They went above and beyond to tailor the itinerary to our preferences and budget, ensuring every aspect of our journey exceeded expectations. I highly recommend them to anyone looking for a seamless and unforgettable travel experience.",
      name: "Gaurav Goel",
    },
    {
      text: "Wonderful experience with Wellcome Tours and very good support and nice management during the trip of DoDham Yatra. Very nice hotel management and also darshan and local sightseeing. My experience was very good with Wellcome Tours.",
      name: "Samir Kumar Sharma",
    },
    {
      text: "My trip to Badrinath and Kedarnath Yatra was very well planned by Ankur Kalra from Wellcome Tours. From booking till darshan and return, everything was completely hassle-free and seamless. I had an excellent experience visiting the temples and other sites. The car provided by them was very comfortable, and the driver and tour guide were very helpful and accommodating. I would highly recommend Wellcome Tours to my contact sphere.",
      name: "Radhika Arora",
    },
  ];

  return (
    <div className="relative w-full h-auto flex justify-center items-center bg-gray-50 rounded-lg shadow-lg overflow-hidden p-4 md:p-8">
      <motion.div
        className="flex space-x-6"
        initial={{ x: "10%" }}
        animate={{ x: 0 }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="min-w-[280px] md:min-w-[350px] lg:min-w-[400px]  p-6 rounded-lg shadow-md mx-4"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-gray-700 text-sm md:text-lg italic leading-relaxed">
              {review.text}
            </p>
            <h3 className="text-primary font-bold text-base md:text-xl mt-4">
              {review.name}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;