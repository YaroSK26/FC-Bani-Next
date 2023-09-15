
const Novinka = () => {
  return (
    <div className=" my-10">
      <h1 class="text-center mb-4 font-bold text-2xl">Najnovšia správa</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10   ">
        <div className="flex justify-center md:justify-end items-center">
          <img src="/fcbani.png" alt="" className="w-52" />
        </div>
        <div className="flex justify-center items-start mx-auto md:mx-0 pl-10  w-[300px]">
          Stránka FC Bäni práve prešla aktualizáciou! Rovnaký dizajn no
          vylepšené funkcie čakajú na fanúšikov futbalového klubu. Sledujte
          aktuálne správy, štatistiky tímu a viac na našej modernizovanej
          webovej stránke. Buďte stále v obraze s novinkami ohľadom FC Bäni!
        </div>
      </div>
    </div>
  );
}

export default Novinka
