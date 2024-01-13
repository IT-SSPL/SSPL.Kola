"use client";

import { useSuspenseQuery } from "@apollo/client";
import { FETCH_FOOTER } from "../lib/fetchFooter";
import { Suspense, useEffect, useState } from "react";
import SocialMedia from "./SocialMedia";
import Image from "next/image";

const Footer = () => {
  const { data, error } = useSuspenseQuery(FETCH_FOOTER);
  const tData = data.footer.data.attributes;
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <footer className="flex flex-col bg-[#252525] mt-28 pt-12 pb-12 px-10 sm:px-20 text-darkprimary md:px-28 lg:pb-10 lg:px-40 3xl:px-64 4xl:px-72 shadow-center-xl">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex flex-col gap-10 justify-between md:flex-row">
          <div className="pointer-events-none">
            {tData.logo?.data && (
              <Image
                src={tData.logo?.data.attributes.url}
                alt={
                  "Logo of the Student Government of Lodz University of Technology"
                }
                width={500}
                height={500}
                className="w-64 lg:w-72 xl:w-80"
              />
            )}
          </div>
          <div className="flex flex-col md:text-end lg:text-lg 4xl:text-xl">
            <span className="font-bold">{tData.name}</span>
            <span>tel. {tData.phone_number}</span>
            <span className="whitespace-pre-line">{tData.street}</span>
            <a href={`mailto:${tData.email}`}>{tData.email}</a>
          </div>
        </div>
        {tData.social_media && tData.social_media?.length !== 0 && (
          <div className="text-center text-lg md:text-base mt-8 md:mt-12 lg:mt-8">
            NASZE MEDIA SPOŁECZNOŚCIOWE
            <div className="flex flex-row justify-center gap-4 sm:gap-6 mt-4">
              {tData.social_media.map(({ url, type }) => (
                <SocialMedia key={url} type={type} url={url} isDark />
              ))}
            </div>
          </div>
        )}
      </Suspense>
    </footer>
  );
};

export default Footer;
