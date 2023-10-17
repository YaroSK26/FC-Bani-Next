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
        ref={ref} className="mb-5"
      >
        <strong>Začiatky (2021-teraz)</strong>
        <br />
        🇭🇺 <br />
        <p>
          V roku 2021 sa začala fascinujúca kapitola v histórii košického
          futbalu, a to vďaka maďarskému obchodníkovi 
          <span className="font-bold"> Stanislavovi Martinčkovi</span>. Narodil
          sa 10. januára 1950 v malebnom mestečku Hernacurdok, no jeho vízia sa
          rozvíjala v Košiciach. Stal sa autorom revolučnej myšlienky založenia
          nového futbalového klubu v tomto meste. Jeho prvým krokom k
          dosiahnutiu tejto ambicióznej myšlienky bol inzerát, ktorý zverejnil v
          športovom časopise dňa 8. októbra 2021. Tento inzerát bol akýmsi
          kameňom úrazu, ktorý spustil lavínu udalostí a vyvolal ohromnú odozvu
          medzi miestnymi športovými nadšencami.
        </p>
        <br />
        💩
        <br />
        <p>
          Samotný <span className="font-bold">Branislav Martinček</span> , ktorý
          bol v Košiciach známy pod prezývkou Cifo, sa do mesta presťahoval z
          obchodných dôvodov. O necelý mesiac po zverejnení inzerátu už stál v
          čele prvého oficiálneho tímového mítingu v triede 9.B. Na tomto
          stretnutí sa stretli ďalší nadšení športovci, medzi nimi Janík Šunka,
          Baroslav Jarabaš, Peter German, Oliver Džura, Hemilton Kollár, David
          Deško a Jakub Pasta. Branislav Martinčko sa na tomto historickom
          zhromaždení stal prvým prezidentom novovzniknutého klubu, čím začal
          budovať základy pre futbalový fenomén, ktorý by sa stal jedným z
          najvýznamnejších klubov v regióne.
        </p>
        <br />
        🟢
        <br />
        <strong> Farby klubu </strong>
        <p>
          Farby klubu, <span className="font-bold">zelená a čierna</span> , sú
          nesmierne dôležitým symbolom FC Bäni. Tieto farby reprezentujú klub už
          viac ako dva roky a stali sa neodmysliteľnou súčasťou jeho identity.
          Klub je všeobecne známy aj pod prezývkou &quot;Prestaňte!???&quot;, čo
          odkazuje na ich názvy v maďarskom jazyku. Zatiaľ však neexistuje
          definitívny dôkaz, ktorý by vysvetlil, prečo sa zakladatelia klubu
          rozhodli práve pre tieto farby. Existuje niekoľko teórií, ale žiadna z
          nich neposkytla presvedčivý dôkaz o tom, prečo sa klub rozhodol pre
          túto farebnú kombináciu. Jedna z teórií hovorí, že farby klub prevzal
          od maďarského futbalového klubu, ale táto teória je považovaná za
          nepravdepodobnú. Ďalšia teória hovorí o tom, že farby boli vybrané na
          základe farby Beniho, no ani to nie je definitívne potvrdené. Existuje
          dokonca aj teória, že matka bratov Trebuňovcov, ktorí hrali za klub,
          dodávala hráčom dresy v zeleno-čiernej farbe. Napriek tomu, žiadna z
          týchto teórií neponúkla definitívny dôkaz o tom, prečo sa klub
          rozhodol pre tieto farby.
        </p>
        <br />
        👕
        <p>
          <span className="font-bold">Dresy</span> FC Bäni sú skutočným klenotom
          pre fanúšikov. Tieto dresy, ktoré sú vyrobené Janovou tetou, majú
          cenovku len 7 eur a sú neodmysliteľnou súčasťou fanúšikovskej vášne
          pre tento klub. Každý dres je špeciálny a nosí s sebou hrdosť a
          oddanosť voči klubu.
        </p>
        <br />
        🗣️ <br />
        <span className="font-bold">Hymna</span> FC Bäni je nezameniteľná. Text
        &quot;Vajoooooooooooooo vaaajoooooooooo vaaaaaajooo vajooo vajooo
        vajooooo vajo vajo vaaajooo vajo vajooooo&quot; znejúci päťkrát je
        hymnou, ktorá sprevádza klub na jeho ceste k víťazstvám.
        <br /><br />
        🏟️ <br />
        <span className="font-bold">Štadión</span>, na ktorom FC Bäni hrá svoje
        domáce zápasy, sa nachádza na adrese ZŠ Druzicová 4. Je to miesto, kde
        sa koncentruje všetka vášeň a energia fanúšikov, aby povzbudzovali svoj
        tím. <br />
        <br />
        🔰 <br />
        <span className="font-bold">Logo</span> klubu FC Bäni bolo vytvorené v
        špeciálnej aplikačnej platforme na tvorbu logotypov. Logo zachytáva
        farby klubových dresov a samozrejme, symbolizuje samotný futbal, ktorý
        je srdcom klubu. Je to jednoduchý, no výrazný symbol klubovej identity.

        <br /><br />
        Celý tento príbeh FC Bäni od jeho začiatkov v roku 2021 do súčasnosti je
        príkladom odhodlania, vášne a oddanosti športu a klubu, ktorý sa stal
        dôležitou súčasťou života Košičanov. Klub je viac než len futbalový tím
        - je to spoločenstvo, ktoré spája ľudí vo vzájomnej láske k športu a
        snahe dosiahnuť výnimočné výsledky.
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
