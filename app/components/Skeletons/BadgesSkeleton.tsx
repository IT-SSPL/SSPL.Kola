import React from "react";

const BadgesSkeleton = () => {
  return (
    <div
      role="status"
      className="w-full space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center pb-6 pt-4 sm:pt-0"
    >
      <div className="w-full flex flex-row gap-4">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-28"
            key={i}
          ></div>
        ))}
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default BadgesSkeleton;
