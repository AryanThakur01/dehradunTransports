import Card from "@/components/Card";
import Section from "@/components/ui/section";
import { Map, User, UserCog, Wallet } from "lucide-react";
import React from "react";
import Experience from "@/images/home-experience.jpg";
import Affordable from "@/images/home-affordable.jpg";
import ProfessionalTeam from "@/images/home-professional_team.jpg";
import LocalAndLongDistance from "@/images/local-and-distant.jpg";
import Link from "next/link";

const Introduction = () => {
  const keyPoints = [
    { title: "Experience", icon: <UserCog />, image: Experience },
    { title: "Affordable", icon: <Wallet />, image: Affordable },
    { title: "Professional Team", icon: <User />, image: ProfessionalTeam },
    {
      title: "Local And Long Distance",
      icon: <Map />,
      image: LocalAndLongDistance,
    },
  ];

  return (
    <Section title="introduction" className="my-3">
      <article>
        Welcome to Best Balaji Packers and Movers, your trusted partner in
        Dehradun for all your transport and house shifting needs. We are the
        local experts dedicated to delivering top-notch moving and
        transportation services exclusively in Dehradun and its surrounding
        areas. With a commitment to excellence and a focus on customer
        satisfaction, we make your moves seamless and stress-free. Whether
        you&apos;re relocating your home or require{" "}
        <Link
          href="/services"
          className="text-primary hover:underline relative top-[0.9px]"
        >
          efficient transport services
        </Link>{" "}
        within the city, you can rely on Best Balaji Packers and Movers for a
        hassle-free experience. Discover the difference of working with
        Dehradun&apos;s best packers and movers, where your peace of mind is our
        priority.
      </article>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3 my-3">
        {keyPoints?.map((point) => <Card {...point} key={point.title} />)}
      </div>
    </Section>
  );
};

export default Introduction;
