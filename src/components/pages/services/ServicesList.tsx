import { FC } from "react";
import Section from "@/components/ui/section";
import { Truck } from "lucide-react";
import Professional from "@/images/home-experience.png";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import LocalMoving from "@/images/local-moving.jpg";
import DistantMoving from "@/images/disant-moving.jpg";
import ResRelocation from "@/images/residential-reloc.jpg";
import CommercialReloc from "@/images/commercial-reloc.jpg";
import PackUnpack from "@/images/pack-unpack.jpg";
import LoadUnload from "@/images/load-unload.jpg";
import SpecializedHandling from "@/images/specialize-handling.jpg";
import Packing from "@/images/packing.jpg";

interface IServices {}

const ServicesList: FC<IServices> = () => {
  const serviceList = [
    {
      title: "Local Moving Services",
      icon: <Truck />,
      detail:
        "Best Balaji ensures smooth, stress-free local moves for ultimate convenience",
      image: LocalMoving,
    },
    {
      title: "Long-Distance Moving Services",
      icon: <Truck />,
      image: DistantMoving,
      detail:
        "Balaji excels in stress-free long-distance moves for seamless relocations.",
    },
    {
      title: "Residential Relocation",
      icon: <Truck />,
      image: ResRelocation,
      detail: "Safely move households, apartments, and homes.",
    },
    {
      title: "Commercial Relocation",
      icon: <Truck />,
      image: CommercialReloc,
      detail:
        "Expertise in relocating businesses, offices, and corporate setups.",
    },
    {
      title: "Packing and Unpacking",
      icon: <Truck />,
      image: PackUnpack,
      detail:
        "Professionally pack your belongings and unpack them at your destination.",
    },
    {
      title: "Loading and Unloading",
      icon: <Truck />,
      image: LoadUnload,
      detail: "Efficient loading and unloading of your items onto trucks.",
    },
    {
      title: "Specialized Items Handling",
      icon: <Truck />,
      image: SpecializedHandling,
      detail: "Transport fragile, valuable, or sensitive items with care.",
    },
    {
      title: "Packing Supplies",
      icon: <Truck />,
      image: Packing,
      detail:
        "Provide packing materials like boxes, tape, and protective wrapping",
    },
  ];
  return (
    <Section title="Services" className="my-8">
      <p className="mb-3">
        Welcome to{" "}
        <Link
          href="/"
          className="text-primary hover:underline relative top-[0.9px]"
        >
          Best Balaji Packers and Movers
        </Link>
        , your trusted partner in Dehradun for all your transport and house
        shifting needs. We are the local experts dedicated to delivering
        top-notch moving and transportation services exclusively in Dehradun and
        its surrounding areas. With a commitment to excellence and a focus on
        customer satisfaction, we make your moves seamless and stress-free.
        Whether you&apos;re relocating your home or require efficient transport
        services within the city, you can rely on Best Balaji Packers and Movers
        for a hassle-free experience. Discover the difference of working with
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
