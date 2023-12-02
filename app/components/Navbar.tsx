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
    <nav className="relative pt-8 pb-4 grid grid-cols-4 border-b-[1px] border-primary dark:border-darkprimary 2xl:pt-10 2xl:pb-6">
      <Link href="/" className="col-span-2 lg:col-span-1">
        <h1
          className={`${rubik_mono_one.className} text-base lg:text-xl 2xl:text-2xl`}
        >
          KOŁA <br />
          NAUKOWE <span className="gradient-for-text text-transparent">PŁ</span>
        </h1>
      </Link>
      <ul
        className={`justify-self-center text-center col-span-2 ${
          open
            ? "absolute w-full top-28 p-10 flex flex-col bg-darkprimary dark:bg-primary"
            : "hidden lg:flex"
        } lg:w-auto`}
      >
        {menuItems.map(({ name, path }) => (
          <li
            className="grid place-items-center text-[#797979] text-lg hover:text-primary dark:hover:text-darkprimary lg:text-base 2xl:text-xl"
            key={name}
          >
            <Link href={path}>
              <p className="px-2 py-2 mx-2 lg:px-2">{name}</p>
            </Link>
          </li>
        ))}
      </ul>
      <span className="flex gap-3 col-span-2 justify-self-end lg:col-span-1">
        <ThemeButton />
        <BurgerMenu
          open={open}
          setOpen={setOpen}
          style="inline-flex lg:hidden"
        />
      </span>
    </nav>
  );
};

export default Navbar;
