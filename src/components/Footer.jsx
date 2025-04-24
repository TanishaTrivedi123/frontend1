import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 border-t border-gray-800 font-inter">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          {/* Logo/Brand with tech vibe */}
          <div className="flex items-center space-x-2 mb-2">
            <div className="h-5 w-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-sm"></div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-poppins">
              Innovixus
            </span>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-inter">
            <a
              href="/"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Home
            </a>
            <a
              href="/team-members"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Core Members
            </a>
            <a
              href="/about"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Copyright with tech elements */}
          <div className="pt-2 font-inter">
            <p className="text-gray-500 text-xs tracking-wide">
              © {new Date().getFullYear()} Innovixus Tech Club •
              <span className="inline-block mx-1">v18.3.1</span> •
              <span className="inline-block ml-1 text-green-400">
                All systems operational
              </span>
            </p>
          </div>

          {/* Crafted by with subtle animation */}
          <div className="relative group mt-2">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-200"></div>
            <div className="relative px-4 py-2 bg-gray-800 rounded-lg leading-none flex items-center font-poppins">
              <span className="text-gray-300 text-xs font-mono">
                {"</>"} with ❤️ by{" "}
                <span className="font-semibold text-blue-400">
                  Innovixus Tech Club
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
