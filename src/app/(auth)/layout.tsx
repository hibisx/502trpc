"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isSignIn = pathname === "/sign-in";
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background px-6 md:px-10 pt-3 pb-10">
      <div className="flex items-center justify-start">
        <Link href="/">
          <Button variant="ghost">
            <ArrowLeftIcon />
            Home
          </Button>
        </Link>
      </div>
      {children}
    </div>
  );
};

export default Layout;
