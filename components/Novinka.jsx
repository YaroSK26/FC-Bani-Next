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
          <img src="/oslava.jpg" alt="" className="w-72" />
        </div>
        <div className="flex justify-center text-left items-center mx-auto p-2 w-[350px] sm:w-[575px] mb-4">
          <p>
            8. Októbra sme s radosťou neoslavili naše 2. výročie. Za tie dva roky sme
            spoločne dosiahli veľa a posilnili našu futbalovú rodinu. Sme hrdí
            na naše úspechy, ale aj napriek nášmu úsiliu sa stretávame s
            neznášanlivosťou. Je čas pripomenúť všetkým, že sme silný tím, a je
            smutné, že na to mnohí zabudli. Nikto by nemal zatemňovať našu vášeň
            a oddanosť futbalu.&nbsp;
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
