"use client";

import { rubik_mono_one } from "../fonts";
import "../globals.css";

const Page = () => {
  return (
    <main className="container flex flex-grow flex-col mx-auto items-center justify-between p-4 md:p-8 lg:p-12xl:p-16">
      <div className="flex flex-col gap-10 w-full ">
        <div className="flex flex-col gap-2">
          <h1
            className={`text-3xl md:text-4xl lg:text-6xl text-center ${rubik_mono_one.className}`}
          >
            Kontakt
          </h1>
          <h2
            className={`text-lg md:text-xl text-center ${rubik_mono_one.className} gradient-for-text text-transparent`}
          >
            Komisja ds. Koształcenia i Kół Naukowych
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full p-5 md:px-16 md:py-7 xl:px-24 xl:py-11 bg-card dark:bg-opacity-10 bg-opacity-60 rounded-3xl shadow-md ">
          <div className="flex text-md sm:text-lg md:text-xl flex-col gap-2">
            <div className="flex flex-col md:flex-row gap-1 md:gap-2">
              <h3 className="font-bold md:text-right">E-mail:</h3>
              <a href="mailto:ksztalcenie@samorzad.p.lodz.pl">
                ksztalcenie@samorzad.p.lodz.pl
              </a>
            </div>
            <div className="flex flex-col md:flex-row gap-1 md:gap-2">
              <h3 className="font-bold md:text-right">Adres:</h3>
              <div className="flex flex-col gap-1">
                <p>HILO B14 Sala 10</p>
                <p>Kampus C</p>
                <p>ul. Wólczańska, Łódź</p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex font-semibold">
            <div className="group flex items-center gap-3">
              <p className="relative text-5xl transition-all duration-300 group-hover:-translate-x-10">
                &#129044;
              </p>
              <p className="text-xl">KONTAKT</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
