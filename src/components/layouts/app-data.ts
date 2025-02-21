import { group } from "console";
import {
  BookOpen,
  Bot,
  FlameIcon,
  HomeIcon,
  PlaySquareIcon,
  Settings2,
  Settings2Icon,
  SparklesIcon,
  SquareTerminal,
  Users2Icon,
} from "lucide-react";

export const navSwicher = [
  "hibisx@icloud.com",
  "hekuu@msn.com",
  "ostalent@gmail.com",
];

export const navTop = [
  {
    label: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    label: "Subscriptions",
    href: "#",
    icon: PlaySquareIcon,
    auth: true,
  },
  {
    label: "Ask AI",
    href: "#",
    icon: SparklesIcon,
  },
  {
    label: "Team",
    state: "46",
    href: "#",
    icon: Users2Icon,
  },
  {
    label: "Trending",
    href: "#",
    icon: FlameIcon,
  },
];

export const navFooter = [
  {
    label: "Settings",
    href: "dashboard/settings",
    icon: Settings2Icon,
  },
];

export const navDropdown = [
  {
    label: "Playground",
    href: "#",
    icon: SquareTerminal,
    isActive: true,
    items: [
      {
        label: "History",
        href: "#",
      },
      {
        label: "Starred",
        href: "#",
      },
      {
        label: "Settings",
        href: "#",
      },
    ],
  },
  {
    label: "Models",
    href: "#",
    icon: Bot,
    items: [
      {
        label: "Genesis",
        href: "#",
      },
      {
        label: "Explorer",
        href: "#",
      },
      {
        label: "Quantum",
        href: "#",
      },
    ],
  },
  {
    label: "Documentation",
    href: "#",
    icon: BookOpen,
    items: [
      {
        label: "Introduction",
        href: "#",
      },
      {
        label: "Get Started",
        href: "#",
      },
      {
        label: "Tutorials",
        href: "#",
      },
      {
        label: "Changelog",
        href: "#",
      },
    ],
  },
  {
    label: "Settings",
    href: "#",
    icon: Settings2,
    items: [
      {
        label: "General",
        href: "#",
      },
      {
        label: "Team",
        href: "#",
      },
      {
        label: "Billing",
        href: "#",
      },
      {
        label: "Limits",
        href: "#",
      },
    ],
  },
];
