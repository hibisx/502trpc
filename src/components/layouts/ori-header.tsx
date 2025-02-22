"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import SearchButton from "./search-button";
import Rainbow from "../rainbow";
import AuthButton from "@/brain/auth/components/auth-button";
import { Button } from "@/components/ui/button";
import ModeToggle from "../mode-toggle";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import {
  BoxIcon,
  ChartLine,
  EllipsisIcon,
  HouseIcon,
  MailIcon,
  PanelsTopLeftIcon,
  SettingsIcon,
  UsersRoundIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const OriginHeader = () => {
  return (
    <header className="z-50 w-full border-b backdrop-blur-md">
      <div className="w-full max-w-7xl mx-auto px-2">
        <div className="h-20 flex w-full items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="logo" width={28} height={28} />
            <h1 className="text-xl font-bold">
              <Rainbow sn={0}>EnergyChat</Rainbow>
            </h1>
          </Link>
          <MenuTop />
          <div className="flex items-center gap-4">
            <SearchButton />
            <AuthButton />
            <ModeToggle />
          </div>
        </div>
        <div className="sticky mx-auto h-2"></div>
      </div>
    </header>
  );
};

const menuItems = [
  {
    title: "Overview",
    href: "/",
    icon: HouseIcon,
  },
  {
    title: "Mails",
    href: "/mails",
    icon: MailIcon,
  },
  {
    title: "Products",
    href: "/products",
    icon: PanelsTopLeftIcon,
  },
  {
    title: "Team",
    href: "/team",
    icon: UsersRoundIcon,
  },
];

const MenuTop = () => {
  const pathname = usePathname();

  return (
    <div className="inline-flex -space-x-px rounded-md shadow-xs rtl:space-x-reverse">
      {menuItems.map((i, idx) => (
        <Button
          key={idx}
          className={cn(
            i.href === pathname && "bg-accent",
            "rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
          )}
          variant="outline"
          asChild
        >
          <Link href={i.href}>
            <i.icon />
            {i.title}
          </Link>
        </Button>
      ))}
      <Button
        className="rounded-none shadow-none rounded-e-md focus-visible:z-10"
        variant="outline"
        size="icon"
        aria-label="Menu"
      >
        <EllipsisIcon size={16} aria-hidden="true" />
      </Button>
    </div>
  );
};
