"use client";

// import Image from "next/image";
import { useSuspenseQuery } from "@apollo/client";
import { FETCH_FACULTIES } from "./lib/fetchFaculties";
import { Suspense } from "react";

const Home = () => {
  const { data, error } = useSuspenseQuery(FETCH_FACULTIES);

  return (
    // TODO: Edit this to be more user friendly
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          {data.faculties.data.map(({ attributes }) => (
            <div key={attributes.name}>
              <h1>{attributes.name}</h1>
              <h2>{attributes.abbreviation}</h2>
            </div>
          ))}
        </Suspense>
      </div>
    </main>
  );
};

export default Home;
