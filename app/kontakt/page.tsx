"use client";

import { rubik_mono_one } from "../fonts";

const Page = () => {
  return (
    <main className="container flex flex-grow flex-col mx-auto items-center justify-between p-8 md:p-12 lg:p-16 xl:p-20">
      <div className="flex flex-col gap-10 w-full ">
        <div className="flex flex-col gap-2">
          <h1
            className={`text-3xl md:text-4xl lg:text-6xl text-center ${rubik_mono_one.className}`}
          >
            Kontakt
          </h1>
          <h2
            className={`text-lg md:text-xl text-center ${rubik_mono_one.className} bg-gradient-to-tr from-violet-900 via-fuchsia-800 to-purple-600 bg-clip-text text-transparent`}
          >
            Komisja ds. Koształcenia i Kół Naukowych
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full px-4 py-4 md:px-16 md:py-7 xl:px-24 xl:py-11 bg-white bg-opacity-60 rounded-3xl shadow-md ">
          <div className="flex text-sm sm:text-md md:text-lg lg:text-xl flex-col gap-2">
            <div className="flex gap-2">
              <h3 className="font-bold text-right">E-mail:</h3>
              <a href="mailto:ksztalcenie@samorzad.p.lodz.pl">
                ksztalcenie@samorzad.p.lodz.pl
              </a>
            </div>
            <div className="flex gap-2">
              <h3 className="font-bold text-right">Adres:</h3>
              <div className="flex flex-col gap-1">
                <p>HILO B14 Sala 10</p>
                <p>Kampus C</p>
                <p>ul. Wólczańska, Łódź</p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex font-semibold">
            <div className="group flex items-center gap-3">
              <p className="relative text-5xl transition-all group-hover:-translate-x-10">
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
