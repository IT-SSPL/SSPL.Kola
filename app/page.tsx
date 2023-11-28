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
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <Suspense fallback={<div>Loading...</div>}>
          {data.faculties.data.map(({ attributes }) => (
            <InfoCard
              key={attributes.name}
              photoUrl={attributes.logo.data.attributes.url}
              title={attributes.abbreviation}
              description={attributes.name}
            />
          ))}
        </Suspense>
      </section>
    </main>
  );
};

export default Home;
