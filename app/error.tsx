"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    // TODO: Edit this to be more user friendly
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Something went wrong!</h2>
      {error.toString()}

      <button onClick={() => reset()}>Try again</button>
    </main>
  );
}
