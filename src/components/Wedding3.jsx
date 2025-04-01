"use client"
import React from 'react'
import { FocusCards } from "@/components/ui/focus-cards";
import pic1 from "../../public/pic1.jpg"
import pic2 from "../../public/pic2.jpg"
import pic3 from "../../public/pic3.jpg"
import pic4 from "../../public/pic4.jpeg"
import pic5 from "../../public/pic5.jpg"
import pic6 from "../../public/pic6.jpg"
import pic7 from "../../public/pic7.jpg"
import pic8 from "../../public/pic8.jpg"
import pic9 from "../../public/pic9.jpeg"


const Wedding3 = () => {
    const cards = [
        {
          title: "Andaman",
          src: pic2,
        },
        {
          title: "Bali",
          src: pic3,
        },
        {
          title: "Goa",
          src: pic4,
        },
        {
          title: "Jaipur",
          src: pic5,
        },
        {
          title: "Jim Corbett",
          src: pic6,
        },
        {
          title: "Jodhpur",
          src: pic7,
        },
        {
            title: "Maldives",
            src: pic8,
          },
          {
            title: "Udaipur",
            src: pic9,
          },
      ];
  return (
    <div className='mt-16 bg-white'> <br /> <br />
        <div className='flex justify-center items-center '> <h2 className='text-2xl font-bold font-mono italic text-stone-400 '>Good Idea To</h2></div>
        <div className='flex justify-center items-center mb-9'>
       
        <h1 className='text-7xl font-extrabold font-serif text-stone-600 '> Getting Married in...</h1> <br />
        </div>
    <FocusCards cards={cards} />
    </div>
  )
}

export default Wedding3