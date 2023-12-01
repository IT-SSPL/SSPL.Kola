"use client";

import { useSuspenseQuery } from "@apollo/client";
import { FETCH_CONTACT } from "../lib/fetchContact";
import { Suspense } from "react";
import { HiArrowLeft } from "react-icons/hi2";
import Header from "../components/Header";
import ContentContainer from "../components/ContentContainer";

const Page = () => {
  const { data, error } = useSuspenseQuery(FETCH_CONTACT);

  return (
    <main className="container flex flex-grow flex-col mx-auto items-center justify-between py-4 md:py-8 lg:py-12 xl:py-16">
      <div className="flex flex-col gap-10 w-full ">
        <div className="flex flex-col gap-2">
          <Header
            title={"Kontakt"}
            subtitle={"Komisja ds. Koształcenia i Kół Naukowych"}
            small
          />
        </div>
        <ContentContainer style={"flex-col md:flex-row justify-between group"}>
          <div className="flex text-lg lg:text-xl flex-col gap-2">
            <Suspense fallback={<div>Loading...</div>}>
              <div className="flex flex-col md:flex-row gap-1 md:gap-2">
                <h3 className="font-extrabold md:text-right">E-mail:</h3>
                <a href="mailto:ksztalcenie@samorzad.p.lodz.pl">
                  {data.contact.data.attributes.email}
                </a>
              </div>
              <div className="flex flex-col md:flex-row gap-1 md:gap-2">
                <h3 className="font-extrabold md:text-right">Adres:</h3>
                <div className="flex flex-col gap-1">
                  <p>
                    {data.contact.data.attributes.address.building}{" "}
                    {data.contact.data.attributes.address.room && (
                      <span>/{data.contact.data.attributes.address.room}</span>
                    )}
                  </p>
                  <p>Kampus {data.contact.data.attributes.address.campus}</p>
                  <p>{data.contact.data.attributes.address.street}</p>
                </div>
              </div>
            </Suspense>
          </div>
          <div className="hidden md:flex font-semibold">
            <div className="group flex items-center gap-5">
              <p className="relative text-3xl transition-all duration-300 group-hover:-translate-x-10">
                <HiArrowLeft />
              </p>
              <p className="text-xl">KONTAKT</p>
            </div>
          </div>
        </ContentContainer>
      </div>
    </main>
  );
};

export default Page;
