import Link from "next/link";
import { FC } from "react";
import { NavLinks, ThemeSelector } from "./MainNav";

interface INav {}

const Nav: FC<INav> = () => {
  return (
    <>
      <div className="max-w-[70rem] container h-10 flex items-center justify-between">
        <Link href="/" className="font-bold">
          BBPM
        </Link>
        <NavLinks />
        <ThemeSelector />
      </div>
    </>
  );
};
export default Nav;
