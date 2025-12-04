"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Check, Star } from "lucide-react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Solutions from "@/components/Solutions";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";
import { SwipeCarousel } from "@/components/Tech";
import Employers from "@/components/Employers";
import Carousel from "@/components/Carousel";
import Header from "@/components/Header";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Header></Header>
      
      <Features></Features>

      <Solutions></Solutions>

      <Industries></Industries>
      <Carousel></Carousel>

      <Employers></Employers>

      <Footer></Footer>

      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Adroit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
