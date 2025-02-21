"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { SidebarIcon, User2 } from "lucide-react";
import { useSidebar } from "../ui/sidebar";
import Image from "next/image";
import SearchButton from "./search-button";
import { UserButton } from "@/brain/auth/components/user-button";
import Rainbow from "../rainbow";
import AuthButton from "@/brain/auth/components/auth-button";

export const AppHeader = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="flex fixed top-0 z-50 w-full border-b bg-transparent backdrop-blur-md shadow-sm">
      <div className="flex flex-col h-[--header-height] w-full gap-2 pl-2 px-6 overflow-hidden">
        <div className="flex items-center justify-between h-[56px]">
          <div className="h-[56px] flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <SidebarIcon />
            </Button>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="logo"
                width={28}
                height={28}
                className="text-purple-700"
              />
              <h1 className="text-xl font-bold">
                <Rainbow sn={0}>EnergyChat</Rainbow>
              </h1>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <SearchButton />
            <AuthButton />
          </div>
        </div>
        <div>navBar</div>
      </div>
    </header>
  );
};
