import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyJoinUs = () => {
  useGSAP(() => {
    // Animations remain the same
    gsap.from(".why-join-heading", {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".why-join-heading",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".why-join-item", {
      x: -30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".why-join-list",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".why-join-image-container", {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".why-join-image-container",
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    gsap.to(".why-join-image", {
      y: -30,
      scrollTrigger: {
        trigger: ".why-join-image-container",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <section className="relative z-10 -mt-12 sm:-mt-20 md:-mt-20 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent backdrop-blur-xs sm:backdrop-blur-sm md:backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-stretch">
          {/* Left Part - Text Content (unchanged) */}
          <div className="lg:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12 bg-transparent backdrop-blur-sm rounded-3xl transition-all duration-300">
            <h2 className="why-join-heading text-center text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6 relative font-poppins">
              Why Should You Join Us?
            </h2>
            <ul className="why-join-list flex flex-col items-center space-y-4 sm:space-y-5 text-base sm:text-lg">
              {[
                "Master Teamwork and Leadership",
                "Real-World Project Experience",
                "Exclusive Learning & Growth",
                "Networking with Tech Leaders",
                "Unleash Creativity & Innovation",
                "Personal & Professional Development",
              ].map((item, index) => (
                <li
                  key={index}
                  className="why-join-item flex flex-col sm:flex-row items-center group w-full max-w-md"
                >
                  <div className="flex-shrink-0 mb-2 sm:mb-0 sm:mr-4 transform group-hover:scale-110 transition-transform">
                    <div className="h-7 sm:h-8 w-7 sm:w-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center shadow-md group-hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-all duration-300">
                      <svg
                        className="h-4 sm:h-5 w-4 sm:w-5 text-white"
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
                  </div>
                  <span className="text-gray-300 group-hover:text-purple-400 transition-colors font-medium leading-snug text-center sm:text-left font-inter">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Part - Optimized Image Card */}
          <div className="why-join-image-container lg:w-1/2 flex items-center mt-6 lg:mt-0">
            <div className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-3xl shadow-lg overflow-hidden group transition-all duration-500">
              {/* Simplified image container with responsive object-position */}
              <img
                src="HomePageImage.jpeg"
                alt="People collaborating"
                className="why-join-image h-full w-full object-cover object-top sm:object-center transition-all duration-500 group-hover:scale-105"
                loading="lazy"
                style={{
                  objectPosition: "top", // fallback for small screens
                  filter: "brightness(0.95) contrast(1.05) saturate(1.1)",
                }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent"></div>

              {/* Info Card */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-gray-800/95 backdrop-blur-sm p-4 sm:p-5 rounded-xl shadow-lg border border-blue-400/30 hover:border-purple-600/50 transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent font-poppins">
                    Ready to Join?
                  </h3>
                  <p className="text-gray-300 mt-1 sm:mt-2 text-sm sm:text-base font-inter">
                    Be part of our exclusive community today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
