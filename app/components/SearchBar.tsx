import { CiSearch } from "react-icons/ci";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

interface SearchBarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBar = ({ open, setOpen }: SearchBarProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
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
  }, 500);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={`w-full relative inline-flex justify-end items-center z-10`}
    >
      <input
        type="text"
        className={`bg-transparent outline-none border-b-[1px] border-primary dark:border-darkprimary transition-all duration-500 ease-in-out mr-2
        ${open ? "w-40 md:w-60 lg:w-28 xl:md:w-60" : "w-0"}`}
        placeholder="Szukaj..."
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        onClick={() => setOpen(true)}
      />
      <button className="text-[2rem]">
        <CiSearch />
      </button>
    </div>
  );
};

export default SearchBar;
