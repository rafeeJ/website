import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <section className={cn("p-4")}>{children}</section>;
}
