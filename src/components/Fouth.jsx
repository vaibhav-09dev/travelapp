"use client";

import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import Link from "next/link";

const Fouth = () => {
  return (
    <div className="h-auto w-full bg-neutral-100 py-8 px-4 md:px-8">
      {/* Heading Section */}
      <div className="flex justify-center items-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center font-serif text-stone-500">
          Get Inspired
        </h2>
      </div>

      {/* Infinite Moving Cards Section */}
      <div className="mt-8">
        <div className="h-auto w-[292] md:w-full rounded-md flex flex-col items-center  relative">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="fast"
          />
        </div>

        {/* Explore All Button */}
        <div className="flex justify-center items-center mt-6">
          <Link
            href={"/destinations"}
            className="text-lg md:text-2xl font-bold hover:text-stone-600 transition-all duration-300"
          >
            Explore All
          </Link>
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    name: "Charles Dickens",
    title:
      "https://media.istockphoto.com/id/1131534768/photo/rome-italy-papal-basilica-of-st-peter-in-the-vatican-sightseeing-boat-floating-near-aelian.jpg?s=612x612&w=0&k=20&c=NW4905Y9_w6WjsLbzSvP3QcKzbhTE_aldAlEBOuaKpw=",
  },
  {
    name: "William Shakespeare",
    title:
      "https://media.istockphoto.com/id/1368957081/photo/giraffes-and-mount-kilimanjaro-in-amboseli-national-park.jpg?s=612x612&w=0&k=20&c=i2MSN54isrXzqP--X3b6QFhMcR0Ep5O7byaSn_qaqe4=",
  },
  {
    name: "Edgar Allan Poe",
    title:
      "https://media.istockphoto.com/id/1815540289/photo/aerial-view-of-train-passing-through-famous-mountain-in-filisur-switzerland-landwasser.jpg?s=612x612&w=0&k=20&c=eA1I9wkRED8W9fGMHplAMKiBq2QGnIvPsp-3JiS6uNI=",
  },
  {
    name: "Jane Austen",
    title:
      "https://media.istockphoto.com/id/1309789789/photo/carnival-vista-cruise-ship.jpg?s=612x612&w=0&k=20&c=FBeAadE7QamzZquaVTQfgYMCSRG2-RFjprmGjkeku1I=",
  },
  {
    name: "Herman Melville",
    title: "https://cdn.pixabay.com/photo/2020/09/07/13/12/buildings-5551816_1280.jpg",
  },
];

export default Fouth;