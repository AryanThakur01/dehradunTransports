import { FC } from "react";
import Section from "@/components/ui/section";
import { Truck } from "lucide-react";
import Professional from "@/images/home-experience.png";
import ServiceCard from "@/components/ServiceCard";

interface IServices {}

const ServicesList: FC<IServices> = () => {
  const serviceList = [
    {
      title: "Residential Relocation",
      icon: <Truck />,
      image: Professional,
      detail: "Safely move households, apartments, and homes.",
    },
    {
      title: "Commercial Relocation",
      icon: <Truck />,
      image: Professional,
      detail:
        "Expertise in relocating businesses, offices, and corporate setups.",
    },
    {
      title: "Packing and Unpacking",
      icon: <Truck />,
      image: Professional,
      detail:
        "Professionally pack your belongings and unpack them at your destination.",
    },
    {
      title: "Loading and Unloading",
      icon: <Truck />,
      image: Professional,
      detail: "Efficient loading and unloading of your items onto trucks.",
    },
    {
      title: "Specialized Items Handling",
      icon: <Truck />,
      image: Professional,
      detail: "Transport fragile, valuable, or sensitive items with care.",
    },
    {
      title: "Packing Supplies",
      icon: <Truck />,
      image: Professional,
      detail:
        "Provide packing materials like boxes, tape, and protective wrapping",
    },
  ];
  return (
    <Section title="Services" className="my-8">
      <p className="mb-3">
        At Best Balaji Packers and Movers, we offer a comprehensive array of
        services, meticulously tailored to ensure your move is smooth, secure,
        and stress-free. From packing your precious memories with care to the
        joy of unpacking them in your new home, we&apos;re here to transform
        your move into a seamless journey filled with confidence and peace of
        mind.
      </p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
        {serviceList?.map((point) => (
          <ServiceCard {...point} key={point.title} detail={point.detail} />
        ))}
      </div>
    </Section>
  );
};

export default ServicesList;
