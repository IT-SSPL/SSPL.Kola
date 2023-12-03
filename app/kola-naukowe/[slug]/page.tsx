"use client";

import ContactCard from "@/app/components/ContactCard";
import ContentContainer from "@/app/components/ContentContainer";
import SocialMedia from "@/app/components/SocialMedia";
import SocialMediaCard from "@/app/components/SocialMediaCard";
import { rubik_mono_one } from "@/app/fonts";
import { FETCH_ACADEMIC_CIRCLE } from "@/app/lib/fetchAcademicCircle";
import { useSuspenseQuery } from "@apollo/client";
import Image from "next/image";
import { Suspense } from "react";

const Page = ({ params }: { params: { slug: string } }) => {
  const { data, error } = useSuspenseQuery(FETCH_ACADEMIC_CIRCLE, {
    variables: { slug: params.slug },
  });

  if (data.academicCircles.data.length === 0) return <p>Not found</p>; // TODO: Edit this to be more user friendly
  if (error) return <p>Error :\</p>; // TODO: Replace with error page

  console.log(data.academicCircles.data[0].attributes);

  return (
    // TODO: Edit this to be more user friendly
    <main className="flex min-h-screen flex-col items-center gap-7">
      <Suspense fallback={<div>Loading...</div>}>
        {data.academicCircles.data.map(({ attributes }) => (
          <>
            <div className="w-full text-center p-7 md:p-11 gradient rounded-b-3xl">
              <h1
                className={`text-xl md:text-4xl font-bold text-white ${rubik_mono_one.className}`}
              >
                {attributes.name}
              </h1>
            </div>
            <ContentContainer style={"md:hidden justify-center"}>
              {attributes.logo?.data ? (
                <Image
                  src={attributes.logo.data.attributes.url}
                  alt={attributes.logo.data.attributes.name}
                  width={200} // TODO: Fix this
                  height={200}
                  className="rounded-2xl w-full h-auto"
                />
              ) : (
                <Image
                  src="/card-placeholder.jpg"
                  alt="Placeholder"
                  width={200}
                  height={200}
                  className="rounded-2xl w-full max-w-[300px] h-auto"
                />
              )}
            </ContentContainer>

            <ContentContainer key={attributes.name}>
              <div className="flex justify-between items-center gap-14">
                <div className="flex flex-col gap-3 w-full md:w-[70%]">
                  <p className="font-semibold">
                    Koło funkcjonujące na Wydziale:{" "}
                    {attributes.faculty.data.attributes.abbreviation}
                  </p>
                  <p>
                    <span className="font-semibold">
                      Opis koła studenckiego:
                    </span>{" "}
                    {attributes.description}
                  </p>
                </div>
                {attributes.logo?.data ? (
                  <Image
                    src={attributes.logo.data.attributes.url}
                    alt={attributes.logo.data.attributes.name}
                    width={200}
                    height={200}
                    className="rounded-2xl w-[30%] h-auto hidden md:block"
                  />
                ) : (
                  <Image
                    src="/card-placeholder.jpg"
                    alt="Placeholder"
                    width={200}
                    height={200}
                    className="rounded-2xl w-[30%] h-auto hidden md:block"
                  />
                )}
              </div>
            </ContentContainer>
            {attributes.social_media?.length && (
              <SocialMediaCard socials={attributes.social_media} />
            )}
            <ContactCard
              email={attributes.email}
              address={attributes.address}
            />
          </>
        ))}
      </Suspense>
    </main>
  );
};

export default Page;
