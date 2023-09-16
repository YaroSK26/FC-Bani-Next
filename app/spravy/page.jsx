"use client"

import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
import Link from "next/link";

const SpravyPage = () => {
  return (
    <div>
      <motion.div
        className="mt-24 "
        variants={slideIn("left", "tween", 0.2, 1)}
        initial="hidden"
        animate="show"
      >
        <h1 className="text-center mb-4 font-bold text-2xl">
          Najnovšia správa
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10   ">
          <div className="flex justify-center md:justify-end items-center">
            <img src="/fcbani.png" alt="" className="w-52" />
          </div>
          <div className="flex justify-center items-start mx-auto md:mx-0 pl-10  w-[300px]">
            <p>
              Stránka FC Bäni práve prešla aktualizáciou! Rovnaký dizajn no
              vylepšené funkcie čakajú na fanúšikov futbalového klubu. Sledujte
              aktuálne správy, štatistiky tímu a viac na našej modernizovanej
              webovej stránke. Buďte stále v obraze s novinkami ohľadom FC Bäni!
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-24 "
        variants={slideIn("left", "tween", 0.2, 1)}
        initial="hidden"
        animate="show"
      >
        <h1 className="text-center mb-4 font-bold text-2xl">
          Idk datim
        </h1>
        <div className="grid grid-cols-1 gap-10   ">
          <div className="flex justify-center items-center">
            <video width="300" height="300" controls>
              <source src="/leskinen.mov" type="video/mp4" />
            </video>
          </div>
          <div className="flex justify-center items-center mx-auto pl-10  w-[575px]">
            <p>
              Peter German a Alex Kordillery z FC Baniyas boli na finálovom
              zápase HC Košice a HKM Zvolen, kde HC Košice vyhrali ligu so skóre
              3:0 a v serii 4:1. Na zápase opäť skandovali svoj obľúbený pokrik
              &quot;Vaaajooooo&quot; . O deň neskôr sa stretli s hráčmi HC
              Košice, kde sa odfotili a videli zopár zaujímavých momentov. Brett
              Pollock potľapkal Jakuba Ferenca na opačné rameno a rýchlo
              odišiel, pričom keď sa Ferenc otočil na stranu kde bol potľapkaný,
              nikoho neuvidel. Ville Leskinen sa na stretávke dosť opil a
              dokonca rozbil niekoľko pohárov, pričom jeden z nich hodil silou
              na zem. Peter a Alex tiež videli, ako sa Leskinen vymočil na
              verejnosti. <br />
              Celkový zážitok z návštevy finálového zápasu a stretávky s hráčmi
              HC Košice bol pre hráčov FC Bani Petra a Alexa úžasný. Boli
              svedkami historického víťazstva a mali príležitosť spoznať hráčov,
              ktorých obdivujú a sledujú na ľade. Aj vďaka týmto zábavným a
              vtipným momentom, ktoré zažili, si to Peter a Alex zapamätajú ešte
              lepšie a s úsmevom na tvári na to budú spomínať aj v budúcnosti.
            </p>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default SpravyPage;
