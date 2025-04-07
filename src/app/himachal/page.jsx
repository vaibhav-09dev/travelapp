"use client";
import React from "react";
import Image from "next/image";
import himachal from "../../../public/himachal.jpg";
import Masonry from "../../components/ui/Masonry";

const page = () => {
  const data = [
    { id: 1, image: "https://experiencemyindia.com/wp-content/uploads/2024/09/Kullu-Manali-Blog.jpg", height: 700, text: "Kullu" },
    { id: 2, image: "https://clubmahindra.gumlet.io/blog/media/section_images/shuttersto-1a47b83e6a03271.jpg?w=376&dpr=2.6", height: 600, text: "Shimla" },
    { id: 3, image: "https://onetriptoanother.com/Tosh/IMG_20210512_192510_763.jpg", height: 600, text: "Kasol" },
    { id: 4, image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2020/01/Indo-Tibet-3.jpg", height: 600, text: "Chitkul" },
    { id: 5, image: "https://assets.cntraveller.in/photos/66a39bf517500768bacc9a2d/16:9/w_5280,h_2970,c_limit/lead%20.jpg", height: 600, text: "Dalhousie" },
    { id: 6, image: "https://cdn.britannica.com/00/259800-050-F34687F5/houses-hillside-McLeodganj-Dharamshala-Kangra-Himachal-Pradesh-India.jpg", height: 600, text: "Dharamshala" },
    { id: 7, image: "https://i.ytimg.com/vi/Lr2Xur5I-NU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBTKM1bb6_1CrrLr07MY3ry_HzC_g", height: 500, text: "Kalpa" },
    { id: 8, image: "https://static.toiimg.com/photo/96670479.cms", height: 600, text: "Kangra" },
    { id: 9, image: "https://www.japjitravel.com/jap/media/gallery/Kasauli-Himachal-Pradesh.jpg", height: 500, text: "Kasauli" },
    { id: 10, image: "https://himachaltourism.gov.in/wp-content/uploads/2018/01/Chamera-Lake-chamba.jpg", height: 700, text: "Chamba" },
    { id: 11, image: "https://hikerwolf.com/wp-content/uploads/2020/03/Things-to-do-in-Bir-Billing.jpg.webp", height: 500, text: "Bir" },
    { id: 12, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqO3A_1RWokoQDry8S3FD2mOYIZ0SMERPSVQ&s", height: 500, text: "Chail" },
    { id: 13, image: "https://images.unsplash.com/photo-1521354719423-661a3204204f?fit=max&fm=jpg&ixid=MnwzNTY3MHwwfDF8YWxsfHx8fHx8fHx8MTY3OTM4NzQzNQ&ixlib=rb-4.0.3&q=75&w=720&utm_medium=referral&utm_source=vocal.media", height: 500, text: "Manali" },
    { id: 14, image: "https://www.india.com/wp-content/uploads/2024/09/and.jpg", height: 500, text: "Palampur" },
    { id: 15, image: "https://mysterioushimachal.wordpress.com/wp-content/uploads/2017/01/1437538675_1437492475_img_9060.jpg?w=640", height: 500, text: "Malana" },
    { id: 16, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI7hEx5M72HfJmy6idY2kP13cVAAtT69NdIA&s", height: 500, text: "Narkanda" },
    { id: 17, image: "https://static.langimg.com/photo/imgsize-263490,msid-91127046/navbharat-times.jpg", height: 500, text: "Mashobra" },
    { id: 18, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw4ts4xxDY7LJbMTbuX2UzJ8nMn1J_RE7IeA&s", height: 500, text: "Manikaran" },
    { id: 19, image: "https://thrilltourism.com/storage/3235/0vkmPVYorClFPpsfz9yuMiWm6waNbnrDlTGI5MgN.jpg", height: 500, text: "Khajjiar" },
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] ">
        <div className="absolute inset-0 bg-black">
          <Image
            src={himachal}
            alt="Himachal Pradesh"
            fill
            className="object-cover opacity-80"
          />
        </div>
      </section>

      {/* Title Section */}
      <div className="py-8 px-4 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold font-serif text-stone-600 text-center md:text-left">
          Himachal Pradesh
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