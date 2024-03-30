"use client";

import { motion } from "framer-motion";
import {slideIn } from "../utils/motion";
import Link from "next/link";

const Novinka = () => {
  return (
    <motion.div
      className="mt-24 "
      variants={slideIn("left", "tween", 0.2, 1)}
      initial="hidden"
      animate={"show"}
    >
      <h1 className="text-center mb-4 font-bold text-3xl">Najnovšia správa</h1>
      <div className="grid grid-cols-1 gap-10   ">
        <div className="flex justify-center items-center ">
          <img
            src="./rudnany.png"
            alt=""
            className="w-72 h-72 border-black border-2"
          />
        </div>
        <div className="flex justify-center  items-center mx-auto p-2 w-[300px] sm:w-[575px] mb-4">
          <p>
            Prestup Janka Šunky: „Dnes som absolvoval prvý OŠK Rudňany tréning a
            chcem povedať, že ako kapitán FC Bäni odchádzam z tohto tímu a
            prestupujem do tímu OŠK Rudňany. Hodnota prestupu je 2€. Chcem
            poďakovať všetkým členom FC Bäni a želám len to najlepšie a vždy
            bude v mojom srdci FC Bäni.Novým kapitánom FC Bäni sa stáva Peter
            Herman, gratulujem. Neodchádzam navždy, niekedy sa určite vrátim.
            Navždy verny, zeleno čierny. Jedine Vaaaaajoooooooooooooo,
            vajoooooooooo 🖤💚“ <br />
            <Link className="underline text-green-700" href={"/spravy"}>
              Pozri staršie správy.
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Novinka;
