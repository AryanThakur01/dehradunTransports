import Section from "@/components/ui/section";
import { FC } from "react";
import Focus from "@/images/about-focus.jpg";
import Image from "next/image";

interface IIntro {}

const Introduction: FC<IIntro> = () => {
  return (
    <Section title="Our Company Vision" className="bg-secondary py-3">
      <div className="flex gap-3 items-center justify-between flex-wrap-reverse">
        <p className="md:max-w-[50%] max-w-[100%]">
          At Best Balaji Transports, our vision is to redefine the standards of
          excellence in the truck transport industry. We envision a future where
          our services are not just about moving goods from one place to another
          but also about delivering peace of mind, reliability, and exceeding
          customer expectations.
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
