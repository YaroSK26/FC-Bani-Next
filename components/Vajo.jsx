"use client";

import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import Image from "next/image";

const Vajo = () => {
  return (
      <motion.div
        variants={textVariant()}
        initial="hidden"
        animate="show"
        
        className="flex flex-col md:flex-row justify-center items-center gap-10 mt-[140px] ml-0 md:ml-20"
      >
        <Image width={100} height={100} className="green " src="/realvajko.jpg" alt="vajko" />
        <p className="VAJO text-[80px] md:text-[100px]">„Vajoo“</p>
      </motion.div>
   );
};

export default Vajo;
