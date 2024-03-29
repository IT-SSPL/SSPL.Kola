"use client";

import { useSuspenseQuery } from "@apollo/client";
import {
  FETCH_ACADEMIC_CIRCLES,
  DataAcademicCircles,
} from "../lib/fetchAcademicCircles";
import { Suspense } from "react";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import { useSearchParams } from "next/navigation";
import { DataFuzzySearch, FETCH_FUZZY_SEARCH } from "../lib/fetchFuzzySearch";
import Masonry from "react-masonry-css";
import FacultyBadge from "../components/FacultyBadge";
import BadgesSkeleton from "../components/Skeletons/BadgesSkeleton";

const breakpointColumnsObj = {
  default: 3,
  1280: 2,
  768: 1,
};

const Page = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const query = params.get("query");
  const faculty = params.get("faculty");

  const fetchQuery = query ? FETCH_FUZZY_SEARCH : FETCH_ACADEMIC_CIRCLES;

  const { data, error } = useSuspenseQuery(
    fetchQuery,
    query
      ? { variables: { query: query } }
      : { variables: { query: faculty ? faculty : "" } }
  );

  let tData;

  if ("search" in data) {
    const { search, ...restData } = data as DataFuzzySearch;
    tData = { ...search, ...restData };
  } else {
    tData = { ...(data as DataAcademicCircles) };
  }

  if (error) return <p>Error :\</p>; // TODO: Replace with error page

  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center">
      <div>
        <Header
          title={"KOŁA \nNAUKOWE"}
          subtitle={"POLITECHNIKI ŁÓDZKIEJ"}
          style={"mt-2"}
        />
        <Suspense fallback={<BadgesSkeleton />}>
          <div className="flex flex-wrap justify-center gap-2 pb-6 pt-4 sm:pt-0">
            {data.faculties.data.map(({ attributes }) => (
              <FacultyBadge
                key={attributes.name}
                title={attributes.abbreviation}
                clicked={attributes.abbreviation.toLowerCase() === faculty}
                pathUrl={`/kola-naukowe?faculty=${attributes.abbreviation.toLowerCase()}`}
              />
            ))}
          </div>
        </Suspense>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
          style={{ padding: "1rem 0 0 0" }}
        >
          {tData.academicCircles.data.map(({ attributes }) => (
            <InfoCard
              key={attributes.name}
              photoUrl={attributes.logo?.data}
              title={attributes.name}
              pathUrl={`/kola-naukowe/${attributes.slug}`}
              isCircle
            />
          ))}
        </Masonry>
      </Suspense>
    </main>
  );
};

export default Page;
