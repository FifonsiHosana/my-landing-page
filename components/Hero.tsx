"use client";
import React from "react";
import { useRef } from "react";
import Button from "@mui/material/Button";
import download from "../src/assets/undraw_programming_j1zw (1).png";
import inter from "../app/layout";
import { assets } from "@/src/assets/assets";
import { motion } from "motion/react"
import { duration } from "@mui/material/styles";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[url('../src/assets/white-beach-sand-background-picjumbo-com.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="">
        <div className=" max-w-7xl mx-auto">
          <div className="grid grid-rows-2 ">
            <div className="">
              <motion.h1
                className="text-6xl md:text-6xl font-bold text-black mb-6  leading-tight mx-auto r px-4 text-center"
                
                initial={{ opacity: 0, y: -50 }}
                
                animate={{ opacity: 1, y: 0 }}
                
                transition={{
                  duration: 0.8, 
                  ease: "easeOut", 
                }}
              >
                We manage your IT,
                <br />
                so you can manage your business.
              </motion.h1>
            </div>
            <div className="text-4xl text-gray-700  max-w-2xl mx-auto leading-tight">
              <motion.h2
                className="text-center"
                initial={{ opacity:0 }}
                animate={{ opacity:1,
                  scale: 1,
                }}
              transition = {{duration: .8,
                ease:"easeIn"
              }}
              >
                Take charge of your business continuity with innovative IT
                solutions
              </motion.h2>
              <div className=" grid grid-cols-2 gap-4 mt-10 w-1/2 h-1/7 justify-center justify-self-center">
                <button
                  className="
            text-white 
            bg-indigo-700 
            hover:bg-indigo-800 
            focus:ring-4 focus:ring-indigo-300 
            font-semibold 
            rounded-xl 
            text-base 
            py-0.5 px-8 "
                >
                  call now
                </button>

                <button
                  className=" text-indigo-700 
            border-2 border-indigo-700 
            bg-white 
            hover:bg-indigo-50 
            focus:ring-4 focus:ring-indigo-100 
            font-semibold 
            rounded-xl 
            text-base 
            py-0.5 px-12 
            flex items-center justify-center w-full 
            shadow-md hover:shadow-lg "
                >
                  <p className="shrink-0">our services</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
