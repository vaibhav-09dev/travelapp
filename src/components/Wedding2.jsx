"use client";
import React from "react";
import RollingGallery from "../components/ui/RollingGallery";

const Wedding2 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-12 py-0 bg-background">
      {/* Text Section */}
      <div className="md:ml-10 md:mb-0 md:w-1/2">
        <h2 className="text-lg md:text-xl font-bold font-mono italic text-primary mb-2">
          Your Wedding
        </h2>
        <h1 className="text-4xl md:text-6xl font-extrabold text-stone-600 font-serif text-secondary mb-6">
          Your Way...
        </h1>
        <p className="text-base md:text-xl  font-medium italic font-serif text-muted leading-relaxed">
          At our travel company, we believe that every couple deserves the
          wedding of their dreams. Let us make your destination wedding a
          reality. Contact us today to learn more about our destination wedding
          services and start planning your dream wedding.
        </p>
        
      </div>

      {/* Rolling Gallery Section */}
      <div className="w-full md:w-[800px] mt-10 md:mt-0">
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>
    </div>
  );
};

export default Wedding2;