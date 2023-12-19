"use client";

import ContactCard from "@/app/components/ContactCard";
import ContentContainer from "@/app/components/ContentContainer";
import InfoCard from "@/app/components/InfoCard";
import SocialMediaCard from "@/app/components/SocialMediaCard";
import { poller_one } from "@/app/fonts";
import { FETCH_ACADEMIC_CIRCLE } from "@/app/lib/fetchAcademicCircle";
import { useSuspenseQuery } from "@apollo/client";
import Image from "next/image";
import { Suspense } from "react";
import Markdown from "react-markdown";

const Page = ({ params }: { params: { slug: string } }) => {
  const { data, error } = useSuspenseQuery(FETCH_ACADEMIC_CIRCLE, {
    variables: { slug: params.slug },
  });

  if (data.academicCircles.data.length === 0) return <p>Not found</p>; // TODO: Edit this to be more user friendly
  if (error) return <p>Error :\</p>; // TODO: Replace with error page

  const shortData = data.academicCircles.data[0].attributes;

  return (
    <main className="flex min-h-screen flex-col items-center gap-7">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="w-full text-center p-7 md:p-11 gradient rounded-b-3xl">
          <h1
            className={`text-2xl md:text-4xl font-bold text-white ${poller_one.className}`}
          >
            {shortData.name}
          </h1>
        </div>
        <ContentContainer style={"md:hidden justify-center"}>
          <Image
            src={
              shortData.logo?.data
                ? shortData.logo.data.attributes.url
                : "/card-placeholder.jpg"
            }
            alt={
              shortData.logo?.data
                ? shortData.logo.data.attributes.name
                : "Placeholder"
            }
            width={200} // TODO: Fix this
            height={200}
            className="rounded-2xl w-full h-auto max-w-[300px]"
          />
        </ContentContainer>

        <ContentContainer key={shortData.name}>
          <div className="flex justify-between w-full items-center gap-14">
            <div className="flex flex-col gap-3 w-full md:w-[70%]">
              <p className="font-semibold">
                Funkcjonujące na Wydziale:{" "}
                {shortData.faculty.data.attributes.abbreviation}
              </p>
              <span>
                <span className="font-semibold">Opis koła studenckiego:</span>{" "}
                <Markdown>{shortData.description}</Markdown>
              </span>
              {shortData.president && (
                <p>
                  <span className="font-semibold">Przewodniczący:</span>{" "}
                  {shortData.president}
                </p>
              )}
            </div>
            <Image
              src={
                shortData.logo?.data
                  ? shortData.logo.data.attributes.url
                  : "/card-placeholder.jpg"
              }
              alt={
                shortData.logo?.data
                  ? shortData.logo.data.attributes.name
                  : "Placeholder"
              }
              width={200}
              height={200}
              className="rounded-2xl w-[30%] h-auto hidden md:block self-start"
            />
          </div>
        </ContentContainer>
        {shortData.subsections.data.length !== 0 && (
          <section className="w-full">
            <h2
              className={`mb-6 text-3xl uppercase text-center ${poller_one.className}`}
            >
              Sekcje:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {shortData.subsections.data.map(({ attributes }) => (
                <InfoCard
                  key={attributes.name}
                  photoUrl={attributes.logo?.data}
                  title={attributes.name}
                  pathUrl={`/kola-naukowe/${attributes.slug}`}
                  isCircle
                />
              ))}
            </div>
          </section>
        )}
        {shortData.social_media?.length !== 0 &&
          shortData.social_media?.length && (
            <SocialMediaCard socials={shortData.social_media} />
          )}
        <ContactCard email={shortData.email} address={shortData.address} />
      </Suspense>
    </main>
  );
};

export default Page;
