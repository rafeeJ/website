"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon, Moon, Sun } from "lucide-react";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import * as React from "react";

interface props extends HTMLAttributes<HTMLDivElement> {}

export const MobileNavbar = ({ className }: props) => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn(className)}>
        <MenuIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <a href={"https://www.linkedin.com/in/rafeejenkins/"}>linkedin</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href={"https://github.com/rafeeJ"}>github</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href={"mailto:rafeejenkins@gmail.com"}>email</a>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>
          <div className={"flex items-center gap-2"}>
            <p>theme</p>
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:hidden" />
            <Moon className="h-4 w-4  hidden transition-all dark:block dark:scale-100" />
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
