"use client";

import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import Link from "next/link";
import Image from "next/image";
import p1 from "../../public/p1.jpg"
import p2 from "../../public/p2.jpg"
import p3 from "../../public/p3.jpg"
import p4 from "../../public/p4.jpg"
import p5 from "../../public/p5.jpg"
import p6 from "../../public/p6.jpg"
import p7 from "../../public/p7.jpg"
import p8 from "../../public/p8.jpg"
import p9 from "../../public/p9.jpg"
import p10 from "../../public/p10.jpg"
import { useRouter } from "next/navigation";

const Fouth = () => {
  const router=useRouter();
  const send=()=>{
    router.push("/form")

  }
 

  return (
    <div className="h-auto w-full  py-16 px-4 md:px-8 bg-white">
    {/* Heading Section */}
    <section className=" text-black py-16 px-8 rounded-lg shadow-2xl text-stone-600 ">
      <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">
        Plan Your Dream Vacation
      </h1>
      <p className="text-lg md:text-xl font-serif text-muted-light italic mb-6">
        Explore the world with our exclusive travel packages and create unforgettable memories.
      </p>
      <button onClick={send} className="bg-secondary text-black px-8 py-4 rounded-lg shadow-md hover:bg-accent transition-all duration-300">
        Get Started
      </button>
    </section>
      {/* Infinite Moving Cards Section */}
      <div className="mt-16">
        
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
    <div className="h-auto w-full py-16 bg-gray-100">
  <h1 className="text-3xl md:text-5xl font-bold font-serif text-center text-primary mb-8">
    Our Past Trips
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-12">
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Image
        src={p1}
        width={500}
        height={200}
        alt="Past Trip 1"
        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
      />
    </div>
   
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Image
        src={p4}
        width={300}
        height={200}
        alt="Past Trip 4"
        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Image
        src={p5}
        width={300}
        height={200}
        alt="Past Trip 4"
        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Image
        src={p6}
        width={300}
        height={200}
        alt="Past Trip 4"
        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Image
        src={p7}
        width={300}
        height={200}
        alt="Past Trip 4"
        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Image
        src={p8}
        width={300}
        height={200}
        alt="Past Trip 4"
        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Image
        src={p9}
        width={300}
        height={200}
        alt="Past Trip 4"
        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Image
        src={p10}
        width={300}
        height={200}
        alt="Past Trip 4"
        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
      />
    </div>

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