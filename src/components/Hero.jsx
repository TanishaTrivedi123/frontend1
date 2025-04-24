import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import UpcomingEvent from "./UpcomingEvent";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [open, setOpen] = useState(false);

  const handleOpenOnclick = () => {
    setOpen(true);
  };

  useGSAP(() => {
    // Animations
    gsap.from(".hero-main-title", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
    });

    gsap.from(".hero-sub-line", {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(3)",
      delay: 0.6,
    });

    gsap.from(".hero-subtitle", {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.9,
    });

    gsap.to(".hero-button:nth-child(1)", {
      y: -12,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".hero-button:nth-child(2)", {
      y: -12,
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.3,
    });
  }, []);

  return (
    <>
      <div className="font-sans top-0 left-0 w-full h-screen overflow-hidden -z-10">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/src/assets/Background2.png')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content Container */}
        <div className="relative h-full flex flex-col items-center justify-center px-4 text-white pt-16">
          {/* Main Title */}
          <h1 className="text-center mb-8 px-4">
            <span className="hero-main-title block text-2xl font-bold sm:text-3xl md:text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-poppins">
              Your Tech Journey Starts Here
            </span>

            <span className="hero-sub-line block mt-2 sm:mt-8 md:mt-7 text-lg sm:text-2xl md:text-xs lg:text-3xl xl:text-4xl font-medium text-gray-300 animate-pulse font-inter">
              - Are You Ready? -
            </span>
          </h1>

          {/* Sub Title */}
          <h2 className="hero-subtitle mb-8 text-lg font-medium sm:text-xl md:text-base lg:text-3xl text-center text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed font-inter">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold hover:from-blue-500 hover:to-purple-600 transition-all duration-300">
              Join a community
            </span>{" "}
            of tech enthusiasts and{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 relative group">
              build the future
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </span>{" "}
            of technology!
          </h2>

          {/* Button Group */}
          <div className="flex flex-row gap-6 sm:flex-row sm:gap-8 pt-11">
            <Link to="/events">
              <button className="hero-button transform rounded-full bg-purple-500 text-white px-8 py-3 text-lg font-semibold shadow-lg transition-transform duration-75 ease-in-out hover:scale-105 active:bg-purple-500 active:shadow-none border-2 border-transparent hover:border-purple-400 hover:bg-transparent focus:outline-2 focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 sm:px-10 hover:shadow-purple-200 hover:shadow-lg font-poppins">
                Explore Events
              </button>
            </Link>

            <button
              className="hero-button transform rounded-full bg-purple-500 text-white px-8 py-3 text-lg font-semibold shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 active:bg-purple-500 active:shadow-none border-2 border-transparent hover:border-purple-400 hover:bg-transparent focus:outline-2 focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 sm:px-10 hover:shadow-purple-200 hover:shadow-lg font-poppins"
              onClick={handleOpenOnclick}
            >
              Upcoming Events
            </button>
          </div>
        </div>

        {/* Render UpcomingEvent outside button group */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  duration: 0.3,
                }}
                className="relative"
              >
                <UpcomingEvent onClose={() => setOpen(false)} />

                <motion.button
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  onClick={() => setOpen(false)}
                  className="absolute -top-3 -right-3 text-white bg-red-500 hover:bg-red-600 w-8 h-8 rounded-full font-semibold shadow-md flex items-center justify-center"
                >
                  X
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Hero;
