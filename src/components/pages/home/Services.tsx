import { FC } from "react";
import Section from "@/components/ui/section";
import { Truck } from "lucide-react";
import Professional from "@/images/home-experience.png";
import ServiceCard from "@/components/ServiceCard";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface IServices {}

const Services: FC<IServices> = () => {
  const serviceList = [
    { title: "Local Moving Services", icon: <Truck />, image: Professional },
    {
      title: "Long-Distance Moving Services",
      icon: <Truck />,
      image: Professional,
    },

    { title: "Residential Relocation", icon: <Truck />, image: Professional },
  ];
  return (
    <Section title="Services">
      <p className="mb-3">
        At Best Balaji Packers and Movers, we offer a comprehensive suite of
        services to simplify your moving needs. From residential relocations to
        commercial moves, local transportation, and specialized assistance in
        packing, unpacking, loading, and unloading, we've got it all covered.
        Our commitment to excellence and your satisfaction drives every aspect
        of our operations. Experience seamless and stress-free moving and
        transportation in Dehradun with Best Balaji Packers and Movers.
      </p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
        {serviceList?.map((point) => (
          <ServiceCard {...point} key={point.title} />
        ))}
      </div>
      <Link
        className={cn(
          buttonVariants({ variant: "outline" }),
          "mx-auto my-3 block w-32 text-center border-primary text-primary hover:text-primary",
        )}
        href="/about"
      >
        Show More
      </Link>
    </Section>
  );
};

export default Services;
