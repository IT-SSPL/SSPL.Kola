interface BurgerMenuProps {
  style?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenu = ({ open, setOpen, style }: BurgerMenuProps) => {
  return (
    <div className={`z-10 items-center ${style}`}>
      <button
        className="w-8 h-8 flex flex-col justify-center items-center"
        onClick={() => setOpen(open ? false : true)}
      >
        <span
          className={`block absolute h-[1px] w-7 bg-primary transform transition duration-500 ease-in-out dark:bg-darkprimary ${
            open ? "rotate-45" : "translate-y-2"
          }`}
        ></span>
        <span
          className={`block absolute h-[1px] w-7 bg-primary transform transition duration-300 ease-in-out dark:bg-darkprimary ${
            open ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block absolute h-[1px] w-7 bg-primary transform transition duration-500 ease-in-out dark:bg-darkprimary ${
            open ? "-rotate-45" : "-translate-y-2"
          }`}
        ></span>
      </button>
    </div>
  );
};

export default BurgerMenu;
