"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

import { LucideIcon } from "lucide-react";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  PenBox,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { buttonVariants } from "@/components/ui/button";

const links = [
  {
    title: "Main",
    label: "128",
    icon: Inbox,
    variant: "ghost" as const,
    route: "/",
  },
  {
    title: "Dashboard",
    label: "9",
    icon: File,
    variant: "ghost" as const,
    route: "/dashboard",
  },
  {
    title: "Card",
    label: "",
    icon: Send,
    variant: "ghost" as const,
    route: "/card",
  },
];

const ACTIVE_ROUTE = "py-1 px-2 text-gray-300 bg-gray-700";
const INACTIVE_ROUTE =
  "py-1 px-2 text-gray-500 hover:text-gray-300 hover:bg-gray-700";

export default function NavMenu() {
  const pathname = usePathname();
  const isCollapsed = false;
  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.route}
            className={cn(
              buttonVariants({ variant: link.variant, size: "sm" }),
              pathname == link.route &&
                "dark:bg-muted dark:hover:bg-muted dark:hover:text-white",
              "justify-start",
            )}
          >
            <link.icon className="mr-2 h-4 w-4" />
            {link.title}
            {link.label && (
              <span
                className={cn(
                  "ml-auto",
                  //   link.variant === "default" &&
                  //     "text-background dark:text-white"
                )}
              >
                {link.label}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
}
