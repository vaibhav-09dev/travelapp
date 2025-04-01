"use client";
import React, { useState, useEffect } from "react";
import { Carousel } from "flowbite-react";
import Slider from "./Slider";
import axios from "axios";

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
        alert("Request sent successfully!");
        setreview({ name: "", review: "" });
        fetchReviews();
      });
    } catch (error) {
      console.error("Error in sending review:", error.message);
      alert(error.response?.data?.message || "Failed to send the review. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-around items-center h-auto w-full mb-4 border-stone-700 border-2 p-4">
      {/* Form Section */}
      <div className="h-auto md:h-[400px] w-full md:w-[50%] md:ml-8 mt-8 md:mt-0">
        <h1 className="text-3xl md:text-5xl text-stone-600 font-bold font-serif text-center md:text-left">
          Write your Experience
        </h1>
        <br />
        <input
          type="name"
          placeholder="Enter Name"
          value={review.name}
          onChange={(e) => setreview({ ...review, name: e.target.value })}
          className="border-gray-700 text-gray-700 h-[40px] rounded-md border bg-transparent w-full md:w-[90%] text-left text-lg md:text-xl mt-5 p-2"/>
        <br />
        <textarea
          type="review"
          placeholder="Enter Review"
          value={review.review}
          onChange={(e) => setreview({ ...review, review: e.target.value })}
          className="border-gray-700 text-gray-700 rounded-md border bg-transparent w-full md:w-[90%] text-left text-lg md:text-xl mt-5 p-2"
          rows={5}
        />
        <br />
        <button
          onClick={click}
          className="text-stone-500 hover:text-white border border-stone-600 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mt-4 w-full md:w-auto"
        >
          Send Review
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