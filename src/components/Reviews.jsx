"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "./Slider";

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
      alert("Failed to fetch reviews. Please try again later.");
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
      alert(error.response?.data?.message || "Failed to send the review. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-around items-center h-auto w-full mb-4 border-stone-700 border-2 p-8 bg-gray-50 rounded-lg shadow-lg">
      {/* Form Section */}
      <div className="h-auto md:h-[400px] w-full md:w-[50%] md:ml-8 mt-8 md:mt-0">
        <h1 className="text-3xl md:text-5xl text-primary font-bold font-serif text-center md:text-left mb-6">
          Write Your Experience
        </h1>
        <input
          type="text"
          placeholder="Enter Name"
          value={review.name}
          onChange={(e) => setreview({ ...review, name: e.target.value })}
          className="border-gray-300 text-gray-700 h-[50px] rounded-lg border bg-white w-full md:w-[90%] text-left text-lg md:text-xl mt-4 p-4 shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
        />
        <textarea
          placeholder="Enter Review"
          value={review.review}
          onChange={(e) => setreview({ ...review, review: e.target.value })}
          className="border-gray-300 text-gray-700 rounded-lg border bg-white w-full md:w-[90%] text-left text-lg md:text-xl mt-4 p-4 shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
          rows={5}
        />
        <button
          onClick={click}
          className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-lg text-lg px-6 py-3 text-center mt-6 w-full md:w-auto shadow-lg transition-all duration-300"
        >
          Submit Review
        </button>
      </div>

      {/* Slider Section */}
      <div className="h-auto md:h-[400px] w-full md:w-[50%] md:ml-8 mt-8 md:mt-0">
        <Slider review={allReviews} />
      </div>
    </div>
  );
};

export default Reviews;