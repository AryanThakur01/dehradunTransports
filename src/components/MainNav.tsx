"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Menu, MoonIcon, SunIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

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
        <Link
          href="/services"
          className={pathName === "/services" ? "text-primary" : ""}
        >
          Services
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

export const Hamburger = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="flex items-center">
              <Menu />
            </TooltipTrigger>
            <TooltipContent>
              <p className="bg-secondary-foreground/95 text-background w-20 rounded shadow relative top-2">
                Menu
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </SheetTrigger>
      <SheetContent
        className="max-w-full w-[400px] sm:w-[540px] border-r-border"
        side="left"
      >
        <SheetHeader>
          <SheetTitle className="text-left my-2">BBPM</SheetTitle>
          <hr />
        </SheetHeader>
        <ul className="my-2">
          <li>
            <SheetClose asChild>
              <Link href="/">Home</Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <Link href="/about">About</Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <Link href="/contact">Contact</Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <Link href="/services">Services</Link>
            </SheetClose>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
};
