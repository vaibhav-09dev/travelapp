"use client";
import React from "react";
import Image from "next/image";
import goa from "../../../public/goa.jpg";
import Masonry from "../../components/ui/Masonry";

const page = () => {
  const data = [
    { id: 1, image: "https://im.whatshot.in/img/2019/Dec/shutterstock-765060403-cropped-1575977769.jpg", height: 600, text: "Agonda" },
    { id: 2, image: "https://tse4.mm.bing.net/th?id=OIP.wcYjVMQywJBzWVzcUGCX4gHaE8&pid=Api&P=0&h=220", height: 500, text: "Mandrem" },
    { id: 3, image: "https://tse2.mm.bing.net/th?id=OIP.Bn1mRx0jFZ0E5jXJdtRVqAHaE7&pid=Api&P=0&h=220", height: 500, text: "South Goa" },
    { id: 4, image: "https://tse2.mm.bing.net/th?id=OIP.Q4zkRETrKeAfzK4_Cb1XWgHaEc&pid=Api&P=0&h=220", height: 500, text: "Baga" },
    { id: 5, image: "https://tse1.mm.bing.net/th?id=OIP.G67OYSrgaPkUn1-30uZZewHaEK&pid=Api&P=0&h=220", height: 500, text: "Calanguta" },
    { id: 6, image: "https://d26dp53kz39178.cloudfront.net/media/uploads/Travel_Guide_Images/Candolim-beach_result-1657098295809.webp", height: 500, text: "Candolim" },
    { id: 7, image: "https://tse1.mm.bing.net/th?id=OIP.HnYYScBQcOACkN_rPzGtmAHaE8&pid=Api&P=0&h=220", height: 400, text: "Morjim" },
    { id: 8, image: "https://tse2.mm.bing.net/th?id=OIP.Fv1zqzNIrtqCvYNqu77K_gHaE8&pid=Api&P=0&h=220", height: 500, text: "Palolem Beach" },
    { id: 9, image: "https://bucketlistbri.com/wp-content/uploads/2023/04/digital-nomad-india-panjim-800x1000.jpeg", height: 400, text: "Panaji" },
    { id: 10, image: "https://i.pinimg.com/originals/24/83/22/248322f48d8d7e1aafabf24739122502.jpg", height: 600, text: "Arambol" },
    { id: 11, image: "https://tse2.mm.bing.net/th?id=OIP.mbAKR1_Fdgj4OVgv_p38UwHaE7&pid=Api&P=0&h=220", height: 400, text: "Vagator" },
    { id: 12, image: "https://tse1.mm.bing.net/th?id=OIP.wyHpHlH3PENaJUrC3hO95wHaE8&pid=Api&P=0&h=220", height: 400, text: "Velha" },
  ];

  return (
    <div className="mt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] mt-20">
        <div className="absolute inset-0 bg-black">
          <Image
            src={goa}
            alt="About Goa"
            fill
            className="object-cover opacity-80"
          />
        </div>
      </section>

      {/* Title Section */}
      <div className="py-8 px-4 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold font-serif text-stone-600 text-center md:text-left">
          Goa
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