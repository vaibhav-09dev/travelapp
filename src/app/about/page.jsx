"use client";
import React from 'react';
import Image from 'next/image';
import abt1 from "../../../public/abt2.png"
import c1 from "../../../public/c1.jpg"
import c2 from "../../../public/c2.jpg"
import c3 from "../../../public/c3.jpg"
import abt2 from "../../../public/abt-1.png"
import { Carousel } from "flowbite-react";
// Import the Navigation component

const Page = () => {
  return (
    <main className="min-h-screen bg-trips-exotica-beige mt-20">
    

      <section className="relative h-[40vh] md:h-[50vh]">
        <div className="absolute inset-0 bg-black">
          <Image
            src={abt2}
            alt="About Us"
            fill
            className="object-cover opacity-80"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center text-white text-left p-4 md:ml-12">
          <h1 className="trips-exotica-header font-serif text-3xl md:text-7xl font-bold mb-2">
            About Us
          </h1>
          <p className="text-xl font-serif">Know To wellcome Tours</p>
        </div>
      </section>

      {/* About Content Section */}
     {/* About Content Section */}
<section className="py-16 px-4 bg-white ">
  <div className="container mx-auto">
    <div className="flex flex-col md:flex-row items-center">
      {/* Image Section */}
      <div className="md:w-1/3 mb-8 md:mb-0">
        <Image
          src={abt1}
          alt="About Trips Exotica"
          width={400}
          height={300}
          className="rounded-lg shadow-lg mx-auto"
        />
        <h1 className="text-lg text-center font-bold font-serif mt-4 text-primary">
          ANKUR KALRA <br />
          <span className="text-muted">TRAVEL CONSULTANT</span> <br />
          <span className="text-muted">SINCE 2009 WITH 11YEARS OF EXPERIENCE IN HOSPITALITY INDUSTRY
          </span>
        </h1>
      </div>
      {/* Text Section */}
      <div className="md:w-2/3 md:pl-12">
        <h1 className="text-4xl md:text-6xl font-bold font-serif text-stone-500 text-primary mb-6">
          About Us
        </h1>
        <p className="text-base md:text-xl font-serif italic text-muted leading-relaxed">
          Welcome to our travel company, where we offer an exceptional range of
          domestic travel services that will take you on an adventure through
          some of the most beautiful and diverse destinations within your own
          country.
          <br />
          <br />
          Whether you're looking for a relaxing beach vacation, a thrilling city
          break, or an adventurous journey through the countryside, we've got
          you covered. Our team of experienced travel experts will work with
          you to customize your itinerary, ensuring that you get the most out of
          your trip.
        </p>
        
      </div>
    </div>
  </div>
</section>
      

      {/* Why Choose Us Section */} 
     {/* Why Choose Us Section */}
<section className="py-16 px-4 bg-background">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl md:text-5xl font-bold font-serif text-primary mb-12">
      Why Choose Us?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
        <div className="rounded-full bg-blue-100 p-4 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>
        <h3 className="font-semibold text-lg text-primary mb-2">
          Your Trusted Adviser
        </h3>
        <p className="text-muted text-sm">
          We'll answer your every question. Our experienced travel experts and
          real-time on-field know-how give us this advantage.
        </p>
      </div>
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
        <div className="rounded-full bg-blue-100 p-4 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <h3 className="font-semibold text-lg text-primary mb-2">
        Easy As ABC
        </h3>
        <p className="text-muted text-sm">
        Travel smooth and stress-free. That's how easy we make it because that's how your holiday should be.

        </p>
      </div>
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
        <div className="rounded-full bg-blue-100 p-4 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-semibold text-lg text-primary mb-2">
        Memorable Experiences
        </h3>
        <p className="text-muted text-sm">
        Do everything or do nothing. Either way, your holiday will be nothing less than extraordinary.
        </p>
      </div>
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
        <div className="rounded-full bg-blue-100 p-4 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
        <h3 className="font-semibold text-lg text-primary mb-2">
        Handcrafted Holidays
        </h3>
        <p className="text-muted text-sm">
        We interact with our loyal customers to co-create unique experiences that will take your holiday to the next level.

        </p>
      </div>
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
        <div className="rounded-full bg-blue-100 p-4 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </div>
        <h3 className="font-semibold text-lg text-primary mb-2">
        We Love Listening
        </h3>
        <p className="text-muted text-sm">
        Your holiday, your terms. We'll fill in the blanks to plan the perfect trip in the blink of an eye.
        </p>
      </div>
    </div>
  </div>
</section>
      {/* Awards Section */}
      <section className="py-16 px-4 bg-gray-100">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl md:text-5xl font-bold font-serif text-stone-500 underline text-primary mb-8">
      Awards and Recognition
    </h2>
    <p className="text-lg md:text-xl text-muted leading-relaxed max-w-3xl mx-auto mb-12">
      We are honored to be recognized for our commitment to excellence in the travel industry. Here are some of the awards and recognitions we have received over the years.
    </p>

    {/* Responsive Grid for Certificates */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* Certificate 1 */}
      <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
        <Image
          src={c1}
          alt="Award 1"
          width={500}
          height={200}
          className="rounded-lg mb-4"
        />
        <h3 className="text-lg font-bold text-primary">Best Travel Agency</h3>
        <p className="text-sm text-muted mt-2">
          Recognized for outstanding service and customer satisfaction.
        </p>
      </div>

      {/* Certificate 2 */}
      <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
        <Image
          src={c2}
          alt="Award 2"
          width={500}
          height={200}
          className="rounded-lg mb-4"
        />
        <h3 className="text-lg font-bold text-primary">Top Destination Planner</h3>
        <p className="text-sm text-muted mt-2">
          Awarded for creating unforgettable travel experiences.
        </p>
      </div>

      {/* Certificate 3 */}
      <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
        <Image
          src={c3}
          alt="Award 3"
          width={300}
          height={200}
          className="rounded-lg mb-4"
        />
        <h3 className="text-lg font-bold text-primary">Excellence in Service</h3>
        <p className="text-sm text-muted mt-2">
          Honored for delivering exceptional travel services.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="trips-exotica-subheader text-2xl md:text-5xl mb-8 font-extrabold font-serif text-center text-stone-600">FAQ</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            As one of the fastest growing Luxury travel company, wellcome Tours offers an extensive selection of hotels, flights, bus and tour packages, to meet every specific need of the individual, group and corporate clients.
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="border-b border-gray-300 pb-4">
              <h3 className="text-2xl mb-2 trips-exotica-gold font-bold">Global Partner Network</h3>
              <p className="text-gray-700 font-bold">
                We have developed a trustworthy relationship with a wide range of global partners, including airlines (domestic and international), hotels, bus services and more; which helps us provide tailor-made solutions for our clients.
              </p>
            </div>
            <div className="border-b border-gray-300 pb-4 font-bold">
              <h3 className="text-2xl mb-2 trips-exotica-gold">Specialized Holiday Deals</h3>
              <p className="text-gray-700 font-bold">
                Do you want a specific theme based holiday package such as adventure holiday theme. Choose your type of holiday theme, and leave the rest to us to provide you with an exotic experience.
              </p>
            </div>
            <div className="border-b border-gray-300 pb-4">
              <h3 className="text-2xl mb-2 trips-exotica-gold font-bold">Specified Corporate Tour</h3>
              <p className="text-gray-700 font-bold">
                We specialize in a wide variety of corporate travel plans, including conferences, outdoor meetings, Corporate Training, Self defense, etc.
              </p>
            </div>
          </div>
        </div>
      </section>
      

      

      
          
    </main>
  );
};

export default Page;