import Spozory from "../components/Spozory";
import Historia from "../components/Historia";
import Novinka from "../components/Novinka";
import Zostava from "../components/Zostava";
import Formular from "../components/Formular";

export default function Home() {
  return (
    <div>
      <Novinka></Novinka>
      <Spozory></Spozory>
      <Historia></Historia>
      <Zostava></Zostava>
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
              className="underline"
              href="https://jaroslav-portfolio.vercel.app/" target="_blank"
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
