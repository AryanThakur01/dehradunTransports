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
          Welcome to Best Balaji Packers and Movers, your reliable moving
          companion. With years of experience, we specialize in making
          relocations effortless and customer-focused. Our dedicated team,
          cutting-edge equipment, and unwavering commitment to excellence ensure
          that your move is smooth, secure, and stress-free. Join us for a
          remarkable moving experience.
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
          <p>
            Registered office: 23/6, Wing 6, Premnagar, Dehradun,
            Uttarakhand-248007
          </p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <div>
            <Phone />
          </div>
          <a href="tel:918077002445" className="hover:underline">
            +918077002445
          </a>
          <a href="tel:918077002445" className="hover:underline">
            +918077002445
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
