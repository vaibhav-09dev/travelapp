"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
import Link from "next/link";

const popularDestinations = [
  {
    name: "Switzerland",
    location: "Switzerland",
    image: "https://static.toiimg.com/photo/msid-106092213,width-96,height-65.cms?height=400&width=600",
    
    duration: "7 Days / 6 Nights",
    price: 1299,
  },
  {
    name: "4-Dham ",
    location: "India",
    image: "https://www.shrineyatra.in/wp-content/uploads/2024/05/chardham-yatra-package.webp?height=400&width=600",
    duration: "8 Days / 7 Nights",
    price: 1699,
  },
  {
    name: "Bali, Indonesia",
    location: "Indonesia",
    image: "https://cdn.audleytravel.com/2478/1770/79/16027396-pura-ulun-danu-bratan-bali.jpg?height=400&width=600",
    duration: "10 Days / 9 Nights",
    price: 1499,
  },
  {
    name: "Maldives",
    location: "Maldives",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReR9Uns1_rIDNosFY9z7YaB9lGyzOpfd8MXQ&s?height=400&width=600",
    duration: "5 Days / 4 Nights",
    price: 1899,
  },
  {
    name: "Paris, France",
    location: "France",
    image: "https://img.static-af.com/transform/45cb9a13-b167-4842-8ea8-05d0cc7a4d04/?height=400&width=600",
    duration: "6 Days / 5 Nights",
    price: 1199,
  },
  
  {
    name: "New York, USA",
    location: "United States",
    image: "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg?height=400&width=600",
    duration: "5 Days / 4 Nights",
    price: 1299,
  },
];

const Second = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="container md:py-16 py-10 md:mb-8 bg-white " ref={ref}>
      {/* Title Section */}
      <motion.div
        className="flex flex-col items-center text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-800">
      Popular Destinations
    </h2>
    <p className="mt-4 max-w-2xl text-gray-600 text-lg md:text-xl">
      Discover the most breathtaking destinations loved by travelers around the globe. Your next adventure awaits!
    </p>
      </motion.div>

      {/* Destinations Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {popularDestinations.map((destination, index) => (
          
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg group bg-white hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <Link href={"/destinations"}>
            <div className="relative h-64 w-full overflow-hidden">
              
              <motion.img
                src={destination.image}
                alt={destination.name}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <div className="flex items-center gap-1 mb-1">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{destination.location}</span>
                </div>
                <h3 className="text-xl font-bold">{destination.name}</h3>
              </div>
            </div>
            </Link>
           
          </motion.div>
          
        ))}
      </motion.div>

      {/* Call to Action */}
     
    </section>
  );
};

export default Second;