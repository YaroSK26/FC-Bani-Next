"use client";

import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const SheetMenu = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const openSheet = () => {
    setIsSheetOpen(true);
  };

  const closeSheet = () => {
    setIsSheetOpen(false);
  };

  const [menuButtonActive, setMenuButtonActive] = useState(false);

  return (
    <div>
      <Sheet open={isSheetOpen}>
        <SheetTrigger>
          <Menu
            onClick={() => {
              openSheet();
              setMenuButtonActive(true);
            }}
            className={`text-white md:hidden ${
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
                <Link href={"/#shop"} onClick={closeSheet}>
                  Shop
                </Link>
              </li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SheetMenu;
