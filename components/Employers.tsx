import React from "react";
import { assets } from "@/src/assets/assets";
import { motion } from "motion/react";

const Employers = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="">
          <div className=" ">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
              <div className="">
                <p className="text-sky-300 font-medium uppercase tracking-wide px-6 py-2">
                  WHAT WE DO
                </p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-pink-400 px-6 py-5">
                  Trusted by major brands in Africa and beyond
                  <p className="text-4xl md:text-xl text-gray-700  max-w-2xl mx-auto leading-tight">
                    Our team has delivered platforms
                    <br />
                    and products for some of the largest
                    <br />
                    organizations in Ghana and the region.
                  </p>
                </h2>
              </div>
              <div className="flex">
                <div className="grid grid-rows-3 w-full">
                  <motion.img
                    initial={{ opacity: 0, x: -50 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    src={assets.Magnate.src}
                    alt="mag"
                    className=" h-1/3 w-1.9  place-self-end"
                  />
                  <motion.img
                    initial={{ opacity: 0, x: -50 }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    src={assets.Rsmith.src}
                    alt="smith"
                    className="h-1/3 w-1.9 object-cover place-self-center"
                  />
                  <motion.img
                    initial={{ opacity: 0, x: -50 }}
                    transition={{
                      duration: 0.9,
                      ease: "easeOut",
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    src={assets.bank.src}
                    alt="bank"
                    className="w-1.9 "
                  />
                </div>
                <div className="grid grid-rows-3 w-full overflow-hidden ">
                  <motion.img
                    initial={{ opacity: 0, y: -50 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    src={assets.coke.src}
                    alt="coke"
                    className="w-1.9 self-center justify-self-end"
                  />
                  <motion.img
                    src={assets.edu.src}
                    alt="edu"
                    className="w-1.9 place-self-center"
                    initial={{ opacity: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeIn",
                    }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  />
                  <motion.img
                    src={assets.gulf.src}
                    alt="gulf"
                    initial={{ opacity: 0, y: 50 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="place-self-center w-1.9"
                  />
                </div>
                <div className="grid grid-rows-3 w-full overflow-hidden">
                  <motion.img
                    src={assets.ntheatre.src}
                    alt="health"
                    className="w-1.9 self-end justify-self-start"
                    initial={{ opacity: 0, x: 50 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  />
                  <motion.img
                    initial={{ opacity: 0, x: 50 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    src={assets.mtn.src}
                    alt="src"
                    className="w-1.9 place-self-center"
                  />
                  <motion.img
                    src={assets.petrolLogo.src}
                    alt="petrol"
                    className="w-1.9"
                    initial={{ opacity: 0, x: 50 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Employers;
