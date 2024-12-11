"use client"

import { UserButton, useAuth } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const SheetMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // This function will be called when a menu item is clicked
  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="text-white p-4 z-50">
        {isMenuOpen ? (
          <div className="z-50">
            <X className="z-50" />
          </div>
        ) : (
          <Menu />
        )}
      </button>
      {isMenuOpen && (
        <div className="fixed inset-0 w-full h-full bg-black bg-opacity-75 z-40">
          <nav className="bgNav text-white w-full h-full">
            <ul className="flex flex-col items-start gap-6 pt-5 ml-5 justify-start h-full">
              <button onClick={toggleMenu} className="text-white p-1 z-50">
                <div className="z-50 ">
                  <X />
                </div>
              </button>
              <li onClick={handleMenuItemClick}>
                <Link href={"/#historia"}>História</Link>
              </li>
              <li onClick={handleMenuItemClick}>
                <Link href={"/#zostava"}>Zostava</Link>
              </li>
              <li onClick={handleMenuItemClick}>
                <Link href={"/#treningy"}>Tréningy</Link>
              </li>
              <li onClick={handleMenuItemClick}>
                <Link href={"/#komunita"}>Komunita</Link>
              </li>
              <li onClick={handleMenuItemClick}>
                <Link href={"/#shop"}>Shop</Link>
              </li>
              {isSignedIn && <UserButton afterSignOutUrl="/" />}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default SheetMenu;
