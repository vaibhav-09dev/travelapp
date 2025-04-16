"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "./Slider";
import { motion } from "framer-motion";

const API_BASE_URL = "https://travelapp-acje.vercel.app"; // Replace with your actual API base URL

const Reviews = () => {
  const [review, setreview] = useState({
    name: "",
    review: "",
  });

  const [allReviews, setAllReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/Allreview`);
      setAllReviews(response.data.alluser || []);
    } catch (error) {
      console.error("Error fetching reviews:", error.message);
    }
  };

  const click = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/api/Reviewdata`, review).then((res) => {
        alert("Review submitted successfully!");
        setreview({ name: "", review: "" });
        fetchReviews();
      });
    } catch (error) {
      console.error("Error in sending review:", error.message);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-white h-auto w-full mb-8 p-6 md:p-12 rounded-lg shadow-lg">
      {/* Title Section */}
      <motion.h1
        className="text-2xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6 md:mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Clients Testimonials
      </motion.h1>

      {/* Slider Section */}
      <motion.div
        className="h-[500px] md:h-[400px] lg:h-[500px] w-full md:w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Slider reviews={allReviews} />
      </motion.div>
    </div>
  );
};

export default Reviews;