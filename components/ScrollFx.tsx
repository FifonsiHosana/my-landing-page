import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { assets } from "@/src/assets/assets";

const UseScrollAdvanced = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "180deg"]);

  return (
    <motion.img
      ref={targetRef}
      style={{ rotate }}
      src={assets.rudder.src}
      alt="rudder"
    />
  );
};

export default UseScrollAdvanced;
