"use client";

import type { ThemeProvider as NextThemesProvider } from "next-themes";
import dynamic from "next/dynamic";

const DynamicNextThemesProvider = dynamic(
  () => import("next-themes").then((e) => e.ThemeProvider),
  {
    ssr: false,
  }
);

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <DynamicNextThemesProvider {...props}>{children}</DynamicNextThemesProvider>
  );
}
