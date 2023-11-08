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
        Welcome to Best Balaji Packers and Movers, your trusted partner in
        Dehradun for all your transport and house shifting needs. We are the
        local experts dedicated to delivering top-notch moving and
        transportation services exclusively in Dehradun and its surrounding
        areas. With a commitment to excellence and a focus on customer
        satisfaction, we make your moves seamless and stress-free. Whether
        you're relocating your home or require efficient transport services
        within the city, you can rely on Best Balaji Packers and Movers for a
        hassle-free experience. Discover the difference of working with
        Dehradun&apos;s best packers and movers, where your peace of mind is our
        priority.
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
