"use client";
import React from "react";
import Image from "next/image";
import cruise1 from "../../public/cruise1.jpg";
import Link from "next/link";

const Third = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-[600px] w-full bg-white px-4 md:px-0">
      {/* Image Section */}
      <div className="h-auto md:h-[620px] w-full md:w-[900px] flex justify-center">
        <Image
          src={cruise1}
          alt="cruise"
          className="rounded-lg"
          height={620}
          width={900}
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Text Section */}
      <div className="h-auto md:h-[600px] w-full md:w-[500px] text-center md:text-left mt-10 md:mt-36 md:ml-16">
        <h2 className="text-lg md:text-xl font-bold font-serif text-stone-600">
          Quick
        </h2>
        <h1 className="text-4xl md:text-6xl font-extrabold font-serif text-stone-600">
          SERVICES
        </h1>
        <br />
        <p className="font-mono text-neutral-600 text-sm md:text-base">
          As one of the fastest growing Luxury travel companies, Wellcome Tours
          offers an extensive selection of hotels, flights, bus, and tour
          packages to meet every specific need of individual, group, and
          corporate clients.
        </p>
        <br />
        <div className="text-2xl md:text-4xl font-mono text-stone-400">
          <Link href={"/"} className="hover:text-stone-700">
            <h1>Super Yachts</h1>
          </Link>
          <br />
          <Link href={"/"} className="hover:text-stone-700">
            <h1>Cruises</h1>
          </Link>
          <br />
          <Link href={"/"} className="hover:text-stone-700">
            <h1>Hotels</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Third;