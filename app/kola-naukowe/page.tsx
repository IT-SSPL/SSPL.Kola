"use client";

import { useSuspenseQuery } from "@apollo/client";
import { FETCH_ACADEMIC_CIRCLES } from "../lib/fetchAcademicCircles";
import { Suspense } from "react";

const Page = () => {
  const { data, error } = useSuspenseQuery(FETCH_ACADEMIC_CIRCLES);

  if (error) return <p>Error :\</p>; // TODO: Replace with error page

  return (
    // TODO: Edit this to be more user friendly
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          {data.academicCircles.data.map(({ attributes }) => (
            <div key={attributes.name}>
              <h1>{attributes.name}</h1>
            </div>
          ))}
        </Suspense>
      </div>
    </main>
  );
};

export default Page;
