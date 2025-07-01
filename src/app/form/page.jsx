"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import axios from "axios";
import contact from "../../../public/contact.jpg";

const Page = () => {
  const [user, setuser] = useState({
    Name: "",
    phone: "",
    email: "",
    enquiry: "",
    details: "",
  });

  const send = async (e) => {
    e.preventDefault();
    if (!user.Name || !user.phone || !user.email || !user.enquiry || !user.details) {
      alert("Please fill all the fields.");
      return;
    }
    try {
      await axios.post("https://www.wellcometours.com/api/Userdata", user).then((res) => {
        alert("Request sent");
        setuser({
          Name: "",
          phone: "",
          email: "",
          enquiry: "",
          details: "",
        });
      });
    } catch (error) {
      console.log("Error in sending:", error);
      alert("Failed to send the request. Please try again.");
    }
  };

  return (
    <div className="">
      {/* Hero Section */}
      <motion.section
        className="relative h-[40vh] md:h-[35vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black">
          <Image
            src={contact}
            alt="Contact Us"
            fill
            className="object-cover opacity-80"
          />
        </div>
        <div className="absolute inset-0 flex justify-center items-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold font-serif text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Contact Us
          </motion.h1>
        </div>
      </motion.section>

      {/* Contact Information Section */}
      <div className="w-full flex flex-col md:flex-row justify-around items-center bg-white py-8 px-4 md:px-12">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl font-bold font-mono text-black text-left">
            Ask us your query!
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-secondary text-left mt-4 mb-2">
            Contact Us
          </h1>
          <p className="text-base md:text-xl font-serif text-stone-800 text-left mt-4 font-bold">
            Thank you for considering contacting us at Wellcome Tours! We're
            always happy to hear from our customers and help in any way we can.
            <br />
            If you have any questions or concerns about your upcoming trip, or
            if you're interested in booking a vacation package, please don't
            hesitate to reach out to us. Our team of experienced travel agents
            is available to assist you with all of your travel needs.
          </p>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <video
            src="https://cdn.pixabay.com/video/2018/12/09/19849-306108554_tiny.mp4"
            autoPlay
            loop
            muted
            className="rounded-3xl w-full h-auto shadow-lg"
          />
        </motion.div>
      </div>

      {/* Form Section */}
      <div className="py-8 px-4 md:px-12">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-secondary font-sans text-center  mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Let's get in touch
        </motion.h1>
        <div className="flex flex-col md:flex-row justify-around items-start">
          {/* Address Section */}
          <motion.div
            className="w-full md:w-1/3 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-2xl md:text-5xl font-bold font-serif text-stone-600 mb-4">
              Address:
            </h1>
            <h2>
              <a
                href="https://maps.app.goo.gl/4cyVkthAUdaGBJ6H7"
                className="text-black hover:text-stone-500 text-lg md:text-2xl font-bold font-serif"
              >
                S-76, Block S, Part 2, Greater Kailash, New Delhi, Delhi 110048
              </a>
            </h2>
            <h1 className="text-2xl md:text-5xl font-bold font-serif text-stone-600 mt-8">
              Call Us:
            </h1>
            <h2>
              <a
                href="tel:+919811600075"
                className="text-black hover:text-stone-500 text-lg md:text-2xl font-bold font-serif"
              >
                +91 9811600075
              </a>
            </h2>
            <h1 className="text-2xl md:text-5xl font-bold font-serif text-stone-600 mt-8">
              Email Us:
            </h1>
            <h2>
              <a
                href="mailto:Ankur@wellcometours.com"
                className="text-black hover:text-stone-500 text-lg md:text-2xl font-bold font-serif"
              >
                Ankur@wellcometours.com
              </a>
            </h2>
          </motion.div>

          {/* Form */}
          <motion.div
            className="w-full md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={user.Name}
                onChange={(e) => setuser({ ...user, Name: e.target.value })}
                className="border-gray-700 text-gray-700 h-[45px] rounded-md border bg-transparent w-full md:w-[600] md:ml-24 text-left text-lg md:text-xl p-2"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={user.phone}
                onChange={(e) => setuser({ ...user, phone: e.target.value })}
                className="border-gray-700 text-gray-700 h-[45px] rounded-md border bg-transparent w-full md:w-[600] md:ml-24 text-left text-lg md:text-xl p-2"
              />
              <input
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setuser({ ...user, email: e.target.value })}
                className="border-gray-700 text-gray-700 h-[45px] rounded-md border bg-transparent w-full md:w-[600] md:ml-24 text-left text-lg md:text-xl p-2"
              />
              <input
                type="text"
                placeholder="Enquiry for hotels, trips, etc."
                value={user.enquiry}
                onChange={(e) => setuser({ ...user, enquiry: e.target.value })}
                className="border-gray-700 text-gray-700 h-[45px] rounded-md border bg-transparent w-full md:w-[600] md:ml-24 text-left text-lg md:text-xl p-2"
              />
              <textarea
                placeholder="Details about trip, destination, etc."
                value={user.details}
                onChange={(e) => setuser({ ...user, details: e.target.value })}
                className="border-gray-700 text-gray-700 rounded-md border bg-transparent w-full md:w-[600] md:ml-24 text-left text-lg md:text-xl p-2"
                rows={5}
              />
              <motion.button
                type="button"
                onClick={send}
                className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg md:w-[200] md:ml-24 text-lg px-5 py-2.5 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Enquiry
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Page;