import { motion, stagger } from "motion/react";
import { assets } from "@/src/assets/assets";
import type { IconType } from "react-icons";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

type IconLink = {
  name: string;
  icon: React.ReactElement<IconType>;
};

export const icons: IconLink[] = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={20} />,
  },

  {
    name: "Twitter",
    icon: <FaTwitter size={20} />,
  },

  {
    name: "Facebook",
    icon: <FaFacebook size={20} />,
  },

  {
    name: "Instagram",
    icon: <FaInstagram size={20} />,
  },

  {
    name: "Github",
    icon: <FaGithub size={20} />,
  },
];


// --- FRAMER MOTION VARIANTS ---
const footerVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delayChildren: stagger(0.05, { from: "last" }) },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// --- MAIN FOOTER COMPONENT ---
export default function FooterSmall() {
  return (
    <motion.footer
      className="bg-pink-100 font-inter"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
    >
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-8 ">
        {/*  */}
        <div className="flex flex-col md:flex-row md:gap-6 lg:gap-8 xl:gap-24 items-start lg:justify-between w-full">
          <div className="flex flex-row items-center gap-2">
            <img
              src={assets.logoAdroit.src}
              alt="Adroit Logo"
              className="w-10 h-10"
            />
            <p className="font-inter text-xl text-black lg:text-2">
              Adroit 360
            </p>
          </div>
          <div className="border border-gray-300 w-full hidden md:block md:w-0 md:h-12 " />
          <div className="hidden md:block">
            <p className="text-black text-base">
              Kwame Gyan Complex,
              <br />
              Accra, Ghana
            </p>
          </div>
          <div className="border border-gray-300 w-full md:w-0 md:h-12" />
          <div className="space-y-4 md:space-y-0 mt-3">
            <p className="text-sky-400 text-base md:hidden block">
              Kwame Gyan Complex,
              <br className="hidden md:block" />
              Accra, Ghana
            </p>
            <div className="mb-3">
              <p className="text-black text-base">T:+233 20 076 5236</p>
              <p className="text-black text-base">E:adroit360@info.com</p>
            </div>
          </div>
          <div className="border border-gray-300 w-full md:w-0 md:h-12 " />
          {/* Mobile Icons */}
          <div className="grid grid-cols-3 w-full gap-4 md:hidden mt-3">
            {icons.map((item) => (
              <motion.a
                key={item.name}
                // href={item.href}
                className="text-pink-900/90 flex flex-col items-center justify-center space-y-3 hover:text-pink-900 transition duration-200 transform hover:scale-125"
                aria-label={item.name}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.icon}
                <p className="text-base">{item.name}</p>
              </motion.a>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex flex-row gap-4 items-center">
            {icons.map((item) => (
              <motion.a
                key={item.name}
                // href={item.href}
                className="text-pink-900/90 flex flex-col items-center justify-center space-y-2 hover:text-pink-900 transition duration-200 transform hover:scale-125"
                aria-label={item.name}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.icon}
                <p className="text-sm">{item.name}</p>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex mt-6">
          {/* Copyright */}
          <motion.p
            className="text-xs leading-5 text-pink-900 order-1"
            variants={itemVariants}
          >
            &copy; {new Date().getFullYear()} Adroit 360 All rights reserved.
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
}
