"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import hotels1 from "../../../public/hotels1.jpg";
import hotels from "../../../public/hotels.jpg";

const page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[42vh] md:h-[50vh]">
        <div className="absolute inset-0 bg-black">
          <Image
            src={hotels1}
            alt="Hotels"
            fill
            className="object-cover opacity-80"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center text-white text-left p-4 md:ml-24 md:mt-10">
          <h1 className="trips-exotica-header font-serif text-3xl md:text-7xl font-bold mb-2">
            Hotels
          </h1>
          <p className="text-xl md:text-2xl font-serif">The Best for Your Rest</p>
        </div>
      </section>

      {/* Hotels Section */}
      <div className="w-full py-8 px-4 md:px-12">
        <h1 className="text-4xl md:text-7xl font-bold font-serif text-stone-600 text-center md:text-left mb-8">
          Hotels
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Text Section */}
          <div className="w-full md:w-1/2 px-4 md:px-8">
            <p className="text-base md:text-xl italic font-serif text-stone-800 leading-relaxed">
              Welcome to our luxury hotels section, where you'll find some of
              the most exquisite accommodations in the world. We have scoured
              the globe to bring you the best of the best in luxury hospitality,
              from chic boutique hotels to sprawling resorts. Our collection
              includes some of the most iconic properties on the planet, each
              offering its own unique blend of style, comfort, and indulgence.
              <br />
              <br />
              Step into a world of opulence and sophistication, where every
              detail has been carefully considered to ensure an unforgettable
              experience. From the moment you arrive, you'll be greeted with
              warm hospitality and impeccable service. Whether you're looking
              for a romantic retreat, a family vacation, or a solo escape, our
              luxury hotels offer something for everyone.
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

          {/* Image Section */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 px-4">
            <Image
              src={hotels}
              alt="Luxury Hotels"
              className="rounded-3xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;