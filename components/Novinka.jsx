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
            src="/PRESTUP.png"
            alt=""
            className="w-72 border-black border-2"
          />
        </div>
        <div className="flex justify-center text-left items-center mx-auto p-2 w-[300px] sm:w-[575px] mb-4">
          <p>
            Prestup Kotuša Mallára: „Vzhľadom na to že
            zajtra sa zúčastním môjho prvého tréningu s klubom MFK Ťahanovce a
            tým potvrdím môj prestup z FC Bäni do spomínaného klubu, by som sa
            chcel poďakovať všetkým členom FC Bäni (ďalej už len ako FCB) za
            príležitosť byť súčasťou tohto úžasného projektu. Počas môjho
            pôsobenia v FCB sme spoločne dosiahli mnohé úspechy ako napríklad
            víťaztvo futbalovej ligy na ZŠ Družicovej v sezone 2021/2022,
            zložili sme sa Peťovi na rukavice, FCB sa takmer zapojilo do
            miniligy, podnikli sme nespočet výjazdov za cieľom spoznať a
            povzbudiť iných futbalistov. Stretli sme sa s generačným talentom
            Landingom Sagnom. Podpísali sme dvoch špičkových hráčov (Lil D a ja
            nesom autista). FCB bude navždy v mojom srdci a sľubujem že sa
            jedného dňa vrátim, taktiež budem aj naďalej trenovať s hráčmi tímu
            FCB a zúčastňovať sa iných klubových aktivít. Aj keď opúšťam FCB ako
            hráč naďalej budem jeho súčasťou ako člen realizačného týmu a
            spoluzakladateľ. Ešte raz Vám všetkým ďakujem a už teraz sa teším na
            môj návrat domov. NAVŽDY VERNÝ ZELENO ČIERNÝ 🖤💚“ <br />
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
