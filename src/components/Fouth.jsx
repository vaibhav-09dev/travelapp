"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const allDestinations = [
  {
    name: "Kenya Wildlife Safari",
    country: "Kenya",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0nCYRKRvWdKtmWCE-BnDkT_RvcS0SBD0TGA&s?height=300&width=400",
    category: "Adventure",
  },
  {
    name: "Andaman Islands",
    country: "India",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZNd7y5nSqJYPS8UT6bq_pUvl8RbJ82n7lbA&s?height=300&width=400",
    category: "Beach",
  },
  {
    name: "Sydney",
    country: "Australia",
    image: "https://images.locationscout.net/2019/01/sydney-harbour-bridge-australia-qjp1.webp?h=1400&q=80?height=300&width=400",
    category: "City",
  },
  {
    name: "4-dham Yatra",
    country: "India",
    image: "https://bloominghimalaya.com/wp-content/uploads/2025/05/chardham.jpeg?height=300&width=400",
    category: "Cultural",
  },
  {
    name: "Rio de Janeiro",
    country: "Brazil",
    image: "https://media.vietnamplus.vn/images/7255a701687d11cb8c6bbc58a6c807854adc86d4e86f38f883fd0a75765b357d5d9446a30888c0234e8c632fb56f3d0bb5d28a9522d2e471f1fab29ff10755f146d40851e76af414dd2c66df8c90affd/RiodeJaneiroanamazingpartinbrazil.jpg?height=300&width=400",
    category: "Beach",
  },
  {
    name: "Singapore",
    country: "Singapore",
    image: "https://www.worldfutureenergysummit.com/content/dam/sitebuilder/rxae/worldfutureenergysummit/2024/insights-blog/singapore-transforming-the-built-environment.png/_jcr_content/renditions/original?height=300&width=400",
    category: "City",
  },
];

const categories = ["All", "Beach", "Mountain", "City", "Cultural", "Adventure", "Romantic"];

const Fouth = () => {
  const router = useRouter();
  const send = () => {
    router.push("/destinations");
  };
  const contact = () => {
    router.push("/form");
  };

  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const sliderRef = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  const filteredDestinations =
    activeCategory === "All" ? allDestinations : allDestinations.filter((dest) => dest.category === activeCategory);

  const getItemsPerPage = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 2; // Mobile
      if (window.innerWidth < 1024) return 6; // Tablet
      return 8; // Desktop
    }
    return 8; // Default
  };

  const itemsPerPage = getItemsPerPage();
  const totalPages = Math.ceil(filteredDestinations.length / itemsPerPage);

  const getCurrentPageItems = () => {
    const startIndex = currentPage * itemsPerPage;
    return filteredDestinations.slice(startIndex, startIndex + itemsPerPage);
  };

  useEffect(() => {
    setCurrentPage(0); // Reset to first page when category changes
  }, [activeCategory]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <section className="bg-slate-50 py-24 xl:py-32" ref={ref}>
      <div className="container xl:max-w-[1280px] xl:mx-auto">
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl">Explore All Destinations</h2>
          <p className="mt-4 max-w-2xl text-gray-500 text-lg xl:text-xl">
            Discover amazing places around the world, from tropical paradises to historic cities.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.2 } },
          }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`rounded-full px-4 py-1 text-sm font-medium ${
                activeCategory === category ? "bg-teal-500 text-white" : "bg-white text-gray-700 border border-gray-200"
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="relative" ref={sliderRef}>
          <motion.button
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-md ${
              currentPage === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"
            }`}
            onClick={prevPage}
            disabled={currentPage === 0}
            whileHover={currentPage > 0 ? { scale: 1.1 } : {}}
            whileTap={currentPage > 0 ? { scale: 0.9 } : {}}
          >
            <ChevronLeft className="h-6 w-6 text-teal-500" />
          </motion.button>

          <div className="overflow-hidden mx-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 xl:gap-8"
              >
                {getCurrentPageItems().map((destination, index) => (
                  <motion.div
                    key={`${destination.name}-${index}`}
                    className="overflow-hidden rounded-lg shadow-md group bg-white"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="relative h-48 w-full overflow-hidden xl:h-64">
                      <motion.img
                        src={destination.image}
                        alt={destination.name}
                        className="object-cover w-full h-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-3 text-white">
                        <h3 className="text-base xl:text-lg font-bold">{destination.name}</h3>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span className="text-xs xl:text-sm">{destination.country}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-md ${
              currentPage === totalPages - 1 ? "opacity-50 cursor-not-allowed" : "opacity-100"
            }`}
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            whileHover={currentPage < totalPages - 1 ? { scale: 1.1 } : {}}
            whileTap={currentPage < totalPages - 1 ? { scale: 0.9 } : {}}
          >
            <ChevronRight className="h-6 w-6 text-teal-500" />
          </motion.button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <motion.button
              key={index}
              className={`h-2 rounded-full ${currentPage === index ? "w-6 bg-teal-500" : "w-2 bg-gray-300"}`}
              onClick={() => goToPage(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>

        <motion.div className="flex justify-center mt-12">
          <motion.button
            className="bg-teal-500 hover:bg-teal-600 mr-3 text-white px-6 py-2 xl:px-8 xl:py-3 rounded-md font-medium text-sm xl:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={send}
          >
            View All Destinations
          </motion.button>
          <motion.button
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 xl:px-8 xl:py-3 rounded-md font-medium text-sm xl:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={contact}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Fouth;