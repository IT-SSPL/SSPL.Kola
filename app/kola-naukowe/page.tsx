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

const breakpointColumnsObj = {
  default: 3,
  1280: 2,
  768: 1,
};

const Page = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const query = params.get("query");
  let fetchQuery;

  if (query) {
    fetchQuery = FETCH_FUZZY_SEARCH;
  } else {
    fetchQuery = FETCH_ACADEMIC_CIRCLES;
  }

  const { data, error } = useSuspenseQuery(
    fetchQuery,
    query ? { variables: { query: query } } : {}
  );

  if (error) return <p>Error :\</p>; // TODO: Replace with error page

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div>
        <Header
          title={"KOŁA \nNAUKOWE"}
          subtitle={"POLITECHNIKI ŁÓDZKIEJ"}
          style={"mt-2"}
        />
        <Suspense fallback={<div>Loading...</div>}>
          <div className="flex flex-wrap justify-center gap-2 pb-6">
            {data.faculties.data.map(({ attributes }) => (
              <FacultyBadge
                key={attributes.name}
                title={attributes.abbreviation}
                pathUrl={`/kola-naukowe?query=${attributes.abbreviation.toLowerCase()}`}
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
          {query
            ? (
                data as unknown as DataFuzzySearch
              ).search.academicCircles.data.map(({ attributes }) => (
                <InfoCard
                  key={attributes.name}
                  photoUrl={attributes.logo?.data}
                  title={attributes.name}
                  pathUrl={`/kola-naukowe/${attributes.slug}`}
                />
              ))
            : (data as unknown as DataAcademicCircles).academicCircles.data.map(
                ({ attributes }) => (
                  <InfoCard
                    key={attributes.name}
                    photoUrl={attributes.logo?.data}
                    title={attributes.name}
                    pathUrl={`/kola-naukowe/${attributes.slug}`}
                  />
                )
              )}
        </Masonry>
      </Suspense>
    </main>
  );
};

export default Page;
