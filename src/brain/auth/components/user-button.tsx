"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BadgeCheck,
  Bell,
  CreditCard,
  Divide,
  Loader2,
  LogOut,
  Sparkles,
  User2,
} from "lucide-react";
import Link from "next/link";

export const UserButton = () => {
  const isLoading = false;

  if (isLoading) {
    return <Loader2 className="size-4 animate-spin text-muted-foreground" />;
  }

  const name = "hekuu";
  const email = "hekuu@gmail.com";

  const avatarFallback = name ? name.charAt(0).toUpperCase() : "U";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="size-8 hover:opacity-75 transition rounded-lg">
          <AvatarFallback className="bg-muted font-medium">
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        side="bottom"
        className="min-w-56 rounded-lg"
        sideOffset={10}
      >
        <DropdownMenuLabel className="">
          <div className="flex items-center gap-2 text-left text-sm">
            <Avatar className="size-10 hover:opacity-75 transition ">
              <AvatarFallback className="flex items-center justify-center bg-muted font-medium">
                {avatarFallback}
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <p className="truncate font-semibold">{name || "User"}</p>
              <p className="truncate text-xs font-medium text-muted-foreground">
                {email}
              </p>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Sparkles />
            Upgrade to Pro
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <BadgeCheck />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bell />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => {}}>
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
