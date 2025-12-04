import React from "react";
import { Check } from "lucide-react";
import download from "../src/assets/undraw_programming_j1zw (1).png";
import {
  Coin,
  HeadCircuit,
  Package,
  CubeTransparent,
} from "@phosphor-icons/react";
import { motion } from "motion/react";

const Features = () => {
  const features = [
    {
      title: "Innovative minds",
      description: "Optimized performance out of the box",
      icon: <HeadCircuit size={64} weight="bold" />,
    },
    {
      title: "Cost effective",
      description: "Save money working with us",
      icon: <Coin size={70} weight="bold" />,
    },
    {
      title: "Responsive",
      description: "Looks perfect on every device",
      icon: <CubeTransparent size={64} weight="bold" />,
    },
    {
      title: "Type Safe",
      description: "TypeScript support included",
      icon: <Package size={64} weight="bold" />,
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto overflow-hidden">
        <div className="">
          <motion.div
            className="grid grid-cols-5 gap-30 m-10 max-w-3xl md:gap-60 "
            initial={{ opacity: 0, y: -50 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="text-4xl font-bold text-black mb-2">4.9★</div>
              <div className="text-gray-400">Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">4.9★</div>
              <div className="text-gray-400">Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">4.9★</div>
              <div className="text-gray-400">Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">4.9★</div>
              <div className="text-gray-400">Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-black mb-2">4.9★</div>
              <div className="text-gray-400">Rating</div>
            </div>
          </motion.div>

          <div className="bg-[#1f2123] rounded-xl h-100 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-full">
              <div className="">
                <p className="text-sky-100 font-medium uppercase tracking-wide px-6 py-2">
                  WHAT WE DO
                </p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-pink-300 px-6 py-5 ">
                  Simplifying IT
                  <br />
                  for a complex world.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                initial={{ opacity: 0, scale:.8, z:0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",


                }}
                whileInView={{ opacity: 1, y: 0, scale:1}}
                viewport={{ once: true }}
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition group"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition text-blue-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
