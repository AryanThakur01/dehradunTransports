import Card from "@/components/Card";
import Section from "@/components/ui/section";
import { Map, User, UserCog, Wallet } from "lucide-react";
import React from "react";
import Professional from "@/images/home-experience.png";

const Introduction = () => {
  const keyPoints = [
    { title: "Experience", icon: <UserCog />, image: Professional },
    { title: "Affordable", icon: <Wallet />, image: Professional },
    { title: "Professional Team", icon: <User />, image: Professional },
    {
      title: "Local And Long Distance",
      icon: <Map />,
      image: Professional,
    },
  ];

  return (
    <Section title="introduction">
      <article>
        Welcome to Best Balaji Packers and Movers, your go-to solution for all
        your moving needs. We understand that moving can be a stressful and
        challenging experience. That's where we come in – to make your move
        smooth, efficient, and hassle-free. With years of experience and a
        dedicated team, we've built a reputation for being the best in the
        business. Our commitment to excellence and customer satisfaction sets us
        apart.
      </article>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3 my-3">
        {keyPoints?.map((point) => <Card {...point} key={point.title} />)}
      </div>
    </Section>
  );
};

export default Introduction;
