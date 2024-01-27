"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const SheetMenu = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { isSignedIn } = useAuth();

  const openSheet = () => {
    setIsSheetOpen(true);
  };

  const closeSheet = () => {
    setIsSheetOpen(false);
  };

  const [menuButtonActive, setMenuButtonActive] = useState(false);

  return (
    <div className="w-full">
      <Sheet open={isSheetOpen}>
        <SheetTrigger>
          <Menu
            onClick={() => {
              openSheet();
              setMenuButtonActive(true);
            }}
            className={`text-white md:hidden  ${
              menuButtonActive ? "active" : ""
            }`}
          />
        </SheetTrigger>
        <SheetContent className="bgNav text-white w-full " side="right">
          <div className="flex justify-end ">
            <div
              onClick={closeSheet}
              className="w-7 h-7  z-10  bg-gray-200 font-bold  text-gray-900 flex justify-center items-center rounded-3xl"
            >
              X
            </div>
          </div>
          <nav className="flex gap-3 justify-end w-full mr-2">
            <ul className="flex flex-col gap-5 justify-end w-full">
              <li>
                <Link href={"/#historia"} onClick={closeSheet}>
                  História
                </Link>
              </li>
              <li>
                <Link href={"/#zostava"} onClick={closeSheet}>
                  Zostava
                </Link>
              </li>
              <li>
                <Link href={"/#treningy"} onClick={closeSheet}>
                  Tréningy
                </Link>
              </li>
              <li>
                <Link href={"/#komunita"} onClick={closeSheet}>
                  Komunita
                </Link>
              </li>
              <li>
                <Link href={"/#shop"} onClick={closeSheet}>
                  Shop
                </Link>
              </li>
              <span>
                {isSignedIn && (
                  <span>
                    <UserButton />
                  </span>
                )}
              </span>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SheetMenu;
