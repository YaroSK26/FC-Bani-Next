import Link from "next/link";
import Hraci from "./Hraci"

const Zostava = () => {
  return (
    <div className="p-2">
      <p className="md:text-4xl text-3xl text-center pt-5 pb-3 underline ">
        {" "}
        Zostava{" "}
      </p>

      <p>
        <strong className="Martincoko pb-4">
          „Preco su na ovidvoch stranach ihriska“{" "}
        </strong>
      </p>
      <Link className=" flex justify-center items-center" href="/zostava.jpg">
        <img
          className="w-[20rem]"
          src="/zostava.jpg"
          alt="obrázok zostavy FC Bäni"
        />
      </Link>


      <Hraci></Hraci>
    </div>
  );
}

export default Zostava
