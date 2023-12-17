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
          <img src="/eric.png" alt="" className="w-72 border-black border-2" />
        </div>
        <div className="flex justify-center text-left items-center mx-auto p-2 w-[350px] sm:w-[575px] mb-4">
          <p>
            Eric Sports, známa osobnosť Instagramu, prekvapil svojich
            sledovateľov kontroverzným krokom – ukradol logo slávneho a
            úspešného futbalového klubu FC Bäni. Tento nečakaný a
            neospravedlniteľný čin vyvolal vlnu rozhorčenia medzi fanúšikmi a
            priaznivcami klubu. Napriek tejto nespravodlivosti, komunita FC Bäni
            reaguje silným heslom: &quot;Nikdy sa nevzdáme!&quot; Tento výrok
            odráža nezlomný duch a odhodlanie klubu čeliť výzvam a prekážkam,
            ktoré im život prináša. Klub a jeho fanúšikovia sú odhodlaní
            zachovať svoju hrdosť a identitu, bez ohľadu na protivenstvá.&nbsp;
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
