import Section from "@/components/ui/section";
import { FC } from "react";
import Focus from "@/images/about-focus.jpg";
import Image from "next/image";

interface IIntro {}

const Introduction: FC<IIntro> = () => {
  return (
    <Section title="Our Company Vision" className="py-3 my-5">
      <div className="flex gap-3 items-center justify-between flex-wrap-reverse">
        <p className="md:max-w-[50%] max-w-[100%]">
          Best Balaji Packers and Movers is a distinguished company with a vast
          network of branches, spanning across India, to serve our valued
          customers. With a commitment to simplifying the complexities of
          relocation, we have earned recognition for delivering top-quality
          services at the most competitive rates. Our enduring strength lies in
          offering a wide spectrum of relocation services, ensuring that every
          aspect of your move is well taken care of
        </p>
        <Image
          src={Focus}
          alt="Vision"
          className="md:max-w-[40%] rounded-md shadow"
        />
      </div>
    </Section>
  );
};

export default Introduction;
