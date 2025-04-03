"use client";
import React from "react";
import Image from "next/image";
import cruise1 from "../../public/cruise1.jpg";
import Link from "next/link";

const Third = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-[600px] w-full bg-background px-4 md:px-8 py-16">
      {/* Image Section */}
      <div className="h-auto md:h-[620px] w-full md:w-[900px] flex justify-center">
        <Image
          src={cruise1}
          alt="Luxury Cruise"
          className="rounded-lg shadow-lg"
          height={620}
          width={900}
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Text Section */}
      <div className="h-auto md:h-[600px] w-full md:w-[500px] text-center md:text-left mt-10 md:mt-0 md:ml-16">
        <h2 className="text-xl md:text-2xl font-bold font-serif text-primary">
          Quick
        </h2>
        <h1 className="text-4xl md:text-6xl font-extrabold font-serif italic text-stone-500 text-secondary mb-6">
          SERVICES
        </h1>
        <p className="font-sans text-muted font-medium text-base md:text-lg leading-relaxed mb-6">
          As one of the fastest-growing luxury travel companies, Wellcome Tours
          offers an extensive selection of hotels, flights, buses, and tour
          packages to meet every specific need of individual, group, and
          corporate clients.
        </p>

        {/* Links Section */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 text-lg md:text-4xl text-stone-600 font-bold text-primary font-serif">
          <Link href={"/cruise"} className="hover:text-secondary transition-all">
            Cruises
          </Link>
          <Link href={"/visa"} className="hover:text-secondary transition-all">
            Visa
          </Link>
          <Link href={"/hotels"} className="hover:text-secondary transition-all">
            Hotels
          </Link>
          <Link href={"/form"} className="hover:text-secondary transition-all">
            Yachts
          </Link>
          <Link href={"/form"} className="hover:text-secondary transition-all">
            Flights
          </Link>
          <Link href={"/form"} className="hover:text-secondary transition-all">
            Travel
          </Link>
          <Link href={"/form"} className="hover:text-secondary transition-all">
            Insurance
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Third;