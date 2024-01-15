import { CiLogout, CiSearch } from "react-icons/ci";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";
import { useKeyboardShortcut } from "../hooks/useKeyboardShortcut";
import { BsShift } from "react-icons/bs";

interface SearchBarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar = ({ open, setOpen }: SearchBarProps) => {
  const [term, setTerm] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [autoSearch, setAutoSearch] = useState(true);

  const handleURLReplace = (queryValue: string) => {
    const params = new URLSearchParams(searchParams);
    if (queryValue) {
      params.set("query", queryValue);
    } else {
      params.delete("query");
    }

    replace(
      `${
        pathname === "/kola-naukowe" ? "" : "kola-naukowe"
      }?${params.toString()}`
    );
    setTerm("");
    handleCloseSearchBox();
  };

  const handleSearch = useDebouncedCallback((e) => {
    if (autoSearch) {
      handleURLReplace(e.value);
      e.blur();
    }
  }, 1000);

  const handleOpenSearchBox = () => {
    setOpen(true);

    setTimeout(() => {
      document.getElementById("search-bar")?.focus();
    }, 500);
  };

  const handleCloseSearchBox = () => {
    setOpen(false);
    document.getElementById("search-bar")?.blur();
  };

  const handleUseSearchBox = () => {
    if (open && term) {
      setAutoSearch(false);
      handleURLReplace(term);
    }
  };

  useKeyboardShortcut(["shift", "s"], handleOpenSearchBox);
  useKeyboardShortcut(["esc"], handleCloseSearchBox);
  useKeyboardShortcut(["enter"], handleUseSearchBox);

  return (
    <div
      // onMouseEnter={() => setOpen(true)}
      // onMouseLeave={() => setOpen(false)}
      className={`w-full inline-flex justify-end items-center z-20 relative`}
    >
      <div
        className={`search-bg top-0 left-0 fixed w-screen min-h-screen flex justify-center
      items-center bg-[#F7F5FAF8] dark:bg-[#252525F8] transition-all duration-500 ease-in-out ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
      >
        <input
          id="search-bar"
          type="text"
          className={`w-3/4 pb-1 bg-transparent outline-none border-b-[1px] border-primary dark:border-darkprimary text-2xl md:w-1/2
        `}
          placeholder="Szukaj..."
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
            handleSearch(e.target);
            setAutoSearch(true);
          }}
        />
      </div>
      <button
        className={`text-[2rem] z-30 relative ${open && "fixed"}`}
        onClick={() => handleOpenSearchBox()}
      >
        {open ? (
          <CiLogout />
        ) : (
          <>
            <CiSearch />
            <div
              role="tooltip"
              aria-describedby="search-bar"
              className="text-[0.6rem] flex items-center text-gray-500 dark:text-gray-400 absolute bottom-[-0.7rem] left-1/2 transform -translate-x-1/2"
            >
              <BsShift /> S
            </div>
          </>
        )}
      </button>
    </div>
  );
};

export default SearchBar;
