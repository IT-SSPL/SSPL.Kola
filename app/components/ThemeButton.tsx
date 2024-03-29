import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (systemTheme && theme === "system") {
      setTheme(systemTheme);
    }
  }, [setTheme, systemTheme, theme]);
  if (!mounted) return null;

  return (
    <div className="relative inline-flex items-center">
      <button
        aria-label="Toggle Dark Mode"
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      >
        <div
          className={`relative w-12 h-5 rounded-full border-solid border border-primary after:absolute after:h-4 after:w-4 after:content-[''] after:top-[0.075rem] after:left-[0.075rem] after:rounded-full after:bg-primary after:transition-all after:ease-in-out after:duration-300 sm:w-14 lg:h-6 lg:after:h-[1.125rem] lg:after:w-[1.125rem] lg:after:top-0.5 lg:after:left-0.5 dark:border-darkprimary dark:after:bg-darkprimary ${
            theme === "dark" &&
            " after:translate-x-7 sm:after:translate-x-9 lg:after:translate-x-8 "
          }`}
        ></div>
      </button>
    </div>
  );
};

export default ThemeButton;
