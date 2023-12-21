"use client";

// import Image from "next/image";
import { useSuspenseQuery } from "@apollo/client";
import { FETCH_FACULTIES } from "./lib/fetchFaculties";
import { Suspense } from "react";
import InfoCard from "./components/InfoCard";
import Header from "./components/Header";

const Home = () => {
  const { data, error } = useSuspenseQuery(FETCH_FACULTIES);

  return (
    // TODO: Edit this to be more user friendly
    <main className="container mx-auto flex min-h-screen flex-col items-center">
      <Header
        title={"KOŁA \nNAUKOWE"}
        subtitle={"POLITECHNIKI ŁÓDZKIEJ"}
        style={"mt-2 mb-8"}
      />
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <Suspense fallback={<div>Loading...</div>}>
          {data.faculties.data.map(({ attributes }) => (
            <InfoCard
              key={attributes.name}
              photoUrl={attributes.logo.data}
              title={attributes.abbreviation}
              description={attributes.name}
              pathUrl={`/kola-naukowe?query=${attributes.abbreviation.toLowerCase()}`}
            />
          ))}
        </Suspense>
      </section>
    </main>
  );
};

export default Home;
