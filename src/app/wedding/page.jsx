"use client";
import React from "react";
import Image from "next/image";
import pic1 from "../../../public/pic1.jpg";
import Wedding2 from "@/components/Wedding2";
import Wedding3 from "@/components/Wedding3";

const page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] mt-20">
        <div className="absolute inset-0 bg-black">
          <Image
            src={pic1}
            alt="About Us"
            fill
            className="object-cover opacity-80"
          />
        </div>
      </section>

      {/* Wedding Details Section */}
      <div className="w-full h-auto py-8 px-4 md:px-36">
        <h2 className="text-lg md:text-xl font-bold font-mono text-black text-left mb-4">
          Plan the perfect day...
        </h2>
        <h1 className="text-4xl md:text-7xl font-bold font-serif text-black text-left mb-6">
          WEDDINGS
        </h1>
        <p className="text-base md:text-xl italic font-serif text-stone-800 text-left font-bold leading-relaxed">
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
      </div> <br />

      {/* Additional Wedding Sections */}
      <div className="md:h-[500] h-[570] ">
        <Wedding2 />
      </div>
      <div className="">
        <Wedding3 />
      </div>
    </div>
  );
};

export default page;