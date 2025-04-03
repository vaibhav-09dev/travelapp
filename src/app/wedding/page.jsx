"use client";
import React from "react";
import Image from "next/image";
import pic1 from "../../../public/pic1.jpg";
import dynamic from "next/dynamic";

// Dynamically import Wedding2 and Wedding3
const Wedding2 = dynamic(() => import("@/components/Wedding2"), { ssr: false });
const Wedding3 = dynamic(() => import("@/components/Wedding3"), { ssr: false });

const Page = () => {
  return (
    <div className="bg-background text-text">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[60vh]">
        <div className="absolute inset-0 bg-black">
          <Image
            src={pic1}
            alt="Wedding Destination"
            fill
            className="object-cover opacity-80"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-7xl font-bold font-serif mb-4">
            Destination Weddings
          </h1>
          <p className="text-lg md:text-xl font-sans italic">
            Make your dream wedding a reality
          </p>
        </div>
      </section>

      {/* Wedding Details Section */}
      <div className="w-full h-auto py-16 px-4 md:px-36 bg-white">
        <h2 className="text-lg md:text-xl font-bold font-mono text-primary text-left mb-4">
          Plan the perfect day...
        </h2>
        <h1 className="text-4xl  md:text-6xl font-extrabold text-stone-600 font-serif text-secondary text-left mb-6">
          WEDDINGS
        </h1>
        <p className="text-base md:text-xl italic font-serif font text-muted leading-relaxed">
          Are you dreaming of a romantic and unforgettable destination wedding?
          Look no further than our travel company's destination wedding
          services! We specialize in creating magical weddings in some of the
          world's most stunning locations.
          <br />
          <br />
          Our experienced team of wedding planners will work closely with you
          to craft a personalized wedding experience that reflects your unique
          style and preferences. From the moment you contact us, we'll guide
          you through every step of the planning process, ensuring that your
          wedding day is stress-free and flawless.
          <br />
          <br />
          We offer a wide range of destination wedding packages, each designed
          to suit different tastes and budgets. Whether you're dreaming of a
          beach wedding in the Caribbean, a vineyard wedding in Tuscany, or a
          mountaintop wedding in Colorado, we can make it happen.
          <br />
          <br />
          Our destination wedding packages include everything from venue
          selection and decoration to catering, entertainment, and
          transportation. We work with a carefully curated network of vendors,
          ensuring that every aspect of your wedding is of the highest quality.
          <br />
          <br />
          We understand that planning a destination wedding can be overwhelming,
          especially if you're unfamiliar with the location. That's why we
          provide on-site support for all of our weddings, ensuring that
          everything runs smoothly from start to finish.
        </p>
        
      </div>

      {/* Additional Wedding Sections */}
      <div className="py-8 px-4 bg-background">
        <h2 className="text-3xl md:text-5xl font-bold underline font-serif text-primary text-center mb-12">
          Explore Our Wedding Packages
        </h2>
        <div className="md:h-[500] h-[570] pb-16">
          <Wedding2 />
        </div>
        <div className="mt-12 pt-16">
          <Wedding3 />
        </div>
      </div>
    </div>
  );
};

export default Page;