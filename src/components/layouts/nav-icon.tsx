import { Divide, type LucideIcon } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { group } from "console";

interface Props {
  groupLabel?: string;
  items: {
    label: string;
    href: string;
    icon: LucideIcon;
    state?: string;
  }[];
}

// Multi SidebarGroups for each parent
export const NavIcon = ({ groupLabel, items }: Props) => {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      {groupLabel ? (
        <SidebarGroupLabel>{groupLabel}</SidebarGroupLabel>
      ) : (
        <div className="h-4" />
      )}
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((i) => (
            <SidebarMenuItem key={i.label}>
              <SidebarMenuButton
                tooltip={i.label}
                isActive={i.href === pathname}
                onClick={() => {}}
                asChild
              >
                <Link href={i.href}>
                  <i.icon />
                  {i.label}
                </Link>
              </SidebarMenuButton>
              <SidebarMenuBadge className="text-md text-green-700">
                {i.state}
              </SidebarMenuBadge>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
