"use client";
import React from "react";
import { Carousel } from "flowbite-react";

const Slider = ({ review = [] }) => {
  return (
    <div className="h-[300px] w-[380] md:w-[500px]  "> <br /> <br />
      <Carousel className="h-full w-full">
        {review.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <h1>No reviews available</h1>
          </div>
        ) : (
          review.map((user, index) => (
            <div key={user._id || index} className=" h-full w-[250] md:w-[350] mr-20  mt-20 md:mr-10 ">
              
              <h1 className="text-xl font-bold font-mono text-stone-500"> {user.review}</h1> <br />
              <h1 className="text-xl font-bold text-black">  {user.name}</h1>
            </div>
          ))
        )}
      </Carousel> <br /> <br />
    </div> 
  );
};

export default Slider;