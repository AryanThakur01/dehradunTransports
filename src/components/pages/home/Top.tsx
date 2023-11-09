import { buttonVariants } from "@/components/ui/button";
import Section from "@/components/ui/section";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import HeroImage from "@/images/home-hero.jpg";
import Hero from "@/components/Hero";

const Top = () => {
  return (
    <>
      <Hero heroImg={HeroImage} />
      <Section className="justify-center min-h-[26rem] h-[70vh]">
        <h1 className="font-bold text-3xl max-w-4xl text-primary-foreground">
          Best Balaji Packers and Movers: Relocating Lives, One Move at a Time.
        </h1>
        <p className="max-w-3xl text-primary-foreground">
          Your Trusted Partner for Hassle-Free Relocations
        </p>
        <div className="flex gap-1 flex-wrap">
          <Link
            href="/about"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "hover:bg-unset md:hover:bg-secondary/80 bg-primary-foreground my-2 w-32 text-black",
            )}
          >
            GET STARTED
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "my-2 w-32 bg-primary hover:bg-primary text-primary-foreground md:hover:shadow-primary shadow",
            )}
          >
            BOOK NOW
          </Link>
        </div>
      </Section>
    </>
  );
};

export default Top;
