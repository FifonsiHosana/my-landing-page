"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import SmoothHighlight from "./Highlight";


const Hero = () => {

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[url('https://images.unsplash.com/photo-1499988921418-b7df40ff03f9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-center bg-cover">
      <div className="">
        <div className=" max-w-7xl mx-auto">
          <div className="grid grid-rows-2 ">
            <div className="">
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-black mb-6  leading-tight mx-auto r px-4 text-center"
                transition={{
                  duration: 2,
                  ease: "easeIn",
                }}
              >
                Build{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Faster.</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-300 -rotate-1 -z-10 animate-[highlight_0.8s_ease-in]"></span>
                </span>{" "}
                Scale{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Smarter.</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-300 -rotate-1 -z-10 animate-[highlight_0.8s_ease-in]"></span>
                </span>
                <br />
                <span>
                  <span className="relative inline-block">
                    <span className="relative z-10">Spend Less.</span>
                    <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-300 -rotate-1 -z-10 animate-[highlight_0.8s_ease-in]"></span>
                  </span>
                </span>
              </motion.h1>
            </div>

            <div className="text-2xl md:text-4xl text-gray-700  max-w-2xl mx-auto leading-tight">
              <motion.h2
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
              >
                Take charge of your business continuity with innovative IT
                solutions
              </motion.h2>
              <div className=" flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto px-4 mt-5">
                <button
                  className=" 
            w-full sm:w-auto text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-semibold rounded-xl text-sm sm:text-base py-3 px-8 sm:px-10 transition-all duration-200 shadow-md hover:shadow-lg "
                >
                  call now
                </button>

                <button className=" w-full sm:w-auto text-indigo-700 border-2 border-indigo-700 bg-white hover:bg-indigo-50 focus:ring-4 focus:ring-indigo-100 font-semibold rounded-xl text-sm sm:text-base py-3 px-8 sm:px-10 transition-all duration-200 shadow-md hover:shadow-lg ">
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
