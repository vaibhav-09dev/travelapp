"use client";
import React from "react";
import Image from "next/image";
import kerela from "../../../public/kerela.jpg";
import Masonry from "../../components/ui/Masonry";

const page = () => {
  const data = [
    { id: 1, image: "https://media.istockphoto.com/id/177373392/photo/houseboat-on-kerala-backwaters-india.jpg?s=612x612&w=0&k=20&c=NI3mfT5f2WM5psQQWa_L7CSHkX5e415FljfotLbK3QQ=", height: 700, text: "Alappuzha" },
    { id: 2, image: "https://cdn.pixabay.com/photo/2017/06/27/14/20/couple-2447450_1280.jpg", height: 600, text: "Athirappilly" },
    { id: 4, image: "https://cdn.pixabay.com/photo/2017/02/17/05/31/india-travels-2073391_1280.jpg", height: 600, text: "Bekal Fort" },
    { id: 5, image: "https://media.istockphoto.com/id/1177400002/photo/thailand-asian-elephant-roaming-free-in-sanctuary-chiang-rai.jpg?s=612x612&w=0&k=20&c=aYVzv6nUbkuqjuD8itvK2Cnce6uSdg6jQvAfGypxf2Q=", height: 600, text: "Chinnar Wildlife" },
    { id: 6, image: "https://cdn.pixabay.com/photo/2019/11/22/11/52/adventure-4644669_1280.jpg", height: 600, text: "Eravikulam National Park" },
    { id: 7, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvf4jxzcqXyy5Dw4Q6kJYZU5CFrbG_NqE0HA&s", height: 500, text: "Ernakulam" },
    { id: 8, image: "https://img.onmanorama.com/content/dam/mm/en/travel/kerala/images/2022/9/16/jatayu-rock-1.jpg?w=1120&h=583", height: 500, text: "Jatayu Earth Centre-Kollam" },
    { id: 9, image: "https://assets-news.housing.com/news/wp-content/uploads/2022/09/02151433/places-to-visit-in-kannur-shutterstock_1604282707-1200x700-compressed.jpg", height: 700, text: "Kannur" },
    { id: 10, image: "https://www.sreestours.com/blog/wp-content/uploads/2014/07/Munnar_hillstation_kerala.jpg", height: 500, text: "Munnar" },
    { id: 11, image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Palakkad_Fort_5.jpg", height: 500, text: "Palakkad" },
    { id: 12, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm-9IGjmhOVzRleMSsAf4O9ltrSj0J4-0TpA&s", height: 500, text: "Vagamon" },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] ">
        <div className="absolute inset-0 bg-black">
          <Image
            src={kerela}
            alt="Kerela"
            fill
            className="object-cover opacity-80"
          />
        </div>
      </section>

      {/* Title Section */}
      <div className="py-8 px-4 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold font-serif text-stone-600 text-center md:text-left">
          Kerala
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