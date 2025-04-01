"use client";
import React from "react";
import Link from "next/link";

const Pdf = () => {
  return (
    <div className="px-4 md:px-12 py-8">
      <h1 className="text-3xl md:text-4xl font-bold font-serif text-black text-center underline mb-6">
        Know more about Journey
      </h1>
      <h2 className="text-xl md:text-2xl font-bold font-serif text-black text-center md:text-left underline mb-6">
        Tour and Package Details:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-bold text-lg md:text-xl font-serif text-stone-700">
        <div className="text-center">
          Char Dham by Helicopter <br />
          (4-days Tour) <br />
          <br />
          <Link
            href="https://drive.google.com/file/d/1qTAJvM2ydQrdbcb2xus6GEl527eXRGqS/view?usp=drive_link"
            className="text-lg font-bold text-black hover:text-stone-700"
          >
            Know More
          </Link>
        </div>
        <div className="text-center">
          Do Dham MI 17 Helicopter <br />
          (1-day Tour) <br />
          <br />
          <Link
            href="https://drive.google.com/file/d/127R1Z6m32sdGHtq3B3QAqvOZh5QtKbPX/view?usp=drive_link"
            className="text-lg font-bold text-black hover:text-stone-700"
          >
            Know More
          </Link>
        </div>
        <div className="text-center">
          Do Dham by Helicopter <br />
          (4-days Tour) <br />
          <br />
          <Link
            href="https://drive.google.com/file/d/1wy7qOCP5XLU5sgjhZdFxnkNb9hm5CRKO/view?usp=drive_link"
            className="text-lg font-bold text-black hover:text-stone-700"
          >
            Know More
          </Link>
        </div>
        <div className="text-center">
          Do Dham MI Helicopter <br />
          (4-days Tour premium) <br />
          <br />
          <Link
            href="https://drive.google.com/file/d/1JLbKyciXIPvbDnKQm1h06pm2UpC6RuJ6/view?usp=drive_link"
            className="text-lg font-bold text-black hover:text-stone-700"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pdf;