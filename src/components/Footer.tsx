import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface IFooter {
  classname?: string;
}

const Footer: FC<IFooter> = ({ classname }) => {
  return (
    <footer
      className={cn(
        "md:px-[9rem] m-auto w-full container grid md:grid-cols-3 py-3",
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
        <p>
          Welcome to Best Balaji Packers and Movers, your reliable moving
          companion. With years of experience, we specialize in making
          relocations effortless and customer-focused. Our dedicated team,
          cutting-edge equipment, and unwavering commitment to excellence ensure
          that your move is smooth, secure, and stress-free. Join us for a
          remarkable moving experience.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
