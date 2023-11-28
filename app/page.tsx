"use client";

// import Image from "next/image";
import { useSuspenseQuery } from "@apollo/client";
import { FETCH_FACULTIES } from "./lib/fetchFaculties";
import { Suspense } from "react";
import InfoCard from "./components/InfoCard";

const Home = () => {
  const { data, error } = useSuspenseQuery(FETCH_FACULTIES);

  return (
    // TODO: Edit this to be more user friendly
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-12 lg:p-16 xl:p-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
      </div>
    </main>
  );
};

export default Home;
