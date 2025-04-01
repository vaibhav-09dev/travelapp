"use client";
import React from "react";
import Image from "next/image";
import andaman from "../../../public/andaman.jpg";
import Masonry from "../../components/ui/Masonry";

const page = () => {
  const data = [
    { id: 1, image: "https://tse2.mm.bing.net/th?id=OIP.0P-Xk9ZGH7rgpFnageS5YQHaEX&pid=Api&P=0&h=220", height: 600, text: "Baratang" },
    { id: 2, image: "https://tse2.mm.bing.net/th?id=OIP.hozXE4BXWJYuoBSj5vK_iAHaD4&pid=Api&P=0&h=220", height: 500, text: "Barren Island" },
    { id: 3, image: "https://tse4.mm.bing.net/th?id=OIP.5FXGwD6x1nC1S-K94AXqzAHaEl&pid=Api&P=0&h=220", height: 500, text: "Car Nicobar" },
    { id: 4, image: "https://tse2.mm.bing.net/th?id=OIP.1U3M6l5pZpshdNnmsDv-3AHaEN&pid=Api&P=0&h=220", height: 500, text: "Little Andman" },
    { id: 5, image: "https://tse4.mm.bing.net/th?id=OIP.Hnc8uKMlxaoArMHdV7_LvwAAAA&pid=Api&P=0&h=220", height: 500, text: "Long Island" },
    { id: 6, image: "https://tse4.mm.bing.net/th?id=OIP.F0AaOYwA1KW6qrhCdC1cVwHaE8&pid=Api&P=0&h=220", height: 500, text: "Mahatma Gandhi Marine" },
    { id: 7, image: "https://tse4.mm.bing.net/th?id=OIP.G7hz2KX4Ussz5xh4kyZvFQHaEK&pid=Api&P=0&h=220", height: 400, text: "Maya Bunder" },
    { id: 8, image: "https://tse1.mm.bing.net/th?id=OIP.jvwu44_cCpke536Uc5YJsQHaFj&pid=Api&P=0&h=220", height: 500, text: "Narcondam Island" },
    { id: 9, image: "https://tse3.mm.bing.net/th?id=OIP.twooqWK_mZQV75VmgK7TsAHaFj&pid=Api&P=0&h=220", height: 400, text: "North Andaman" },
    { id: 10, image: "https://tse2.mm.bing.net/th?id=OIP.Zfl9oUTDEz9LzcXJItFDLgHaFj&pid=Api&P=0&h=220", height: 600, text: "Port Blair" },
    { id: 11, image: "https://tse1.mm.bing.net/th?id=OIP.C1kaKFtlKhvjL6Q_K2sQMQHaEw&pid=Api&P=0&h=220", height: 400, text: "Rangat" },
    { id: 12, image: "https://tse1.mm.bing.net/th?id=OIP.RCS_jSz7levNzpnMPZPVKwHaEK&pid=Api&P=0&h=220", height: 400, text: "Swaraj Dweep" },
  ];

  return (
    <div className="mt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] mt-20">
        <div className="absolute inset-0 bg-black">
          <Image
            src={andaman}
            alt="About Us"
            fill
            className="object-cover opacity-80"
          />
        </div>
      </section>

      {/* Title Section */}
      <div className="py-8 px-4 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold font-serif text-stone-600 text-center md:text-left">
          Andaman
        </h1>
      </div>

      {/* Masonry Section */}
      <div className="py-8 px-4 md:px-12">
        <Masonry data={data} />
      </div>
    </div>
  );
};

export default page;