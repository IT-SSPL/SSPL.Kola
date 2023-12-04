import { CiLogout, CiSearch } from "react-icons/ci";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";

interface SearchBarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar = ({ open, setOpen }: SearchBarProps) => {
  const [term, setTerm] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    setOpen(false);
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(
      `${
        pathname === "/kola-naukowe" ? "" : "kola-naukowe"
      }?${params.toString()}`
    );
    setTerm("");
  }, 800);

  return (
    <div
      // onMouseEnter={() => setOpen(true)}
      // onMouseLeave={() => setOpen(false)}
      className={`w-full inline-flex justify-end items-center z-20`}
    >
      <div
        className={`search-bg top-0 left-0 fixed w-screen min-h-screen flex justify-center
      items-center bg-[#F7F5FAF8] dark:bg-[#252525F8] transition-all duration-500 ease-in-out ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
      >
        <input
          type="text"
          className={`w-3/4 pb-1 bg-transparent outline-none border-b-[1px] border-primary dark:border-darkprimary text-2xl md:w-1/2
        `}
          placeholder="Szukaj..."
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
            handleSearch(e.target.value);
          }}
        />
      </div>

      <button
        className={`text-[2rem] z-30 ${open && "fixed"}`}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? <CiLogout /> : <CiSearch />}
      </button>
    </div>
  );
};

export default SearchBar;
