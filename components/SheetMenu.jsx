"use client";

import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const SheetMenu = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu className="text-white md:hidden" />
        </SheetTrigger>
        <SheetContent className="bgNav text-white w-full " side="right">
          <nav className="flex gap-3 justify-end w-full mr-2">
            <ul className="flex flex-col gap-5 justify-end w-full">
              <li>
                <Link href={"/"}>História</Link>
              </li>
              <li>
                <Link href={"/"}>Zostava</Link>
              </li>
              <li>
                <Link href={"/"}>Shop</Link>
              </li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SheetMenu;
