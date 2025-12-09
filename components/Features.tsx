import React from "react";
import { Book, Check, Lightbulb, LightbulbIcon, LightbulbOffIcon } from "lucide-react";
import download from "../src/assets/undraw_programming_j1zw (1).png";
import {
  Coins,
  HeadCircuit,
  Package,
  CubeTransparent,
  LightbulbFilamentIcon,
  BookOpen,
} from "@phosphor-icons/react";
import { motion } from "motion/react";
import SkillCount from "./SkillCount";
import { assets } from "@/src/assets/assets";
import UseScrollAdvanced from "./ScrollFx";

const Features = () => {
  const features = [
    {
      title: "Innovative minds",
      description: "We stay up-to-date with the latest technology trends",
      icon: <LightbulbFilamentIcon size={64} weight="thin" />,
    },
    {
      title: "Cost effective",
      description: "Save money and time working with us",
      icon: <Coins size={70} weight="thin" />,
    },
    {
      title: "Scalable solutions",
      description: "Our solutions grow with your business",
      icon: <CubeTransparent size={64} weight="thin" />,
    },
    {
      title: "Industry expertise",
      description:
        "Tailored solutions that meet your unique needs.",
      icon: <BookOpen size={64} weight="thin" />,
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto ">
        <motion.div
          className=" "
          initial={{ opacity: 0, y: -50 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
        </motion.div>
        <div className="md:mt-10">
          <div className="bg-[#1f2123] rounded-xl h-100 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full">
              <div className="">
                <p className="text-sky-100 font-medium uppercase tracking-wide px-6 py-2">
                  WHAT WE DO
                </p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-pink-300 px-6 py-5 ">
                  Simplifying IT
                  <br />
                  for a complex world.
                </h2>
              </div>{" "}
                <UseScrollAdvanced></UseScrollAdvanced>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="grid md:grid-cols-2  lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, z: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition group text-center md:text-left"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition text-blue-400 mx-auto md:mx-0">
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
