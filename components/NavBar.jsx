"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import SheetMenu from "./SheetMenu";

const NavBar = () => {

    const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    // Function to update window width
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener when component mounts
    window.addEventListener("resize", updateWindowWidth);

    // Initialize window width
    updateWindowWidth();

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);
  return (
    <nav className="text-gray-200 w-full h-20 bgNav text-lg ">
      <div className="flex justify-center gap-5 items-center h-20 pl-5 pr-5">
        <Link className="w-full cursor" href={"/"}>
          <img src="/fcbani.png" alt="" className="w-24 hover:scale-110 transition-all" />
        </Link>

        {window.innerWidth && windowWidth > 400 && (
          <nav className="flex gap-3 justify-end w-full">
            <ul className="flex gap-3 justify-end w-full">
              <li>
                <Link className="cursor  text-2xl" href={"/"}>
                  História
                </Link>
              </li>
              <li>
                <Link className="cursor text-2xl" href={"/"}>
                  Zostava
                </Link>
              </li>
              <li>
                <Link className="cursor  text-2xl" href={"/"}>
                  Shop
                </Link>
              </li>
            </ul>
          </nav>
        )}

        {windowWidth && windowWidth <= 400 && <SheetMenu />}
      </div>
    </nav>
  );
};

export default NavBar;
