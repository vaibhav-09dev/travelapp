"use client";
import React from "react";
import Image from "next/image";
import domestic from "../../../public/domestic.jpg";
import { FocusCards2 } from "@/components/ui/focus-cards 2";
import dd1 from "../../../public/dd1.webp";
import dd2 from "../../../public/dd2.jpeg";
import dd3 from "../../../public/dd3.jpg";
import dd4 from "../../../public/dd4.jpg";
import dd5 from "../../../public/dd5.jpeg";
import dd6 from "../../../public/dd6.jpeg";
import dd7 from "../../../public/dd7.jpg";

const page = () => {
  const cards = [
    {
      title: "Andaman",
      t2: "Andaman",
      src: dd1,
    },
    {
      title: "Goa",
      t2: "goa",
      src: dd2,
    },
    {
      title: "Himachal",
      t2: "himachal",
      src: dd3,
    },
    {
      title: "4 Dham by Helicopter",
      t2: "dham",
      src: dd7,
    },
    {
      title: "Kerela",
      t2: "kerela",
      src: dd4,
    },
    {
      title: "Rajsthan",
      t2: "rajsthan",
      src: dd5,
    },
    {
      title: "Uttarakhand",
      t2: "uttarakhand",
      src: dd6,
    },
  ];

  return (
    <div className="mt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] mt-20">
        <div className="absolute inset-0 bg-black">
          <Image
            src={domestic}
            alt="About Us"
            fill
            className="object-cover opacity-80"
          />
        </div>
      </section>

      {/* Title Section */}
      <div className="py-8 px-4 md:px-12">
        <h2 className="text-xl md:text-2xl font-bold font-mono text-black text-left">
          Choose Your
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold font-serif text-stone-600 text-left mt-2">
          Domestic Destinations
        </h1>
      </div>

      {/* Cards Section */}
      <div className="py-8 px-4 md:px-12">
        <FocusCards2 cards={cards} />
      </div>
    </div>
  );
};

export default page;