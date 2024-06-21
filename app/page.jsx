"use client"

import Spozory from "../components/Spozory";
import Historia from "../components/Historia";
import Novinka from "../components/Novinka";
import Zostava from "../components/Zostava";
import Formular from "../components/Formular";
import Vajo from "../components/Vajo";
import Shop from "../components/Shop";
import Head from "next/head";
import BallCanvas from "../components/BallCanvas";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Community from "../components/Community";
import Trening from "../components/Trening"


export default function Home() {
    const [ref, inView] = useInView();
    const [hasAnimated, setHasAnimated] = useState(false);
      if (inView && !hasAnimated) {
        setHasAnimated(true);
      }
  return (
    <div>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4658673932856794"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Vajo></Vajo>
      <Novinka></Novinka>
      <Spozory></Spozory>
      <Historia></Historia>
      <Zostava></Zostava>
      <Trening></Trening>
      <Community></Community>
      <Shop></Shop>
      <Formular></Formular>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        animate={hasAnimated ? "show" : "hidden"}
        ref={ref}
        className=" mb-10"
      >
        <BallCanvas />
      </motion.div>
      {/* <Ludvik></Ludvik> */}

      <footer>
        <div className="bgNav text-gray-200 flex flex-col  justify-center  text-center">
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
              zo zábavných účelov a nemá v úmysle nikoho zosmiešniť
          </p>
        </div>
      </footer>
    </div>
  );
}
