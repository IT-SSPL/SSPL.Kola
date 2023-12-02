import { rubik_mono_one } from "../fonts";

interface HeaderProps {
  small?: boolean;
  title: string | null;
  subtitle: string | null;
  style?: string;
}

const Header = ({ small, title, subtitle, style }: HeaderProps) => (
  <header
    className={`text-center pt-16 pb-10 ${rubik_mono_one.className} ${style}`}
  >
    <h1
      className={`whitespace-pre-line mb-1 ${
        small ? "text-5xl lg:text-6xl" : "text-6xl md:text-7xl lg:text-8xl"
      }`}
    >
      {title}
    </h1>
    <h3
      className={`gradient-for-text text-transparent ${
        small ? "text-lg md:text-xl" : "text-2xl md:text-3xl lg:text-4xl"
      }`}
    >
      {subtitle}
    </h3>
  </header>
);

export default Header;
