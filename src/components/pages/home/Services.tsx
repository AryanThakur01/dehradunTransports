import { FC } from "react";
import Section from "@/components/ui/section";
import { Truck } from "lucide-react";
import Professional from "@/images/home-experience.png";
import ServiceCard from "@/components/ServiceCard";

interface IServices {}

const Services: FC<IServices> = () => {
  const serviceList = [
    { title: "Local Moving Services", icon: <Truck />, image: Professional },
    {
      title: "Long-Distance Moving Services",
      icon: <Truck />,
      image: Professional,
    },
    { title: "Residential Moving", icon: <Truck />, image: Professional },
    {
      title: "Local And Long Distance",
      icon: <Truck />,
      image: Professional,
    },
  ];
  return (
    <Section title="Services">
      <p className="mb-3">
        At Best Balaji Packers and Movers, we offer a comprehensive array of
        services, meticulously tailored to ensure your move is smooth, secure,
        and stress-free. From packing your precious memories with care to the
        joy of unpacking them in your new home, we're here to transform your
        move into a seamless journey filled with confidence and peace of mind.
      </p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
        {serviceList?.map((point) => (
          <ServiceCard {...point} key={point.title} />
        ))}
      </div>
    </Section>
  );
};

export default Services;
