"use client";
import { trpc } from "@/trpc/client";

// is loading 在服务端。

const PageClient = () => {
  const [data] = trpc.hello.useSuspenseQuery({
    text: "client",
  });
  return <div>Client says {data.greeting}</div>;
};

export default PageClient;
