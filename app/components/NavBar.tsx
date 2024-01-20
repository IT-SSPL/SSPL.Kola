"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
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
  const { theme } = useTheme();
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [isEnlargedFontSize, setIsEnlargedFontSize] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    setShowLogo(true);
  }, [showLogo]);

  if (typeof document !== "undefined") {
    isEnlargedFontSize
      ? document.documentElement.classList.add("text-xl")
      : document.documentElement.classList.remove("text-xl");
  }

  const logo_url =
    theme === "dark" ? "/logo_pl_light.png" : "/logo_pl_dark.png";

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      className="relative pt-8 pb-4 grid grid-cols-4 border-b-[1px] border-primary dark:border-darkprimary 2xl:pt-10 2xl:pb-6"
    >
      <Link href="/" className="col-span-2 lg:col-span-1 flex">
        {showLogo && (
          <Image
            src={logo_url}
            alt="Logo of the Lodz University of Technology"
            width={0}
            height={0}
            sizes="5rem"
            className="w-7 lg:w-9 mr-2"
          />
        )}
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
            ? "absolute w-full top-28 p-5 flex flex-col bg-darkprimary dark:bg-primary rounded-2xl z-10"
            : "hidden lg:flex"
        } lg:w-auto`}
      >
        {menuItems.map(({ name, path }, i) => (
          <li
            className="grid place-items-center text-[#797979] text-lg hover:text-primary dark:hover:text-darkprimary lg:text-base 2xl:text-xl"
            key={name}
          >
            <Link
              href={path}
              onClick={() => setOpenMenu(false)}
              className="active:text-active"
            >
              <p className="px-2 py-2 mx-2 lg:px-2">{name}</p>
            </Link>
          </li>
        ))}
      </ul>
      <span className="w-full flex gap-3 col-span-2 justify-self-end justify-end lg:col-span-1">
        <SearchBar open={openSearch} setOpen={setOpenSearch} />
        <div className="inline-flex items-center">
          <div className="flex items-baseline gap-1 h-6">
            <button
              aria-label="(A) Normal font size"
              className={`h-6 transition-colors duration-300 hover:text-highlight ${
                !isEnlargedFontSize && "text-active font-bold"
              }`}
              onClick={() => setIsEnlargedFontSize(false)}
            >
              A
            </button>
            <button
              aria-label="(A) Enlarged font size"
              className={`h-6 text-xl transition-colors duration-300 hover:text-highlight ${
                isEnlargedFontSize && "text-active font-bold"
              }`}
              onClick={() => setIsEnlargedFontSize(true)}
            >
              A
            </button>
          </div>
        </div>
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
