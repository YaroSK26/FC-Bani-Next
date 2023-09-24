import Spozory from "../components/Spozory";
import Historia from "../components/Historia";
import Novinka from "../components/Novinka";
import Zostava from "../components/Zostava";
import Formular from "../components/Formular";
import Vajo from "../components/Vajo";
import Shop from "../components/Shop";
import Ludvik from "../components/Ludvik";
import Head from "next/head";

export default function Home() {
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
      <Shop></Shop>
      <Formular></Formular>
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
              zo zábavných účelov a nemá v úmysle nikoho zosmiešniť.
          </p>
        </div>
      </footer>
    </div>
  );
}
