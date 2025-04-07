"use client";
import React from "react";
import Image from "next/image";
import uk from "../../../public/uk.jpg";
import Masonry from "../../components/ui/Masonry";

const page = () => {
  const data = [
    { id: 1, image: "https://s3.india.com/wp-content/uploads/2024/12/Must-Do-Experiences-In-Almora.jpg", height: 700, text: "Almora" },
    { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ3ALHpS_6c-9XMZJ_UDldzkaMhuyzp5mhAQ&s", height: 600, text: "Badrinath" },
    { id: 3, image: "https://cdn-ijnhp.nitrocdn.com/pywIAllcUPgoWDXtkiXtBgvTOSromKIg/assets/images/optimized/rev-5794eaa/www.jaypeehotels.com/blog/wp-content/uploads/2024/02/Blog-6.jpg", height: 600, text: "Dehradun" },
    { id: 4, image: "https://static.toiimg.com/thumb/87566657/Gangotri-Dham.jpg?width=1200&height=900", height: 600, text: "Gangotri" },
    { id: 5, image: "https://s7ap1.scene7.com/is/image/incredibleindia/ganga-ghat-haridwar1-attr-nearby?qlt=82&ts=1726645939927", height: 600, text: "Haridwar" },
    { id: 6, image: "https://www.sevencorbett.com/wp-content/uploads/2023/03/Jim-Corbett-national-park-1.jpg", height: 600, text: "Jim Corbett National Park" },
    { id: 7, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmYTc-bI4vQ4kcHeu4DShFa_DwKNLiTf1JUA&s", height: 500, text: "Kedarnath" },
    { id: 8, image: "https://s7ap1.scene7.com/is/image/incredibleindia/laxman%20jhula-rishikesh-uttrakhand-hero?qlt=82&ts=1726646312953", height: 600, text: "Rishikesh" },
    { id: 9, image: "https://plutotours.in/places/wp-content/uploads/2024/08/Nainital-in-Winter.webp", height: 500, text: "Nainital" },
    { id: 10, image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/8d/f7/1e/view-of-the-town-from.jpg?w=1400&h=1400&s=1", height: 700, text: "Pithoragarh" },
    { id: 11, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj6aSgS9tOaXXjgYNEeJPnqT8rSkGnZf4K7Q&s", height: 500, text: "Mukteshwar" },
    { id: 12, image: "https://wandersky.in/wp-content/uploads/2023/08/joshimath.jpg", height: 500, text: "Joshimath" },
    { id: 13, image: "https://wandersky.in/wp-content/uploads/2023/08/Rudraprayag.jpg", height: 500, text: "Rudraprayag" },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] ">
        <div className="absolute inset-0 bg-black">
          <Image
            src={uk}
            alt="Uttarakhand"
            fill
            className="object-cover opacity-80"
          />
        </div>
      </section>

      {/* Title Section */}
      <div className="py-8 px-4 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold font-serif text-stone-600 text-center md:text-left">
          Uttarakhand
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