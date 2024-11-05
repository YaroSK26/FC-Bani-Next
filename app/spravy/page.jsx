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
        <h1 className="text-center mb-4 font-bold text-2xl">18.6.2024</h1>
        <div className="grid grid-cols-1 gap-10">
          <div className="flex justify-center items-center">
            <img
              src="/pohyb.png"
              alt=""
              className="w-72 h-52 border-black border-2"
            />
          </div>
          <div className="flex justify-center text-left items-center mx-auto p-2 w-[350px] sm:w-[575px]">
            <p>
              18.6.2024, FC Bäni vyhralo ďalší zápas s bilanciou 15:9,
              tentokrát proti silnému súperovi: Podpor Pohyb Košice. Ide o
              najlepší (zároveň aj jediný) futsalový klub v Košiciach. Hráči FC
              Bäni dokázali zdolať súpera hlavne vďaka technickej prevahe a
              dokonalému čítaniu hry. V zápase nastúpili aj hráči Matúš Kollár a
              Janko Šunka, obaja sa vrátili do FC Bäni na hosťovanie a zotrvajú
              v tomto klube až do začiatku sezóny. Góly: Jakub Šimko: celkom
              dosť Janko Šunka: veľa Matúš Kollár: ešte viac Taktiež musíme
              pochváliť heroický výkon brankára Petra Hermana, ktorý podržal
              mužstvo v najťažších chvíľach.
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
        <h1 className="text-center mb-4 font-bold text-2xl">29.3.2024</h1>
        <div className="grid grid-cols-1 gap-10">
          <div className="flex justify-center items-center">
            <img
              src="/rudnany.png"
              alt=""
              className="w-72 h-72 border-black border-2"
            />
          </div>
          <div className="flex justify-center text-left items-center mx-auto p-2 w-[350px] sm:w-[575px]">
            <p>
              Prestup Janka Šunky: „Dnes som absolvoval prvý OŠK Rudňany tréning
              a chcem povedať, že ako kapitán FC Bäni odchádzam z tohto tímu a
              prestupujem do tímu OŠK Rudňany. Hodnota prestupu je 2€. Chcem
              poďakovať všetkým členom FC Bäni a želám len to najlepšie a vždy
              bude v mojom srdci FC Bäni.Novým kapitánom FC Bäni sa stáva Peter
              Herman, gratulujem. Neodchádzam navždy, niekedy sa určite vrátim.
              Navždy verny, zeleno čierny. Jedine Vaaaaajoooooooooooooo,
              vajoooooooooo 🖤💚“
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
        <h1 className="text-center mb-4 font-bold text-2xl">26.1.2024</h1>
        <div className="grid grid-cols-1 gap-10">
          <div className="flex justify-center items-center">
            <img
              src="/PRESTUP.png"
              alt=""
              className="w-72 border-black border-2"
            />
          </div>
          <div className="flex justify-center text-left items-center mx-auto p-2 w-[350px] sm:w-[575px]">
            <p>
              Prestup Kotuša Mallára: „Vzhľadom na to že zajtra sa zúčastním
              môjho prvého tréningu s klubom MFK Ťahanovce a tým potvrdím môj
              prestup z FC Bäni do spomínaného klubu, by som sa chcel poďakovať
              všetkým členom FC Bäni (ďalej už len ako FCB) za príležitosť byť
              súčasťou tohto úžasného projektu. Počas môjho pôsobenia v FCB sme
              spoločne dosiahli mnohé úspechy ako napríklad víťaztvo futbalovej
              ligy na ZŠ Družicovej v sezone 2021/2022, zložili sme sa Peťovi na
              rukavice, FCB sa takmer zapojilo do miniligy, podnikli sme
              nespočet výjazdov za cieľom spoznať a povzbudiť iných futbalistov.
              Stretli sme sa s generačným talentom Landingom Sagnom. Podpísali
              sme dvoch špičkových hráčov (Lil D a ja nesom autista). FCB bude
              navždy v mojom srdci a sľubujem že sa jedného dňa vrátim, taktiež
              budem aj naďalej trenovať s hráčmi tímu FCB a zúčastňovať sa iných
              klubových aktivít. Aj keď opúšťam FCB ako hráč naďalej budem jeho
              súčasťou ako člen realizačného týmu a spoluzakladateľ. Ešte raz
              Vám všetkým ďakujem a už teraz sa teším na môj návrat domov.
              NAVŽDY VERNÝ ZELENO ČIERNÝ 🖤💚“
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
        <h1 className="text-center mb-4 font-bold text-2xl">14.12.2023</h1>
        <div className="grid grid-cols-1 gap-10   ">
          <div className="flex justify-center items-center">
            <img
              src="/eric.png"
              alt=""
              className="w-72 border-black border-2"
            />
          </div>
          <div className="flex justify-center text-left items-center mx-auto p-2 w-[350px] sm:w-[575px]">
            <p>
              Eric Sports, známa osobnosť Instagramu, prekvapil svojich
              sledovateľov kontroverzným krokom – ukradol logo slávneho a
              úspešného futbalového klubu FC Bäni. Tento nečakaný a
              neospravedlniteľný čin vyvolal vlnu rozhorčenia medzi fanúšikmi a
              priaznivcami klubu. Napriek tejto nespravodlivosti, komunita FC
              Bäni reaguje silným heslom: &quot;Nikdy sa nevzdáme!&quot; Tento
              výrok odráža nezlomný duch a odhodlanie klubu čeliť výzvam a
              prekážkam, ktoré im život prináša. Klub a jeho fanúšikovia sú
              odhodlaní zachovať svoju hrdosť a identitu, bez ohľadu na
              protivenstvá.&nbsp;
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

      <h2 className="text-center font-bold text-2xl underline my-4">
        <a href="/spravy">Späť na začiatok stránky</a>
      </h2>

      <footer>
        <div className="bgNav text-gray-200 flex flex-col mt-6  justify-center  text-center">
          <a
            className="footer w-16 mx-auto text-center text-2xl"
            href="/cert.jpg"
            target="_blank"
          >
            Čert
          </a>
          <p>
            Túto stránku vytvoril  
            <a
              className="cursor-pointer underline "
              href="https://jaroslav-portfolio.vercel.app/"
              target="_blank"
            >
              Jaroslav Barabáš
            </a>
              zo zábavných účelov a nemá v úmysle nikoho zosmiešniť.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SpravyPage;


