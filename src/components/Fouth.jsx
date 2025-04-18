"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion"
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react"

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
    image: "https://nextjs.shrineyatra.com/wp-content/uploads/2021/07/Char-Dham-Yatra.jpg?height=300&width=400",
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
  {
    name: "Shimla",
    country: "India",
    
    image: "https://ihplb.b-cdn.net/wp-content/uploads/2014/06/Best-Things-to-do-in-Shimla.jpg?height=300&width=400",
    category: "Mountain",
  },
  {
    name: "Cancun",
    country: "Mexico",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6qosfcVQA10FnQnh2EEMgxOOP0rPpz7Gxv3CTwFx2HghhHwbdIexmfo-hDjCq-tcVEfE&usqp=CAU?height=300&width=400",
    category: "Beach",
  },
  {
    name: "Santorini",
    country: "Greece",
    image: "https://plus.unsplash.com/premium_photo-1661964149725-fbf14eabd38c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FudG9yaW5pfGVufDB8fDB8fHww?height=300&width=400",
    category: "Romantic",
  },
  {
    name: "Dubai",
    country: "UAE",
    image: "https://i.natgeofe.com/n/483e77f7-f52b-432a-a0f5-d9cd1489a95a/madinat-jumeirah-dubai-uae.jpg?height=300&width=400",
    category: "City",
  },
  {
    name: "Rishikesh",
    country: "India",
    
    image: "https://invisit.in/images/destination/uttarakhand/rishikesh-thumb.jpg?height=300&width=400",
    category: "Adventure",
  },
  {
    name: "London",
    country: "UK",
    image: "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/topic-london-gettyimages-760251843-feature?_a=BAVAZGDX0https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/topic-london-gettyimages-760251843-feature?_a=BAVAZGDX0?height=300&width=400",
    category: "City",
  },
  {
    name: "Kasol",
    country: "India",
    
    image: "https://media-cdn.tripadvisor.com/media/photo-s/1c/73/39/45/kasol-is-a-hamlet-in.jpg?height=300&width=400",
    category: "Mountain",
  },
  {
    name: "Kyoto",
    country: "Japan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi4sX87VY9hnQGyebt2t0aYuu9bpKDhhokOw&s?height=300&width=400",
    category: "Cultural",
  },
  
  {
    name: "Bali",
    country: "Indonesia",
    image: "https://assets.cntraveller.in/photos/63f5b2d472cc3e2749d663f5/1:1/w_4016,h_4016,c_limit/GettyImages-1145042281.jpeg?height=300&width=400",
    category: "Beach",
  },
  {
    name: "Swiss Alps",
    country: "Switzerland",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8v1Ss3mehPhCYij_-el3bEyVtmpQ-MdI4ffMAyyjL_oPAhNCb6CYVo0PHKwWTJpqKwRA&usqp=CAU?height=300&width=400",
    category: "Mountain",
  },
  
]

const categories = ["All", "Beach", "Mountain", "City", "Cultural", "Adventure", "Romantic"]
import { useRouter } from "next/navigation";

const Fouth = () => {
  const router=useRouter();
  const send=()=>{
    router.push("/destinations")

  }
  const contact=()=>{
    router.push("/form")

  }
 

  const [activeCategory, setActiveCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(0)
  const controls = useAnimation()
  const ref = useRef(null)
  const sliderRef = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.1 })

  // Filter destinations based on active category
  const filteredDestinations =
    activeCategory === "All" ? allDestinations : allDestinations.filter((dest) => dest.category === activeCategory)

  // Calculate items per page based on screen size
  const getItemsPerPage = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 2 // Mobile
      if (window.innerWidth < 1024) return 6 // Tablet
      return 8 // Desktop
    }
    return 8 // Default
  }

  const itemsPerPage = getItemsPerPage()
  const totalPages = Math.ceil(filteredDestinations.length / itemsPerPage)

  // Get current page items
  const getCurrentPageItems = () => {
    const startIndex = currentPage * itemsPerPage
    return filteredDestinations.slice(startIndex, startIndex + itemsPerPage)
  }

  // Handle category change
  useEffect(() => {
    setCurrentPage(0) // Reset to first page when category changes
  }, [activeCategory])

  // Animation controls
  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  // Navigation functions
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const pageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section className="bg-slate-50 py-24" ref={ref}>
      <div className="container">
        <motion.div
          className="flex flex-col items-center text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Explore All Destinations</h2>
          <p className="mt-4 max-w-2xl text-gray-500">
            Discover amazing places around the world, from tropical paradises to historic cities
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

        {/* Slider Container */}
        <div className="relative" ref={sliderRef}>
          {/* Slider Navigation - Previous */}
          <motion.button
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-md ${
              currentPage === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"
            }`}
            onClick={prevPage}
            disabled={currentPage === 0}
            whileHover={currentPage > 0 ? { scale: 1.1 } : {}}
            whileTap={currentPage > 0 ? { scale: 0.9 } : {}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <ChevronLeft className="h-6 w-6 text-teal-500" />
          </motion.button>

          {/* Slider Content */}
          <div className="overflow-hidden mx-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                variants={pageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
              >
                {getCurrentPageItems().map((destination, index) => (
                  <motion.div
                    key={`${destination.name}-${index}`}
                    className="overflow-hidden rounded-lg shadow-md group bg-white"
                    variants={itemVariants}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <motion.img
                        src={destination.image}
                        alt={destination.name}
                        className="object-cover w-full h-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-3 text-white">
                        <h3 className="text-base font-bold">{destination.name}</h3>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span className="text-xs">{destination.country}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Navigation - Next */}
          <motion.button
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-md ${
              currentPage === totalPages - 1 ? "opacity-50 cursor-not-allowed" : "opacity-100"
            }`}
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            whileHover={currentPage < totalPages - 1 ? { scale: 1.1 } : {}}
            whileTap={currentPage < totalPages - 1 ? { scale: 0.9 } : {}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <ChevronRight className="h-6 w-6 text-teal-500" />
          </motion.button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <motion.button
              key={index}
              className={`h-2 rounded-full ${currentPage === index ? "w-6 bg-teal-500" : "w-2 bg-gray-300"}`}
              onClick={() => goToPage(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.5 } },
          }}
        >
          <motion.button
            className="bg-teal-500 hover:bg-teal-600 mr-3 text-white px-6 py-2 rounded-md font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={send}
          >
            View All Destinations
          </motion.button>
          <motion.button
            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={contact}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Fouth;