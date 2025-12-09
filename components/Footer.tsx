import { Checkbox, TextareaAutosize } from "@mui/material";
import { ArrowArcRightIcon, ArrowRightIcon } from "@phosphor-icons/react";
import FooterSmall from "./FooterSmall";
import { assets } from "@/src/assets/assets";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


const Footer = ()=>{
const targetRef = useRef(null);
const {scrollYProgress} = useScroll({
  target: targetRef,
  offset: ["start end" , "end start"]
})
const scale = useTransform(scrollYProgress, [0,1], [0.7, 2] )

    return (
      <section id="footer" className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <h2 className="text-4xl md:text-2xl font-extrabold text-pink-300 mb-7 mt-5 ">
            Solutions
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="">
              <div className="grid grid-cols-2">
                <div className="">
                  <p className="hover:text-blue-400 m-2">
                    <a href="#">Managed services</a>
                  </p>
                  <p className="hover:text-blue-400 m-2">
                    <a href="#">Custom Software Development</a>
                  </p>
                  <p className="hover:text-blue-400 m-2">
                    <a href="#">IT Consulting & Digital Strategy</a>
                  </p>
                </div>
                <div className="">
                  <p className="hover:text-blue-400 m-2">
                    <a href="#">DevOps & Automation Solutions</a>
                  </p>
                  <p className="hover:text-blue-400 m-2">
                    <a href="#">Network & Systems Engineering</a>
                  </p>
                  <p className="hover:text-blue-400 m-2">
                    <a href="#">Data Intelligence & Analytics</a>
                  </p>
                </div>
              </div>

              <h2 className="text-4xl md:text-2xl font-extrabold text-pink-300 mb-8 mt-10">
                Agency
              </h2>
              <div className="grid grid-cols-2">
                <div className="">
                  <p className="hover:text-blue-400 m-2">
                    <a href="#">About us</a>
                  </p>
                  <p className="hover:text-blue-400 m-2">
                    <a href="#">why Us</a>
                  </p>
                  <p className="hover:text-blue-400 m-2">
                    <a href="#">Team</a>
                  </p>
                  <p className="hover:text-blue-400 m-2">
                    <a href="#">Careers</a>
                  </p>
                </div>
                <div className="mb-4">
                  <p className="hover:text-blue-400 m-2">
                    <a href="#">FAQs</a>
                  </p>
                </div>
              </div>
              <div className="grid grid-rows-3 mt-5">
                <input
                  placeholder="Get in touch"
                  type="email"
                  id="Email"
                  aria-description="email"
                  className="mt-0.5 w-1/2 rounded border border-gray-500 shadow-sm sm:text-sm my-4"
                />
                <p className="text-gray-400">
                  <input
                    type="checkbox"
                    className=" mr-2 size-3 rounded border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600"
                  />
                  I agree to the Privacy Policy and give my permission to
                  process my personal data for the purposes specified in the
                  Privacy Policy.
                </p>
                <a
                  className="mt-3 rounded-sm w-1/5 flex flex-row items-center justify-between gap-2 border border-indigo-600 bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-white hover:text-indigo-600 transition-colors duration-200"
                  href="#"
                >
                  <span>Send</span>
                  <ArrowRightIcon className="w-2/3 " />
                </a>
              </div>
            </div>
            <div className="max-sm:hidden flex justify-center items-center">
              <motion.div ref={targetRef} style={{scale}} className="bg-amber-50 rounded-full border-20 border-pink-400 h-1/2 flex">
                <img
                  src={assets.logoAdroit.src}
                  alt="adroit"
                  className="justify-center items-center object-none"
                />
              </motion.div>
            </div>
          </div>
        </div>
        <FooterSmall />
      </section>
    );
}

export default Footer;