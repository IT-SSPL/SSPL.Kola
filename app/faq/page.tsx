"use client";

import { useSuspenseQuery } from "@apollo/client";
import { FETCH_FAQ_QUESTIONS } from "@/app/lib/fetchFaqQuestions";
import { Suspense } from "react";
import ContentContainer from "../components/ContentContainer";
import Header from "../components/Header";
import Markdown from "react-markdown";
import TextSkeleton from "../components/Skeletons/TextSkeleton";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const Page = () => {
  const { data, error } = useSuspenseQuery(FETCH_FAQ_QUESTIONS);

  if (error) return <p>Error :\</p>; // TODO: Replace with error page

  return (
    <main className="min-h-screen flex flex-grow flex-col mx-auto items-center justify-between py-4 md:py-8 lg:py-12 xl:py-16">
      <div className="flex flex-col gap-10 container">
        <div className="flex flex-col gap-2">
          <Header title={"FAQ"} subtitle={"czyli pytania i odpowiedzi"} small />
        </div>
        <ContentContainer style={"flex flex-col gap-3"}>
          <Suspense fallback={<TextSkeleton />}>
            {data.faqQuestions.data.map(({ attributes }) => (
              <details key={attributes.question} className="lg:text-lg">
                <summary className="font-bold cursor-pointer">
                  {attributes.question}
                </summary>
                <Markdown
                  rehypePlugins={[remarkGfm, rehypeRaw]}
                  className="pt-3 pb-4 markdown-style whitespace-pre-wrap"
                >
                  {attributes.answer}
                </Markdown>
              </details>
            ))}
          </Suspense>
        </ContentContainer>
      </div>
    </main>
  );
};

export default Page;
