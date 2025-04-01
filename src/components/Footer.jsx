"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../public/logo.jpg"

const associationLinks = [
  { name: 'Starwood Hotels And Resorts', href: '/' },
  { name: 'Jumeirah Hotels & Resorts', href: '/' },
  { name: 'TAJ Hotels Resorts And Places', href: '/' },
  { name: 'Dubai Expert', href: '/hotels' },
  { name: 'Mandarin Oriental The Hotel Group', href: '/' },
  { name: 'The Imperial', href: '/hotels' },
  { name: 'The Leela Places Hotels Resorts', href: '/' },
  { name: 'Marriott Hotel & Resorts', href: '/' },
  { name: 'Banyan Tree Hotels & Resorts', href: '/' },
];

const usefulLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'Hotels', href: '/hotels' },
  { name: 'Weddings', href: '/wedding' },
  { name: 'Cruises', href: '/cruise' },
  
  
  { name: 'Contact', href: '/form' },
];

const experienceLinks = [
  { name: 'Andaman', href: '/Andaman' },
  { name: 'Goa', href: '/goa' },
  { name: '4 Dham', href: '/dham' },
  { name: 'International', href: '/international' },
  
  
];

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-3">
      <div className="container mx-auto px-4"> 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className='ml-20'>
            
            <Image
              src={logo}
              alt="welcome tours"
              width={120}
              
              className="mb-4 rounded-2xl"
            />
             <div>
            <h4 className="font-semibold mb-4 text-lg trips-exotica-gold">Share your travels with us</h4>
            <div className="flex space-x-4 text-center">
              
              <a href="https://www.instagram.com/wellcometourss?igsh=MTBrZWsxeDB2d3Jqcg==" className="text-white hover:text-primary ml-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://www.google.com/maps/place/Wellcome+Tours+New+Delhi/@28.631675,76.903198,11z/data=!4m8!3m7!1s0x
              390ce1a34b1a9bdd:0x41be6932b57c1ee2!8m2!3d28.5339929!4d77.2453219!9m1!1b1!16s%2Fg%2F11fhs7_1z_?entry=ttu
              &g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D" className='font-bold ml-2'>Google Reviews</a>
            </div>
          </div>

          </div>

          

         
          
          <div>
            <h4 className="font-semibold mb-4 text-lg trips-exotica-gold">Useful information</h4>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg trips-exotica-gold">Trending</h4>
            <ul className="space-y-2">
              {experienceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-36 mt-12 text-center">
          

          
        </div>

        <hr className="border-gray-800 my-0" />

        <div className="text-center text-gray-400 text-sm">
          <p>Copyright © 2023 wellcome Tours. All Rights Reserved</p>
          <p className="mt-2">
            <a href="tel:+919811600075" className="text-gray-300 hover:text-white">+91 9811600075</a>
          </p>
          <p className="mt-4">
            Package holidays are sold by wellcome Tours<br />
            Please see our booking conditions for more information. © 2023 wellcome Tours.<br />
            Calls may be recorded for training and quality assurance purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
