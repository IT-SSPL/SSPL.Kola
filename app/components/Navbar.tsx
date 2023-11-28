"use client";

import Link from "next/link";
import { rubik_mono_one } from "../fonts";
import ThemeButton from "./ThemeButton";
import { BurgerMenu } from "./BurgerMenu";
import { useState } from "react";

const menuItems = [
  { name: "Jednostki", path: "/" },
  { name: "Wszystkie koła", path: "/kola-naukowe" },
  { name: "FAQ", path: "/faq" },
  { name: "Kontakt", path: "/kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative pt-8 pb-4 flex justify-between border-b-[1px] border-primary dark:border-darkprimary">
      <Link href="/">
        <h1 className={`${rubik_mono_one.className} text-base lg:text-xl`}>
          KOŁA <br />
          NAUKOWE <span className="gradient-for-text text-transparent">PŁ</span>
        </h1>
      </Link>
      <ul
        className={`${
          open
            ? "absolute w-full top-28 p-10 flex flex-col bg-darkprimary dark:bg-primary"
            : "hidden md:flex"
        } md:w-auto`}
      >
        {menuItems.map(({ name, path }) => (
          <li
            className="grid place-items-center text-[#797979] text-lg hover:text-primary dark:hover:text-darkprimary lg:text-base"
            key={name}
          >
            <Link href={path}>
              <p className="px-2 py-2 mx-2 lg:px-6">{name}</p>
            </Link>
          </li>
        ))}
      </ul>
      <span className="flex gap-3">
        <ThemeButton />
        <BurgerMenu
          open={open}
          setOpen={setOpen}
          style="inline-flex md:hidden"
        />
      </span>
    </nav>
  );
};

export default Navbar;
