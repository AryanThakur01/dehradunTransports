import { cn } from "@/lib/utils";
import { Navigation, Phone } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

interface IFooter {
  classname?: string;
}

const Footer: FC<IFooter> = ({ classname }) => {
  return (
    <footer
      className={cn(
        "md:px-[9rem] m-auto w-full container grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-3 gap-4",
        classname,
      )}
    >
      <div>
        <h3 className="font-bold text-secondary-foreground text-xl">
          About Us
        </h3>
        <p>
          At Best Balaji Packers and Movers, we offer a comprehensive suite of
          services to simplify your moving needs. From residential relocations
          to commercial moves, local transportation, and specialized assistance
          in packing, unpacking, loading, and unloading, we&apos;ve got it all
          covered. Our commitment to excellence and your satisfaction drives
          every aspect of our operations.
        </p>
      </div>
      <div>
        <h3 className="font-bold text-secondary-foreground text-xl">
          More Information
        </h3>
        <div>
          <Link href="/about">About</Link>
        </div>
        <div>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-secondary-foreground text-xl">
          Get In Touch
        </h3>
        <div className="flex gap-3">
          <Navigation size={40} />
          <p>Registered somewhere exists</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <div>
            <Phone />
          </div>
          <a href="tel:918077002445" className="hover:underline">
            +911234567890
          </a>
          <a href="tel:918077002445" className="hover:underline">
            +919018234560
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
