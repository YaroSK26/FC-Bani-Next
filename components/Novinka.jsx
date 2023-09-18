"use client";

import { motion } from "framer-motion";
import {slideIn } from "../utils/motion";
import Link from "next/link";

const Novinka = () => {
  return (
    <motion.div
      className=" my-10 "
      variants={slideIn("left", "tween", 0.2, 1)}
      initial="hidden"
      animate="show"
    >
      <h1 className="text-center mb-4 font-bold text-2xl">Najnovšia správa</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10   ">
        <div className="flex justify-center md:justify-end items-center">
          <img src="/fcbani.png" alt="fc Bäni logo" className="w-52" />
        </div>
        <div className="flex justify-center items-start mx-auto md:mx-0 pl-10  w-[300px]">
          <p>
            Stránka FC Bäni práve prešla aktualizáciou! Rovnaký dizajn no
            vylepšené funkcie čakajú na fanúšikov futbalového klubu. Sledujte
            aktuálne správy, štatistiky tímu a viac na našej modernizovanej
            webovej stránke. Buďte stále v obraze s novinkami ohľadom FC Bäni! &nbsp;
            <Link className="underline text-green-700" href={"/spravy"}>Pozri staršie spravy.</Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Novinka;
