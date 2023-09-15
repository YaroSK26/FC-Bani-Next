"use client";

import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";



const Historia = () => {
  const [ref, inView] = useInView();
   const [hasAnimated, setHasAnimated] = useState(false);

   if (inView && !hasAnimated) {
     setHasAnimated(true);
   }
  return (
    <div className="bg-gray-900 text-gray-200 p-2">
      <p className="md:text-4xl text-3xl text-center pt-5 pb-3 underline ">
        História
      </p>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        initial="hidden"
        animate={hasAnimated ? "show" : "hidden"}
        ref={ref}
      >
        <strong>Začiatky (2021-teraz)</strong>
        <br />
        🇭🇺 <br />
        <p>
          Maďarský obchodník <strong> Stanislav Martinčko </strong> narodený 10
          Január 1950 v mestečku Hernacurdok, bol autorom myšlienky založenia
          futbalového klubu v Košiciach. Ním zverejnený inzerát v športovom
          časopise (8 . októbra 2021) vyvolal veľkú odozvu medzi športovými
          nadšencami.
        </p>
        <br />
        💩
        <br />
        <p>
          <strong> Branislav Martinček </strong>, v Košiciach známy ako Cifo, sa
          v roku 2021 presťahoval do mesta Košice z obchodných dôvodov. Mesiac
          po zverejnení oznámenia už predsedal prvému oficiálnemu tímovému
          mítingu v triede 9.B. Spolu s Janíkom Šunkou a Baroslavom Jarabašom sa
          historického zhromaždenia zúčastnili aj Peter German, Oliver džura,
          Hemilton Kollár, David Deško, Jakup Pasta. Branislav Martinček sa po
          zhromaždení stal prvým prezidentom klubu.
        </p>
        <br />
        🟢
        <br />
        <strong> Farby klubu </strong>
        <p>
          <strong>Zelená a čierna </strong> farba sú oficiálnymi farbami tímu a
          klub sa nimi reprezentuje už viac ako jeden rokov. Aj preto je FC Bäni
          všeobecne známa ako “Prestaňte!??? ”, čo odkazuje na mená týchto
          farieb v maďarskom jazyku. Doteraz sa nevie presne prečo sa vedenie
          pôvodne rozhodlo práve pre tieto farby, a hoci vzniklo niekoľko
          teórií, nikomu sa nikdy nepodarilo zaistiť dôkazy, ktoré by výber
          farieb z akéhokoľvek dôvodu objasňovali. Prirodzene väčšina z teórií
          vychádza z miesta vzniku a pôvodu klubu. Niektoré napríklad tvrdia, že
          niekoľko rokov po založení FC Bäni boli farby prevzaté od jedného
          maďarského klubu. Dnes však vieme, že tieto hypotézy sú vysoko
          nepravdepodobné. Ďalšia zaujímavá, ale nepreukázaná teória je, že
          zakladatelia sa rozhodli pre výber farieb na základe farby Beniho. A
          sú tu ďalšie oveľa prozaickejšie návrhy, napríklad ten ktorý tvrdí, že
          matka bratov Trebuňovcov (Marek a Marek) dodávala hráčom dresy so
          zelenou a čiernou farbou. Ale ako už bolo uvedené vyššie, žiadnej z
          týchto teórií sa nepodarilo ponúknuť nezvratné dôkazy o tom, prečo
          klub použil tieto farby.
        </p>
        <br />
        👕
        <p>
          <strong>Dresy</strong> <br />7 eur. Dresy sú vyrobené Janovou tetou.
          Ďakujeme.
        </p>
        <br />
        🗣️ <br />
        <strong> Hymna </strong>
        <br />
        Vajoooooooooooooo vaaajoooooooooo vaaaaaajooo vajooo vajooo vajooooo
        vajo vajo vaaajooo vajo vajooooo. Zopakovať 5x. <br />
        <br />
        🏟️ <br />
        <strong> Štadión </strong> <br />
        Ihrisko ZŠ druzicová 4. <br />
        <br />
        🔰 <br />
        <strong> Logo klubu </strong> <br />
        Vytvorené v aplikácii na vytváranie log. Znázorňuje farby dresov a šport
        - futbal ktorý klub hrá. <br />
      </motion.div>
      <img
        className="pozadieBani"
        src="/fcbani.png"
        alt=" obrázok loga FC Bäni"
      />
      <div className="bg-gray-900 h-16" id="zostava"></div>
    </div>
  );
};

export default Historia;
