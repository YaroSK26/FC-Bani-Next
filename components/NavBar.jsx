"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import SheetMenu from "./SheetMenu";
import { UserButton, useAuth } from "@clerk/nextjs";

const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState(null);
  const { isSignedIn } = useAuth();

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

  // Check if windowWidth is greater than 400 on the client side
  const isWideEnough = typeof window !== "undefined" && windowWidth > 768;

  return (
    <nav className="text-gray-200 w-full h-20 bgNav text-lg fixed top-0 z-20 cursor-default ">
      <div className="flex justify-between  w-full items-center h-20 pl-5 pr-5 relative  cursor-default">
        <Link className="md:w-full" href={"/"}>
          <img
            src="/fcbani.png"
            alt="logo klubu FC Bäni"
            className="w-24 hover:scale-110 transition-all imgFCBani cursor"
          />
          <img
            src="/pt.jpg"
            className="w-20 h-20 pt absolute  xl:left-[49%]  bottom-[0px] cursor-default "
            alt=" Pán tajomný"
          />
        </Link>

        {isWideEnough && (
          <nav className="flex gap-8 justify-end w-full">
            <ul className="flex gap-3 justify-end w-full">
              <li>
                <Link className="cursor  text-2xl" href={"/#historia"}>
                  História
                </Link>
              </li>
              <li>
                <Link className="cursor text-2xl" href={"/#zostava"}>
                  Zostava
                </Link>
              </li>
              <li>
                <Link className="cursor  text-2xl" href={"/#treningy"}>
                  Tréningy
                </Link>
              </li>
              <li>
                <Link className="cursor text-2xl" href={"/#komunita"}>
                  Komunita
                </Link>
              </li>
              <li>
                <Link className="cursor  text-2xl" href={"/#shop"}>
                  Shop
                </Link>
              </li>
              <span>
                {isSignedIn && (
                  <span>
                    <UserButton afterSignOutUrl="/" />
                  </span>
                )}
              </span>
            </ul>
          </nav>
        )}

        {!isWideEnough && (
          <div className=" ">
            <SheetMenu />
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;