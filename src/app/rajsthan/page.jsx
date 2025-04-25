"use client";
import React from "react";
import Image from "next/image";
import rajasthan from "../../../public/rajasthan.jpg";
import Masonry1 from "../../components/ui/Masonry1";

const page = () => {
  const data = [
    { id: 1, image: "https://thelandofwanderlust.com/wp-content/uploads/2024/05/pexels-photo-9179927.jpeg", height: 700, text: "Ajmer" },
    { id: 2, image: "https://www.seawatersports.com/images/places/alwar.jpg", height: 600, text: "Alwar" },
    { id: 3, image: "https://www.raahiliving.com/cdn/shop/articles/bikaner_city_2a9b471f-b524-4d24-8430-c13c6bae51cc_1200x1200.jpg?v=1695647306", height: 600, text: "Bikaner" },
    { id: 4, image: "https://www.turismo.it/typo3temp/pics/7cbcb0ef65.jpg", height: 600, text: "Jaipur" },
    { id: 5, image: "https://desertheritagecampandresort.com/img/jaislamer_fort_night_view_1914.jpg", height: 600, text: "Jaisalmer" },
    { id: 6, image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/99/ae/7f/images-14-largejpg.jpg?w=500&h=500&s=1", height: 600, text: "Jodhpur" },
    { id: 7, image: "https://assets.cntraveller.in/photos/669120910f15e089fb0cd3f1/16:9/w_5616,h_3159,c_limit/1206473179", height: 500, text: "Mount Abu" },
    { id: 8, image: "https://www.timesindiatravels.com/wp-content/uploads/2017/09/Indias-Top-Destinations-Pushkar.jpg", height: 600, text: "Pushkar" },
    { id: 9, image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/69/d1/af/visited-july-2015-on.jpg?w=1200&h=-1&s=1", height: 500, text: "Sikar" },
    { id: 10, image: "https://www.indraniwas.com/wp-content/uploads/2021/08/udaipur-1080x675-1.jpg", height: 700, text: "Udaipur" },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] ">
        <div className="absolute inset-0 bg-black">
          <Image
            src={rajasthan}
            alt="Rajasthan"
            fill
            className="object-cover opacity-80"
          />
        </div>
      </section>

      {/* Title Section */}
      <div className="py-8 px-4 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold font-serif text-stone-600 text-center md:text-left">
          Rajasthan
        </h1>
      </div>

      {/* Masonry Section */}
      <div className="py-8 px-4 md:px-12">
        <Masonry1 data={data} />
      </div>
    </div>
  );
};

export default page;