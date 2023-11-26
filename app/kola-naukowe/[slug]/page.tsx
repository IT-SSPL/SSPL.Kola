"use client";

import { FETCH_ACADEMIC_CIRCLE } from "@/app/lib/fetchAcademicCircle";
import { useSuspenseQuery } from "@apollo/client";
import { Suspense } from "react";

const Page = ({ params }: { params: { slug: string } }) => {
  const { data, error } = useSuspenseQuery(FETCH_ACADEMIC_CIRCLE, {
    variables: { slug: params.slug },
  });

  if (data.academicCircles.data.length === 0) return <p>Not found</p>; // TODO: Edit this to be more user friendly
  if (error) return <p>Error :\</p>; // TODO: Replace with error page

  return (
    // TODO: Edit this to be more user friendly
    <main className="min-h-screen">
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          {data.academicCircles.data.map(({ attributes }) => (
            <div key={attributes.name}>
              <h1>{attributes.name}</h1>
              <h2>{attributes.description}</h2>
              <h3>{attributes.faculty.data.attributes.name}</h3>
            </div>
          ))}
        </Suspense>
      </div>
    </main>
  );
};

export default Page;
