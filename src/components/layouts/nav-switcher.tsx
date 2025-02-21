"use client";

import * as React from "react";
import { Check, ChevronsUpDown, GalleryVerticalEnd, Mail } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export const NavSwitcher = ({
  items,
  defaultItem,
}: {
  items: string[];
  defaultItem: string;
}) => {
  const [selectedItem, setSelectedItem] = React.useState(defaultItem);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
              <Mail className="size-4" />
              <div className="leading-none">
                <span className="">{selectedItem}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="min-w-[--radix-dropdown-menu-trigger-width]"
            align="start"
          >
            {items.map((i) => (
              <DropdownMenuItem key={i} onSelect={() => setSelectedItem(i)}>
                {i} {i === selectedItem && <Check className="ml-auto" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
