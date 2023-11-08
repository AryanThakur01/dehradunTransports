import Section from "@/components/ui/section";
import Image from "next/image";
import HeroImage from "@/images/home-hero.jpg";
import EffortlessRelocation from "@/images/home-effortless.jpg";
import StartJourney from "@/images/home-start_journey.jpg";

import { FC } from "react";

interface IHomePage {}

const AdditionalEyeCatchers: FC<IHomePage> = () => {
  return (
    <Section className="bg-secondary py-8 shadow-inner">
      <div className="flex md:flex-row flex-col-reverse gap-4 items-center my-4">
        <div>
          <h3 className="font-bold text-2xl text-secondary-foreground">
            Effortless Relocations by Balaji
          </h3>
          <p>
            Your Local Experts in Dehradun! Welcome to a stress-free moving
            experience with Best Balaji Packers and Movers. We&apos;re your
            trusted choice for seamless relocations and dependable transport
            services in Dehradun. Whether it&apos;s a home move or local
            transportation, we&apos;re here to make it effortless. Choose
            Dehradun&apos;s best packers and movers for peace of mind.
          </p>
        </div>
        <Image
          src={EffortlessRelocation}
          sizes="(max-width: 768px) 20rem, 20rem"
          alt="Relocation Made Easy with Best Balaji Packers and Movers"
          className="w-full md:min-w-[20rem] max-w-full rounded shadow"
        />
      </div>
      <div className="flex md:flex-row flex-col gap-4 items-center my-4">
        <Image
          src={StartJourney}
          sizes="(max-width: 768px) 20rem, 20rem"
          alt="Relocation Made Easy with Best Balaji Packers and Movers"
          className="w-full md:min-w-[20rem] max-w-full rounded shadow"
        />
        <div className="col-span-2">
          <h3 className="font-bold text-2xl text-secondary-foreground">
            Start Your Journey with Balaji
          </h3>
          <p>
            Your Partner for Smooth Moves! Welcome to the beginning of a
            stress-free relocation and transportation experience with Balaji
            Packers and Movers. We are your trusted companions for seamless
            moving and dependable transport services in Dehradun and its
            surroundings. Whether it&apos;s a home transition or local
            transportation, we&apos;re here to make your journey hassle-free and
            efficient. Choose Dehradun&apos;s finest packers and movers to
            embark on your relocation adventure with confidence.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AdditionalEyeCatchers;
