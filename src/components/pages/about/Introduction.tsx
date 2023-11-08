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
          At Best Balaji Packers and Movers, we&apos;ve been the trusted choice
          for transport and relocation services in Dehradun since [Year]. Our
          journey began with the vision of providing exceptional and
          customer-centric solutions, and we&apos;ve since grown into a
          well-respected name in the industry. With a dedicated team, local
          expertise, and a commitment to quality service, we make relocations
          and transportation hassle-free. Whether it&apos;s moving your home,
          your office, or transporting goods, we&apos;re here to ensure a smooth
          and efficient experience. Your satisfaction and peace of mind are our
          top priorities, and we look forward to being your reliable moving
          partner.
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
