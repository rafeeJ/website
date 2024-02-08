import Link from "next/link";
import { MobileNavbar } from "@/features/mobile-navbar";
import { DarkModeToggle } from "@/features/dark-mode/dark-mode-toggle";

export const Navbar = () => {
  return (
    <nav className={"mb-5 flex items-center"}>
      <div className={"flex gap-4"}>
        <Link href={"/"}>home</Link>
        <Link href={"/download"}>cv</Link>
        <Link href={"/blog"}>blog</Link>
      </div>
      <div className={"flex-grow"} />
      <div className={"gap-4 hidden md:flex items-center"}>
        <a href={"https://www.linkedin.com/in/rafeejenkins/"}>linkedin</a>
        <a href={"https://github.com/rafeeJ"}>github</a>
        <a href={"mailto:rafeejenkins@gmail.com"}>email</a>
        <DarkModeToggle />
      </div>
      <MobileNavbar className={"flex md:hidden"} />
    </nav>
  );
};
