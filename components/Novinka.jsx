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
        <div className="flex justify-center  items-center ">
          <img
            src="./pohyb.png"
            alt=""
            className="w-72 h-52 border-black border-2"
          />
        </div>
        <div className="flex justify-center text-center  items-center mx-auto p-2 w-[300px] sm:w-[575px] mb-4">
          <p>
            18.6.2024, FC Bäni vyhralo ďalší zápas s bilanciou 15:9, tentokrát
            proti silnému súperovi: Podpor Pohyb Košice. Ide o najlepší (zároveň
            aj jediný) futsalový klub v Košiciach. Hráči FC Bäni dokázali zdolať
            súpera hlavne vďaka technickej prevahe a dokonalému čítaniu hry. V
            zápase nastúpili aj hráči Matúš Kollár a Janko Šunka, obaja sa
            vrátili do FC Bäni na hosťovanie a zotrvajú v tomto klube až do
            začiatku sezóny. Góly: Jakub Šimko: celkom dosť Janko Šunka: veľa
            Matúš Kollár: ešte viac Taktiež musíme pochváliť heroický výkon
            brankára Petra Hermana, ktorý podržal mužstvo v najťažších chvíľach.
            <br />
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
