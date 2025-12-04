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
      } else if(lastScrollY > currentScrollY) {
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
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-400 hover:text-black transition"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-black transition"
            >
              Contact
            </a>
            <a
              href="#solutions"
              className="text-gray-400 hover:text-black transition"
            >
              Solutions
            </a>
            <a
              href="#case-Study"
              className="text-gray-400 hover:text-black transition"
            >
              Case Study
            </a>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a
              href="#features"
              className="block text-gray-300 hover:text-black py-2"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block text-gray-300 hover:text-black py-2"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="block text-gray-300 hover:text-black py-2"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
