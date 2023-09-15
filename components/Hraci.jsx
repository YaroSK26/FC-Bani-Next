"use client";

import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";


const Hraci = () => {
    const [ref, inView] = useInView();
     const [hasAnimated, setHasAnimated] = useState(false);

     if (inView && !hasAnimated) {
       setHasAnimated(true);
     }
  return (
    <motion.div
      initial="hidden"
      animate={hasAnimated ? "show" : "hidden"}
      ref={ref}
      variants={slideIn("left", "tween", 0.2, 1)}
      className="pt-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-1 gap-3 "
    >
      <div>
        <img
          className="w-32 h-32 rounded-full flex"
          src="/maly.png"
          alt="obrázok Malého"
        />
        <p className="mt-2">
          <strong>Makaš Lulý -</strong> je oficiálnym trenérom mužstva FC Bäni.
          S týmto mužstvom trénuje 2 krát do týždna (na hodine telesnej výchovy
          ). Makaš Lulý vie priniesť tomuto tímu množstvo skúsenosti z celého
          sveta lebo v minulosti sa venoval cestovaniu.
        </p>
      </div>
      <div>
        <img
          className="w-32 h-32 rounded-full animate-spin  "
          src="/brano.jpg"
          alt="obrázok Braňa"
        />
        <p className="mt-2">
          <strong>Martinčoko -</strong> je oficiálny majiteľ klubu FC Bäni a
          majiteľ psa Beni a taktiež aj vnuk prezidenta klubu. Tento hráč je
          maďarského pôvodu a do klubu prišiel dobrovoľne. Nevie hrať futbal.
        </p>
      </div>
      <div>
        <img
          className="w-32 h-32 rounded-full"
          src="/matus.jpg"
          alt="obrázok Matuša"
        />
        <p className="mt-2">
          <strong>Kotuš Mallár - </strong> je čert a chodí čertovať každú
          sekundu. <br />„ A sak to iba blbosti v skole robi co nemaju vyznam a
          otravuje ludi“ - Martinčoko.
        </p>
      </div>
      <div>
        <img
          className="w-32 h-32 rounded-full"
          src="/skaut.jpg"
          alt="obrázok Olivera"
        />
        <p className="mt-2">
          <strong>FC Hovězí, FC Ria, Skaut -</strong> sú jeho prezývkami. Každý
          deň vstáva o 5 ráno aby išiel do Prešova zbierať huby. Má ADHD.{" "}
        </p>
      </div>
      <div>
        <img
          className="w-32 h-32 rounded-full"
          src="/peter.jpg"
          alt="obrázok Petra"
        />
        <p className="mt-2">
          <strong>Kladivo -</strong> tento hráč chodí na Poštovú školu a nemá
          rád Repovskú. Prepáčte prišla poštárka.
        </p>
      </div>
      <div>
        <img
          className="w-32 h-32 rounded-full"
          src="/jano.jpg"
          alt="obrázok Jana"
        />
        <p className="mt-2">
          <strong>Janko Šunka -</strong> býva v meste cigánov (Rudňany) kde
          získava veľa cenných skúsenosti a práve preto si môže dovoliť hrať v
          klube ako je FC Bäni. Žid arašid.{" "}
        </p>
      </div>
      <div>
        <img
          className="w-32 h-32 rounded-full"
          src="/david1.jpg"
          alt="obrázok Dávida"
        />
        <p className="mt-2">
          <strong>Deško - </strong> rád hrá fortnetti a princa s minionmi. Jeho
          jedinou záľubou je chytanie rýb v minecrafte.
        </p>
      </div>
      <div>
        <img
          className="w-32 h-32 rounded-full"
          src="/lilD.jpg"
          alt="obrazok Lil D-eho"
        />
        <p className="mt-2">
          <strong>Lil D - </strong> prišiel do FC Bäni z FC Krásna (fuj) a
          taktiež sa živí rapom. Ruky na volante.
        </p>
      </div>
      <div>
        <img
          className="w-32 h-32 rounded-full "
          src="/jaro.png"
          alt="obrázok jara"
        />
        <p className="mt-2">
          <strong>Yaro - </strong> je frajer. Najlepší futbalista z klubu FC
          Bäni. Gulaš, Karbonátok.
        </p>
        <div className="h-16 w-4 " id="shop"></div>
      </div>
    </motion.div>
  );
};

export default Hraci;
