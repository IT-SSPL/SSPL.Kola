"use client";

import { useSuspenseQuery } from "@apollo/client";
import { FETCH_CONTACT } from "../lib/fetchContact";
import { Suspense } from "react";
import { HiArrowLeft } from "react-icons/hi2";
import Header from "../components/Header";
import ContactCard from "../components/ContactCard";

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
        <ContactCard
          email={data.contact.data.attributes.email}
          address={data.contact.data.attributes.address}
        />
      </div>
    </main>
  );
};

export default Page;
