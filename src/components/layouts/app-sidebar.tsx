"use client";

import type * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { NavSwitcher } from "./nav-switcher";
import { NavIcon } from "./nav-icon";

import { navSwicher, navTop, navFooter } from "@/components/layouts/app-data";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="icon"
      className="top-[--header-height] !h-[calc(100svh-var(--header-height))] border-none"
      {...props}
    >
      <SidebarHeader className="border-b">
        <NavSwitcher items={navSwicher} defaultItem={navSwicher[0]} />
      </SidebarHeader>
      <SidebarContent>
        <NavIcon items={navTop} />
      </SidebarContent>
      <SidebarFooter>
        <NavIcon items={navFooter} />
      </SidebarFooter>
    </Sidebar>
  );
}
