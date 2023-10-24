import Section from "@/components/ui/section";
import Image from "next/image";
import HeroImage from "@/images/home-hero.jpg";
import { FC } from "react";

interface IHomePage {}

const AdditionalEyeCatchers: FC<IHomePage> = () => {
  return (
    <Section className="bg-secondary py-8 shadow-inner">
      <div className="grid grid-cols-3 gap-4 items-center my-4">
        <div className="col-span-2">
          <h3 className="font-bold text-2xl text-secondary-foreground">
            Effortless Relocations by Balaji
          </h3>
          <p>
            Are you gearing up for a move? Let us make the process stress-free
            and effortless. Best Balaji Packers and Movers is your trusted
            partner for seamless relocations. We specialize in taking the hassle
            out of moving, providing a wide range of services to cater to your
            specific needs, whether it&apos;s a local move, a long-distance
            journey, or corporate relocation. Our dedicated team ensures the
            utmost care for your belongings, and our commitment to excellence
            means you can trust us to handle every aspect of your move with
            professionalism and precision. Discover a new level of moving ease
            with us.
          </p>
        </div>
        <Image
          src={HeroImage}
          alt="Relocation Made Easy with Best Balaji Packers and Movers"
          className="w-full max-w-[23rem] rounded shadow"
        />
      </div>
      <div className="grid grid-cols-3 gap-4 items-center my-4">
        <Image
          src={HeroImage}
          alt="Relocation Made Easy with Best Balaji Packers and Movers"
          className="w-full max-w-[23rem] rounded shadow"
        />
        <div className="col-span-2">
          <h3 className="font-bold text-2xl text-secondary-foreground">
            Start Your Journey with Balaji
          </h3>
          <p>
            Every move is a new chapter in your life story, and we want to help
            you start it on the right foot. Best Balaji Packers and Movers is
            here to facilitate your journey to a fresh beginning with a seamless
            and efficient moving experience. Whether you&apos;re moving your
            home or business, our services are designed to ensure that the
            transition is as smooth and stress-free as possible. With our
            team&apos;s expertise, cutting-edge equipment, and commitment to
            customer satisfaction, you can trust us to take care of every
            detail. Your next adventure awaits – let us help you embark on it
            with confidence and ease.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AdditionalEyeCatchers;
