"use client";

import { useState } from "react";
import Link from "next/link";
import { poller_one } from "../fonts";
import ThemeButton from "./ThemeButton";
import BurgerMenu from "./BurgerMenu";
import SearchBar from "./SearchBar";

const menuItems = [
  { name: "Jednostki", path: "/" },
  { name: "Wszystkie koła", path: "/kola-naukowe" },
  { name: "FAQ", path: "/faq" },
  { name: "Kontakt", path: "/kontakt" },
];

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <nav className="relative pt-8 pb-4 grid grid-cols-4 border-b-[1px] border-primary dark:border-darkprimary 2xl:pt-10 2xl:pb-6">
      <Link href="/" className="col-span-2 lg:col-span-1">
        <h1
          className={`${poller_one.className} text-base lg:text-xl 2xl:text-2xl`}
        >
          KOŁA <br />
          NAUKOWE <span className="gradient-for-text text-transparent">PŁ</span>
        </h1>
      </Link>
      <ul
        className={`justify-self-center text-center col-span-2 ${
          openMenu
            ? "absolute w-full top-28 p-5 flex flex-col bg-darkprimary dark:bg-primary rounded-2xl"
            : "hidden lg:flex"
        } lg:w-auto`}
      >
        {menuItems.map(({ name, path }) => (
          <li
            className="grid place-items-center text-[#797979] text-lg hover:text-primary dark:hover:text-darkprimary lg:text-base 2xl:text-xl"
            key={name}
          >
            <Link href={path} onClick={() => setOpenMenu(false)}>
              <p className="px-2 py-2 mx-2 lg:px-2">{name}</p>
            </Link>
          </li>
        ))}
      </ul>
      <span className="w-full flex gap-3 col-span-2 justify-self-end justify-end lg:col-span-1">
        <SearchBar open={openSearch} setOpen={setOpenSearch} />
        <ThemeButton />
        <BurgerMenu
          open={openMenu}
          setOpen={setOpenMenu}
          style="inline-flex lg:hidden"
        />
      </span>
    </nav>
  );
};

export default NavBar;
