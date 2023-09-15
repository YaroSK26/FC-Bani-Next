import Spozory from "../components/Spozory";
import Historia from "../components/Historia";
import Novinka from "../components/Novinka";
import Zostava from "../components/Zostava";
import Formular from "../components/Formular";
import Vajo from "../components/Vajo";
import Shop from "../components/Shop";

export default function Home() {
  return (
    <div>
      <Vajo></Vajo>
      <Novinka></Novinka>
      <Spozory></Spozory>
      <Historia></Historia>
      <Zostava></Zostava>
      <Shop></Shop>
      <Formular></Formular>

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
            Túto stránka vytvoril &nbsp;
            <a
              className="cursor-pointer underline "
              href="https://jaroslav-portfolio.vercel.app/"
              target="_blank"
            >
              Jaroslav Barabáš
            </a>
            &nbsp; zo zábavných účelov a nemá v úmysle nikoho zosmiešniť.
          </p>
        </div>
      </footer>
    </div>
  );
}
