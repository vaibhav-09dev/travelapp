"use client";
import React from "react";
import RollingGallery from "../components/ui/RollingGallery";

const Wedding2 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-12 ">
      {/* Text Section */}
      <div className="md:ml-10  md:mb-0">
        <h2 className="text-lg md:text-xl font-bold font-mono italic text-stone-400">
          Your Wedding
        </h2>
        <h1 className="text-4xl md:text-7xl font-extrabold font-serif text-stone-600">
          Your way...
        </h1>
        <br />
        <p className="text-base md:text-xl font-bold italic font-serif text-stone-800 text-left md:mr-10">
          At our travel company, we believe that every couple deserves the
          wedding of their dreams. Let us make your destination wedding a
          reality. Contact us today to learn more about our destination wedding
          services and start planning your dream wedding.
        </p>
      </div>

      {/* Rolling Gallery Section */}
      <div className="w-full md:w-[800px]">
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>
    </div>
  );
};

export default Wedding2;