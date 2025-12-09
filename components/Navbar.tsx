import React, { useState, useEffect } from "react";
import Adroit from "../src/assets/Adroit.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 35) {
        setIsVisible(false);
      } else if (lastScrollY > currentScrollY) {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full bg-white z-50 shadow-md transition-transform duration-300 top-0 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src={Adroit.src} alt="logo" className="h-15 w-15 mr-2" />
            <span className="text-2xl font-bold bg-linear-to-r from-pink-400 to-pink-400 bg-clip-text text-transparent">
              Adroit
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-400 hover:text-black transition"
            >
              What we do
            </a>
            <a
              href="#solutions"
              className="text-gray-400 hover:text-black transition"
            >
              Solutions
            </a>
            <a
              href="#industries"
              className="text-gray-400 hover:text-black transition"
            >
              Industries
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-black transition"
            >
              Projects
            </a>
            <a
              href="#footer"
              className="text-gray-400 hover:text-black transition"
            >
              Contact Us
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white backdrop-blur-sm">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a
              href="#features"
              className="block text-gray-600 hover:text-white py-2"
            >
              What we do
            </a>
            <a
              href="#solutions"
              className="block text-gray-600 hover:text-white py-2"
            >
              Solutions
            </a>
            <a
              href="#industries"
              className="block text-gray-600 hover:text-white py-2"
            >
              Industries
            </a>
            <a
              href="#projects"
              className="block text-gray-600 hover:text-white py-2"
            >
              Projects
            </a>
            <a
              href="#footer"
              className="block text-gray-600 hover:text-white py-2"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
