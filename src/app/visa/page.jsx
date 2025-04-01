"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import visa from "../../../public/visa.jpg";

const page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[42vh] md:h-[50vh]">
        <div className="absolute inset-0 bg-black">
          <Image
            src={visa}
            alt="Visa"
            fill
            className="object-cover opacity-80"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center text-white text-left p-4 md:ml-24 md:mt-10">
          <h1 className="trips-exotica-header font-serif text-3xl md:text-7xl font-bold mb-2">
            Visa
          </h1>
          <p className="text-xl md:text-2xl font-serif">
            Immigration & Visa Consulting
          </p>
        </div>
      </section>

      {/* Visa Details Section */}
      <div className="w-full py-8 px-4 md:px-12">
        <h1 className="text-4xl md:text-7xl font-bold font-serif text-stone-600 text-center md:text-left mb-8">
          Visa
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Text Section */}
          <div className="w-full md:w-1/2 px-4 md:px-8">
            <p className="text-base md:text-xl italic font-serif text-stone-800 leading-relaxed">
              Travel Visas are required to gain entry to most countries around
              the world. For instance, you will need a visa to USA, Canada,
              England, China, Australia, Middle East, just to name a few of the
              popular destinations. There are a few certain countries that
              simply require an available Visa page in your current Passport to
              be stamped at the airport upon arrival, but in most cases one will
              need to acquire a Travel Visa before even departing from India.
              Many international travelers are often not sure of the
              documentation required to enter foreign countries. Visa is an
              official entry permit to your required destination.
            </p>
            <div className="mt-5 text-center md:text-left">
              <a
                href="tel:+919811110850"
                className="text-2xl md:text-3xl font-bold text-stone-700 hover:text-stone-400"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Video Section */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 px-4">
            <video
              src="https://media.istockphoto.com/id/2118632455/video/panoramic-view-from-the-heights-of-new-york-city-view-through-the-window-of-the-airplane.mp4?s=mp4-480x480-is&k=20&c=MJvCj6VCQlBztkMVj4sgFsVwJZVuj3e4NgE6hRQPxIk="
              autoPlay
              loop
              muted
              className="rounded-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;