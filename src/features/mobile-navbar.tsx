import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface props extends HTMLAttributes<HTMLDivElement> {}

export const MobileNavbar = ({ className }: props) => {
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
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
