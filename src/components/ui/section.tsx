import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface ISection {
  children: ReactNode;
  className?: string;
  title?: string;
}

const Section: FC<ISection> = ({ children, className, title }) => {
  return (
    <>
      <section
        className={cn(
          "md:px-[9rem] m-auto w-full container flex flex-col my-3",
          className,
        )}
      >
        {title && (
          <>
            <h2 className="text-2xl w-fit font-semibold">
              {title?.toUpperCase()}
              <hr className="w-[80%] mt-2 mb-4 border-success border-2 rounded" />
            </h2>
          </>
        )}
        {children}
      </section>
    </>
  );
};

export default Section;
