import { rubik_mono_one } from "../fonts";

const Header = () => (
  <header className="text-center pt-16 pb-10">
    <h1
      className={`${rubik_mono_one.className} text-6xl md:text-7xl lg:text-8xl`}
    >
      KOŁA <br />
      NAUKOWE
      <div className="gradient-for-text text-transparent text-2xl md:text-3xl lg:text-4xl">
        POLITECHNIKI ŁÓDZKIEJ
      </div>
    </h1>
  </header>
);

export default Header;
