"use client";

import ContactCard from "@/app/components/ContactCard";
import ContentContainer from "@/app/components/ContentContainer";
import { rubik_mono_one } from "@/app/fonts";
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
    <main className="flex min-h-screen flex-col items-center">
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="w-full text-center p-7 md:p-11 bg-gradient-to-br from-[6e1257] via-[5020a7] to-[b05bef]">
            <h1
              className={`text-xl md:text-4xl font-bold text-white ${rubik_mono_one.className}`}
            >
              {data.academicCircles.data[0].attributes.name}
            </h1>
          </div>
          {data.academicCircles.data.map(({ attributes }) => (
            <>
              <ContentContainer key={attributes.name}>
                <h1>{attributes.name}</h1>
                <p>{attributes.description}</p>
              </ContentContainer>
              <ContactCard
                email={attributes.email}
                address={attributes.address}
              />
            </>
          ))}
        </Suspense>
      </div>
    </main>
  );
};

export default Page;
