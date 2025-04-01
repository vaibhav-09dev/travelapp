"use client";
import React from "react";
import Image from "next/image";
import dham from "../../../public/dham.jpg";
import Masonry from "../../components/ui/Masonry";
import Pdf from "@/components/Pdf";

const page = () => {
  const data = [
    { id: 1, image: "https://t.eucdn.in/tourism/lg/dharchula-7803829.webp", height: 800, text: "Yamunotri" },
    { id: 2, image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/45/3b/da/the-main-temple.jpg?w=1200&h=1200&s=1", height: 800, text: "Gangotri" },
    { id: 3, image: "https://i.pinimg.com/736x/12/b3/f5/12b3f51d60f63bb566d5b2a5e9526f64.jpg", height: 800, text: "Kedarnath" },
    { id: 4, image: "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-209978,resizemode-75,msid-117857375/news/india/badrinath-temple-portals-to-open-on-may-4.jpg", height: 800, text: "Badrinath" },
  ];

  return (
    <div className="mt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] mt-20">
        <div className="absolute inset-0 bg-black">
          <Image
            src={dham}
            alt="4 Dham Yatra"
            fill
            className="object-cover opacity-80"
          />
        </div>
      </section>

      {/* Title Section */}
      <div className="py-8 px-4 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold font-serif text-stone-600 text-center md:text-left">
          4 Dham Yatra
        </h1>
      </div>

      {/* Content Section */}
      <div className="py-8 px-4 md:px-12 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-black mb-4">
            Enjoy your Spiritual Journey with us
          </h1>
          <p className="font-serif text-base md:text-lg text-stone-700 leading-relaxed">
            Experience the ultimate spiritual journey with Chardham Yatra by Helicopter Services offered by Blueheights Aviation. Explore the sacred shrines of Yamunotri, Gangotri, Kedarnath, and Badrinath with our luxury helicopter packages. Whether you seek convenience, VIP darshan, or breathtaking views of the Himalayas, our service ensures a seamless and divine experience. Blueheights Aviation offers an unparalleled experience for the Char Dham Yatra by Helicopter from Dehradun. Our 2025 packages provide affordable and luxury options for a hassle-free pilgrimage. Our VIP Darshan Char Dham Helicopter Packages include priority access at each shrine, saving time for our guests.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <video
            src="https://media.istockphoto.com/id/1276621567/video/uttarkashi-uttarakhand-india-october-2018-pilgrims-outside-gangotri-temple-located-on-the.mp4?s=mp4-480x480-is&k=20&c=sk9Yw6US3k5a92EozDc9nfBDp9W46tAQ92aBR-gEhS8="
            autoPlay
            loop
            muted
            className="rounded-2xl w-full md:w-[500px] h-auto"
          />
        </div>
      </div>

      {/* PDF Section */}
      <div className="py-8 px-4 md:px-12">
        <Pdf />
      </div>

      {/* Masonry Section */}
      <div className="py-8 px-4 md:px-12">
        <Masonry data={data} />
      </div>
    </div>
  );
};

export default page;