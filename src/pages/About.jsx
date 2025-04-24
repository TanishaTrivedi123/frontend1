import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef();
  const glassCards = useRef([]);

  useGSAP(() => {
    // Background gradient animations
    gsap.to(".gradient-circle-1", {
      x: 50,
      y: -30,
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".gradient-circle-2", {
      x: -40,
      y: 40,
      duration: 25,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Floating particles animation
    gsap.to(".particle", {
      y: 20,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        amount: 3,
        from: "random",
      },
    });

    // Heading animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".about-heading",
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      })
      .from(".about-heading", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      .from(
        ".about-heading-underline",
        {
          scaleX: 0,
          duration: 0.6,
          ease: "expo.out",
        },
        "-=0.4"
      )
      .from(
        ".about-subtitle",
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.3"
      );

    // Glass card hover effects
    glassCards.current.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -5,
          boxShadow: "0 10px 25px rgba(0, 150, 255, 0.3)",
          backdropFilter: "blur(12px) brightness(120%)",
          duration: 0.3,
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          boxShadow: "0 4px 15px rgba(0, 150, 255, 0.1)",
          backdropFilter: "blur(8px) brightness(100%)",
          duration: 0.3,
        });
      });
    });

    // Content animation
    gsap.from(".about-content-block > *", {
      scrollTrigger: {
        trigger: ".about-content-block",
        start: "top 75%",
        toggleActions: "play none none none",
        once: true,
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <section
      ref={container}
      className="relative overflow-x-hidden py-16 px-6 sm:px-12 lg:px-24 bg-gray-950 text-white"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f172a] via-[#1e293b] to-[#0f172a] opacity-40" />
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full bg-white/5"
            style={{
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
          />
        ))}

        <div className="gradient-circle-1 absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-tr from-indigo-600/30 to-blue-500/30 mix-blend-screen blur-[100px]" />
        <div className="gradient-circle-2 absolute bottom-10 right-10 w-72 h-72 rounded-full bg-gradient-to-br from-violet-600/30 to-purple-500/30 mix-blend-screen blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
      </div>

      <div className="mt-11 relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Heading */}
        <div className="text-center mb-16">
          <h1 className="about-heading text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 font-poppins tracking-tight">
            About <span className="text-white">Innovixus</span>
          </h1>
          <div className="about-heading-underline h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4 mx-auto w-24" />
          <p className="about-subtitle mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Empowering the next generation of tech innovators and leaders
          </p>
        </div>

        {/* Full-width Image Section */}
        <div className="mt-16 w-full">
          <div className="w-full h-auto rounded-2xl overflow-hidden">
            <img
              src="AboutPageImg.jpeg"
              className="w-full max-h-[70vh] object-cover mx-auto"
              alt="Innovixus Team"
              style={{
                display: "block",
                objectFit: "cover",
                objectPosition: "center center",
                minWidth: "100%",
              }}
            />
          </div>
        </div>

        {/* Enhanced Content Block */}
        <div className="mt-20 about-content-block grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-8">
            <div
              ref={(el) => (glassCards.current[0] = el)}
              className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 shadow-lg transition-all duration-300 hover:border-cyan-400/30"
            >
              <p className="text-lg leading-relaxed text-gray-200">
                Innovixus is the premier technical organization at the forefront
                of technological innovation and excellence. We bridge the gap
                between academic learning and industry requirements through
                hands-on projects, competitive events, and collaborative
                learning experiences.
              </p>
            </div>

            <div
              ref={(el) => (glassCards.current[1] = el)}
              className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 shadow-lg transition-all duration-300 hover:border-blue-400/30"
            >
              <p className="text-lg leading-relaxed text-gray-200">
                Our mission is to create an ecosystem that fosters technical
                excellence, innovative thinking, and professional development,
                preparing students for the challenges of tomorrow's tech
                landscape.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div
              ref={(el) => (glassCards.current[2] = el)}
              className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 shadow-lg transition-all duration-300 hover:border-indigo-400/30"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                What We Offer
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    title: "Annual Hackathons",
                    desc: "Industry-recognized coding competitions with real-world problem statements",
                    color: "blue",
                  },
                  {
                    title: "Technical Workshops",
                    desc: "Hands-on sessions covering emerging technologies and frameworks",
                    color: "indigo",
                  },
                  {
                    title: "Collaborative Projects",
                    desc: "Real-world applications developed in team environments",
                    color: "cyan",
                  },
                  {
                    title: "Professional Networking",
                    desc: "Connections with tech leaders, alumni, and industry experts",
                    color: "teal",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    ref={(el) => (glassCards.current[index + 3] = el)}
                    className={`p-5 rounded-lg bg-gray-900/30 backdrop-blur-sm border-l-4 border-${item.color}-500 border-t border-r border-b border-gray-700/30 transition-all duration-300 hover:border-${item.color}-400/70 hover:bg-gray-800/30`}
                  >
                    <h4 className="font-medium text-white">{item.title}</h4>
                    <p className="text-gray-300 mt-2 text-sm">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
