import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FC } from "react";

interface IHero {
  heroImg: string | StaticImport;
}

const Hero: FC<IHero> = ({ heroImg }) => {
  return (
    <div className="inset-0 top-12 z-[-2] overflow-hidden h-[70vh] absolute flex items-center min-h-[27rem]">
      <Image
        src={heroImg}
        alt="BBPM Transports"
        sizes="(max-width: 768px) 70vw, 90vw"
        // className="min-h-full w-full"
        quality={100}
        fill
        style={{
          objectFit: "cover",
        }}
      />
      <div className="overlay w-full h-full bg-black absolute opacity-50" />
    </div>
  );
};

export default Hero;
