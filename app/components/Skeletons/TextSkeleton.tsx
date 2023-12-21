import React from "react";

const TextSkeleton = () => {
  return (
    <div
      role="status"
      className="w-full space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
    >
      <div className="w-full">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-72 mb-4"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[8rem] mb-2.5"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[12rem] mb-2.5"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[16rem] mb-2.5"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default TextSkeleton;
