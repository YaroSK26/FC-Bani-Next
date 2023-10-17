"use client"

import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";

const SpravyPage = () => {
  return (
    <div className="mt-24">
      <motion.div
        className="mt-24 "
        variants={slideIn("left", "tween", 0.2, 1)}
        initial="hidden"
        animate={"show"}
      >
        <h1 className="text-center mb-4 font-bold text-2xl">17.10.2023</h1>
        <div className="grid grid-cols-1 gap-10   ">
          <div className="flex justify-center items-center">
            <img src="/oslava.jpg" alt="" className="w-72" />
          </div>
          <div className="flex justify-center text-left items-center mx-auto p-2 w-[350px] sm:w-[575px]">
            <p>
              8. Októbra sme s radosťou (ne)oslavili naše 2. výročie. Za tie dva
              roky sme spoločne dosiahli veľa a posilnili našu futbalovú rodinu.
              Sme hrdí na naše úspechy, ale aj napriek nášmu úsiliu sa
              stretávame s neznášanlivosťou. Je čas pripomenúť všetkým, že sme
              silný tím, a je smutné, že na to mnohí zabudli. Nikto by nemal
              zatemňovať našu vášeň a oddanosť futbalu.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-24 "
        variants={slideIn("left", "tween", 0.2, 1)}
        initial="hidden"
        animate={"show"}
      >
        <h1 className="text-center mb-4 font-bold text-2xl">23.9.2023</h1>
        <div className="grid grid-cols-1 gap-10   ">
          <div className="flex justify-center items-center">
            <img src="/porada.jpg" alt="" className="w-72" />
          </div>
          <div className="flex justify-center text-left items-center mx-auto p-2 w-[350px] sm:w-[575px]">
            <p>
              Včera sa konala dôležitá schôdza FC Bäni, na ktorej sa klubové
              vedenie stretlo s hráčmi a trénermi. Po dlhom rokovaní a
              diskusiách boli nakoniec podpísané nové zmluvy, ktoré budú
              formovať budúcnosť tímu. Hráči s nádejou očakávajú nadchádzajúcu
              sezónu a veria, že tieto zmluvy prinesú úspech na ihrisku. Toto
              stretnutie prišlo krátko po prehre FC Košice v zápase proti
              Trenčínu pred Decathlonom, a tak sa nám zdá, že nové zmluvy sú
              dôležitým krokom k návratu k víťazným výkonom.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-24 "
        variants={slideIn("left", "tween", 0.2, 1)}
        initial="hidden"
        animate={"show"}
      >
        <h1 className="text-center mb-4 font-bold text-2xl">16.9.2023</h1>
        <div className="grid grid-cols-1  gap-10   ">
          <div className="flex justify-center  items-center">
            <img src="/fcbani.png" alt="" className="w-72" />
          </div>
          <div className="flex justify-center text-left items-center mx-auto p-2 w-[350px]  sm:w-[575px]">
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
        animate={"show"}
      >
        <h1 className="text-center mb-4 font-bold text-2xl">24.4.2023</h1>
        <div className="grid grid-cols-1 gap-10   ">
          <div className="flex justify-center items-center">
            <video width="300" height="300" controls>
              <source src="/leskinen.mov" type="video/mp4" />
            </video>
          </div>
          <div className="flex justify-center text-left items-center mx-auto p-2 w-[350px]  sm:w-[575px]">
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

      <motion.div
        className="mt-24 "
        variants={slideIn("left", "tween", 0.2, 1)}
        initial="hidden"
        animate="show"
      >
        <h1 className="text-center mb-4 font-bold text-2xl">12.3.2023</h1>
        <div className="grid grid-cols-1 gap-10   ">
          <div className="flex justify-center items-center">
            <video width="300" height="300" controls>
              <source src="/IMG_2171.mov" type="video/mp4" />
            </video>
          </div>
          <div className="flex justify-center text-left items-center mx-auto p-2  w-[350px] sm:w-[575px]">
            <p>
              Dvaja hráči FC Baniyas, Peter German a Alex Kordillery, boli
              prítomní na hokejovom zápase medzi HC Košice a Dukla Michalovce,
              ktorý sa uskutočnil v nedeľu 12. marca 2023 na štadióne v
              Košiciach. Aj keď títo hráči nie sú súčasťou slovenskej hokejovej
              ligy, boli na zápase ako fanúšikovia a podporovali domáci tím. Po
              víťazstve HC Košice nad Duklou Michalovce s výsledkom 3:1, Peter a
              Alex oslavovali spolu s ďalšími fanúšikmi na štadióne a
              skandovali: &quot;Vajoooooooooooooo Vaaajoooooooooo
              Vaaaaaajooo&quot;!
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-24 "
        variants={slideIn("left", "tween", 0.2, 1)}
        initial="hidden"
        animate={"show"}
      >
        <h1 className="text-center mb-4 font-bold text-2xl">25.2.2023</h1>
        <div className="grid grid-cols-1 gap-10   ">
          <div className="flex justify-center items-center">
            <img src="/sagna.jpg" alt="" className="w-72" />
          </div>
          <div className="flex justify-center text-left items-center mx-auto p-2 w-[350px] sm:w-[575px]">
            <p>
              Členovia futbalového klubu FC Bäni mali nedávno vzrušujúcu
              príležitosť zúčastniť sa futbalového zápasu FC Košice. Nielenže si
              hru užili, ale mali aj možnosť stretnúť sa a odfotiť sa s L.
              Sagnom, profesionálnym futbalistom z tímu FC Košice. Hráči boli
              nadšení zo stretnutia s takouto známou a rešpektovanou osobnosťou
              vo svete futbalu a fotografia, ktorú urobili, bude nepochybne
              vzácna aj v nasledujúcich rokoch. Pre členov FC Bäni to bol
              nezabudnuteľný zážitok a na tento deň sa budú nepochybne obzerať s
              peknými spomienkami.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SpravyPage;


