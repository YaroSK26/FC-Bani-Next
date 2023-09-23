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
        <div className="flex justify-center items-center">
          <img src="/porada.jpg" alt="" className="w-72" />
        </div>
        <div className="flex justify-center text-left items-center mx-auto p-2 w-[350px] sm:w-[575px] mb-4">
          <p>
            Včera sa konala dôležitá schôdza FC Bäni, na ktorej sa klubové
            vedenie stretlo s hráčmi a trénermi. Po dlhom rokovaní a diskusiách
            boli nakoniec podpísané nové zmluvy, ktoré budú formovať budúcnosť
            tímu. Hráči s nádejou očakávajú nadchádzajúcu sezónu a veria, že
            tieto zmluvy prinesú úspech na ihrisku. Toto stretnutie prišlo
            krátko po prehre FC Košice v zápase proti Trenčínu pred Decatlonom,
            a tak sa nám zdá, že nové zmluvy sú dôležitým krokom k návratu k
            víťazným výkonom.&nbsp;
            <Link className="underline text-green-700" href={"/spravy"}>
              Pozri staršie spravy.
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Novinka;
