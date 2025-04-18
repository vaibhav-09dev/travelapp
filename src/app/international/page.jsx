"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import international from "../../../public/international.jpg";
import Masonry from "../../components/ui/Masonry";

const page = () => {
  const data = [
    { id: 1, image: "https://static.toiimg.com/thumb/msid-107700466,width-748,height-499,resizemode=4,imgsize-119838/.jpg", height: 700, text: "Singapore" },
    { id: 2, image: "https://tii.imgix.net/production/articles/12772/e6e279c7-c6bb-415e-8d1f-0eee12e8a4b9-alDhkb.png?auto=compress&fit=crop&auto=format", height: 700, text: "Dubai" },
    { id: 3, image: "https://hips.hearstapps.com/hmg-prod/images/maldives-girls-holiday-1-66b5d876941be.jpg", height: 700, text: "Maldives" },
    { id: 4, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Hong_Kong_Island_Skyline_201108.jpg/1200px-Hong_Kong_Island_Skyline_201108.jpg", height: 700, text: "Hong Kong" },
    { id: 5, image: "https://media.digitalnomads.world/wp-content/uploads/2021/01/20120709/bali-for-digital-nomads.jpg", height: 700, text: "Bali" },
    { id: 6, image: "https://static.independent.co.uk/2025/01/03/14/newFile-12.jpg", height: 700, text: "Bangkok" },
    { id: 7, image: "https://ik.imgkit.net/3vlqs5axxjf/external/http://images.ntmllc.com/v4/destination/Thailand/Phuket-City/220668_SCN_Phuket_iStock910551026_Z20B18.jpg?tr=w-1200%2Cfo-auto", height: 700, text: "Phuket" },
    { id: 8, image: "https://finnsbeachclub.com/wp-content/uploads/2024/10/aerial-view-of-langkawi-eagle-square-from-the-fron-2024-05-23-05-11-43-utc-scaled.jpg", height: 700, text: "Langkawi" },
    { id: 9, image: "https://assets.atdw-online.com.au/images/082abec166a817adfae646daff53ad70.jpeg?rect=0%2C0%2C2048%2C1536&w=2048&h=1536&rot=360&q=eyJ0eXBlIjoibGlzdGluZyIsImxpc3RpbmdJZCI6IjU2YjIzYzkyZDVmMTU2NTA0NWQ4MTBkMiIsImRpc3RyaWJ1dG9ySWQiOiI1NmIxZWI5MzQ0ZmVjYTNkZjJlMzIwYzgiLCJhcGlrZXlJZCI6IjU2YjFlZTU5MGNmMjEzYWQyMGRjNTgxOSJ9", height: 700, text: "Sydney" },
    { id: 10, image: "https://lp-cms-production.imgix.net/2022-11/Malaysia-iStock-1344146598-RFE_1.jpeg", height: 700, text: "Kuala Lumpur" },
    { id: 11, image: "https://www.qantas.com/travelinsider/en/explore/asia/thailand/things-to-do-krabi/_jcr_content/verticalGalleryMain/gallery/galleryItems/50_1726567773236.img.1440.high.jpg/1726567790887.jpg", height: 700, text: "Krabi" },
    { id: 12, image: "https://product.hstatic.net/1000365351/product/cau-vang_d6b53f0600b14296904bddeea7185677_master.png", height: 700, text: "Hanoi" },
    { id: 13, image: "https://ik.imagekit.io/tvlk/blog/2024/05/shutterstock_175128359.jpg", height: 700, text: "Ho Chi Minh City" },
    { id: 14, image: "https://img.freepik.com/free-photo/aerial-view-tokyo-cityscape-with-fuji-mountain-japan_335224-148.jpg", height: 700, text: "Tokyo" },
    { id: 15, image: "https://assets.simpleviewcms.com/simpleview/image/upload/c_fill,f_jpg,h_757,q_65,w_640/v1/clients/lasvegas/Strip_Pic_1200x800_24d79803-65f2-429a-a330-ce6edb8bcc8d.jpg", height: 700, text: "Las Vegas" },
    { id: 16, image: "https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/bltdb42d0af0dddb0dd/65006732539fa162b64ae755/0_-_BCC-2023-MADRID-LANDMARKS-0.webp?format=webp&auto=avif&crop=1%3A1&quality=100&width=425", height: 700, text: "Madrid" },
    { id: 17, image: "https://static.independent.co.uk/2024/11/27/16/iStock-875273240.jpg?width=1200&height=900&fit=crop", height: 700, text: "Barcelona" },
    { id: 18, image: "https://imageio.forbes.com/specials-images/imageserve/6619375bcffe0fbca392d032/Aerial-view-of-Abu-Dhabi-high-rise-buildings-and-some-of-the-emirate-s-200-plus/960x0.jpg?format=jpg&width=960", height: 700, text: "Abu Dhabi" },
    { id: 19, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-1a8dommt4xPNd6qcK_Bwisu9tb-fAWiVSw&s", height: 700, text: "Istanbul" },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <motion.section
        className="relative h-[40vh] md:h-[50vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black">
          <Image
            src={international}
            alt="International Destinations"
            fill
            className="object-cover opacity-80"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold font-serif"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            International Destinations
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl font-serif mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Explore the world's most exotic locations
          </motion.p>
        </div>
      </motion.section>

      {/* Title Section */}
      <div className="py-8 px-4 md:px-12">
        <motion.h2
          className="text-lg md:text-xl font-bold font-mono text-primary text-left ml-6 md:ml-28"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Choose Your
        </motion.h2>
        <motion.h1
          className="text-3xl md:text-6xl font-bold font-serif text-stone-600 text-left ml-6 md:ml-28 leading-tight"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          International Destinations
        </motion.h1>
      </div>

      {/* Masonry Section */}
      <div className="py-8 px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Masonry data={data} />
        </motion.div>
      </div>
    </div>
  );
};

export default page;