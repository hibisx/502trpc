import { HydrateClient, trpc } from "@/trpc/server";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import PageClient from "./client";

const Origin = () => {
  // void trpc.hello.prefetch({ text: "server" });

  return (
    <HydrateClient>
      <Suspense fallback={<p>Loading...</p>}>
        <ErrorBoundary fallback={<p>Error</p>}>
          <PageClient />
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
};

export default Origin;
