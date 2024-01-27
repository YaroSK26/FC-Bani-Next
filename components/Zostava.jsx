"use client"

import Link from "next/link";
import Hraci from "./Hraci"
import { motion } from "framer-motion";
import { textVariant,slideIn } from "../utils/motion";
  import { useInView } from "react-intersection-observer";
import { useState } from "react";


const Zostava = () => {

const [ref, inView] = useInView();
const [hasAnimated, setHasAnimated] = useState(false);

 if (inView && !hasAnimated) {
   setHasAnimated(true);
 }

  return (
    <div className="p-2">
      <h1 className="md:text-4xl text-3xl text-center pt-5 pb-3 underline ">
        Zostava
      </h1>

      <motion.p
        animate={hasAnimated ? "show" : "hidden"}
        ref={ref}
        variants={textVariant()}
        initial="hidden"
      >
        <strong className="Martincoko pb-4 text-center">
          „Preco su na ovidvoch stranach ihriska“
        </strong>
      </motion.p>
      <Link className=" flex justify-center items-center" href="/zostava.jpg">
        <motion.img
          variants={slideIn("left", "tween", 0.2, 1)}
          initial="hidden"
          animate={hasAnimated ? "show" : "hidden"}
          ref={ref}
          className="w-[20rem] mb-2"
          src="/zostava.jpg"
          alt="obrázok zostavy FC Bäni"
        />
      </Link>

      <Hraci></Hraci>
    </div>
  );
}

export default Zostava
