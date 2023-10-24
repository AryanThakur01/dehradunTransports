"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

interface INav {}
export const NavLinks: FC<INav> = () => {
  const pathName = usePathname();
  return (
    <>
      <div className="container md:flex justify-end hidden gap-5">
        <Link href="/" className={pathName === "/" ? "text-primary" : ""}>
          Home
        </Link>
        <Link
          href="/about"
          className={pathName === "/about" ? "text-primary" : ""}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={pathName === "/contact" ? "text-primary" : ""}
        >
          Contact
        </Link>
      </div>
    </>
  );
};

interface IThemeSelector {}
export const ThemeSelector: FC<IThemeSelector> = () => {
  const { setTheme } = useTheme();
  const [dark, setDark] = useState<boolean>(false);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            if (dark) {
              setTheme("light");
              setDark(!dark);
            } else {
              setTheme("dark");
              setDark(!dark);
            }
          }}
        >
          <SunIcon className={"dark:hidden"} />
          <MoonIcon className="hidden dark:block" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};
