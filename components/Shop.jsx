"use client";

import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";


const Shop = () => {
    const [ref, inView] = useInView();
     const [hasAnimated, setHasAnimated] = useState(false);

     if (inView && !hasAnimated) {
       setHasAnimated(true);
     }
  return (
    <div className="p-2">
      <h1 className="md:text-4xl text-3xl text-center pt-5 pb-3 underline">
        Shop
      </h1>

      <motion.div
        variants={textVariant()}
        initial="hidden"
        animate={hasAnimated ? "show" : "hidden"}
        ref={ref}
        className="flex flex-wrap justify-center items-center gap-32 mt-10"
      >
        <div>
          <a href="/oliver.jpg">
            <img
              src="/oliver.jpg"
              className="w-52  h-52 rounded-2xl drop-shadow-xl"
              alt="obrázok oliverovho bicykla"
            />
          </a>
          <p className="text-center py-2  text-2xl">
            Oliverov Bicykel <span className="font-bold"> 2 € </span>
          </p>
          <a target="_blank" href="/vtip1.jpg">
            <button className="bg-gray-800 text-gray-200 rounded-full px-6 py-2 font-bold mt-1 w-full buttonGradient  ">
              Kúpiť
            </button>
          </a>
        </div>
        <div>
          <a href="/BENI.jpg">
            <img
              className="w-52  h-52 rounded-2xl drop-shadow-xl"
              src="/BENI.jpg"
              alt="obrázok braňového psa"
            />
          </a>
          <p className="text-center py-2  text-2xl">
            Beni <span className="font-bold"> 0.05 € </span>
          </p>
          <a
            target="_blank"
            href="https://regiony.zoznam.sk/patranie-po-osobe/310944/martinko-stanislav/"
          >
            <button className="bg-gray-800 text-gray-200 rounded-full px-6 py-2 font-bold mt-1 w-full buttonGradient">
              Kúpiť
            </button>
          </a>
        </div>

        <div>
          <a href="/dres.jpg">
            <img
              className="w-52  h-52 rounded-2xl drop-shadow-xl "
              src="/dres.jpg"
              alt="obrázok dresu FC Bäni"
            />
          </a>
          <p className="text-center py-2  text-2xl ">
            Dres <span className="font-bold"> 7 € </span>
          </p>
          <a target="_blank" href="/merciak.webp">
            <button
              type="button"
              className="bg-gray-800 text-gray-200 rounded-full px-6 py-2 font-bold mt-1 w-full buttonGradient"
            >
              Kúpiť
            </button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Shop;
