"use client";

import { useEffect } from "react";
import { CiRepeat } from "react-icons/ci";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    // TODO: Edit this to be more user friendly
    <div className="h-[50vh] mt-28 flex flex-col items-center justify-center text-center">
      <div>
        <h1 className="inline-block mr-5 pr-6 border-r-[1px] border-primary dark:border-darkprimary  text-2xl font-bold">
          500
        </h1>
        <div className="inline-block">
          <h2 className="">Something went wrong!</h2>
        </div>
      </div>
      <span className="my-6">{error && error.toString()}</span>
      <button
        aria-label="Reset the page"
        onClick={() => reset()}
        className="text-3xl"
      >
        <CiRepeat />
      </button>
    </div>
  );
};

export default Error;
