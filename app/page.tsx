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
import UseScrollAdvanced from "@/components/ScrollFx";
import SkillCount from "@/components/SkillCount";


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
    <div className="min-h-screen bg-white overflow-x-clip">
      <Navbar/>

      <Hero/>

      <SkillCount/>

      <Features></Features>

      <Solutions></Solutions>

      <Industries></Industries>
      
      {/* <Carousel></Carousel> */}

      <Employers></Employers>

      <Footer></Footer>
    </div>
  );
}
