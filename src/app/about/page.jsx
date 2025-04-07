"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import abt1 from "../../../public/abt2.png";
import c1 from "../../../public/c1.jpg";
import c2 from "../../../public/c2.jpg";
import c3 from "../../../public/c3.jpg";
import abt2 from "../../../public/abt-1.png";
import { Carousel } from "flowbite-react";

const Page = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Hero Section */}
     

      {/* About Content Section */}
      <section className="py-16 px-16 bg-gradient-to-r from-gray-300 via-white to-gray-300 shadow-lg rounded-lg mt-28">
  <div className="container mx-auto">
    <div className="flex flex-col md:flex-row items-center">
      {/* Image Section */}
      <motion.div
        className="md:w-1/3 mb-8 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05, hanging: 0.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src={abt1}
          alt="About Trips Exotica"
          width={400}
          height={300}
          className="rounded-lg shadow-lg mx-auto hover:scale-105 transition-transform duration-300"
        />
        <motion.h1
          className="text-lg text-center font-bold font-serif mt-4 text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="text-2xl text-stone-600">ANKUR KALRA</span> <br />
          <span className="text-lg text-muted italic">TRAVEL CONSULTANT</span> <br />
          <span className="text-sm text-muted font-light">
            SINCE 2009 WITH 11 YEARS OF EXPERIENCE IN THE HOSPITALITY INDUSTRY
          </span>
        </motion.h1>
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="md:w-2/3 md:pl-12"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold font-serif text-secondary text-gradient bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileHover={{ scale: 1.1 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-base md:text-xl text-gray-800 font-serif font-black text-muted leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
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
        </motion.p>
      </motion.div>
    </div>
  </div>
</section>
      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-blue-200">
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
      <section className="py-16 px-4 ">
  <div className="container mx-auto text-center">
    <motion.h2
      className="text-3xl md:text-5xl font-bold font-serif text-secondary underline text-primary mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      whileHover={{
        scale: 1.2,
        hanging: 0.1,
        textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
         // Changes text color on hover
      }}
    >
      Awards and Recognition
    </motion.h2>
    <motion.p
      className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      We are honored to be recognized for our commitment to excellence in the travel industry. Here are some of the awards and recognitions we have received over the years.
    </motion.p>
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
 <section className="py-16 px-4 bg-gradient-to-b from-gray-200 to-gray-300">
  <div className="container mx-auto">
    <motion.h2
      className="text-2xl md:text-5xl mb-8 font-extrabold font-serif text-center text-stone-600"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      FAQ
    </motion.h2>
    <motion.p
      className="text-center text-gray-700 mb-12 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      As one of the fastest-growing luxury travel companies, Wellcome Tours offers an extensive selection of hotels, flights, buses, and tour packages to meet every specific need of individual, group, and corporate clients.
    </motion.p>

    <div className="max-w-3xl mx-auto space-y-6">
      {[
        {
          title: "Global Partner Network",
          description:
            "We have developed a trustworthy relationship with a wide range of global partners, including airlines (domestic and international), hotels, bus services, and more; which helps us provide tailor-made solutions for our clients.",
        },
        {
          title: "Specialized Holiday Deals",
          description:
            "Do you want a specific theme-based holiday package such as an adventure holiday theme? Choose your type of holiday theme, and leave the rest to us to provide you with an exotic experience.",
        },
        {
          title: "Specified Corporate Tour",
          description:
            "We specialize in a wide variety of corporate travel plans, including conferences, outdoor meetings, corporate training, self-defense, etc.",
        },
      ].map((faq, index) => (
        <motion.div
          key={index}
          className="border-b border-gray-300 pb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
        >
          <h3 className="text-2xl mb-2 font-bold text-secondary">
            {faq.title}
          </h3>
          <p className="text-gray-700 font-medium">{faq.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      
    </main>
  );
};

export default Page;