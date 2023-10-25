import Section from "@/components/ui/section";
import { FC } from "react";

interface IIntro {}

const Story: FC<IIntro> = () => {
  return (
    <Section title="The Road to Success">
      <article className="flex-col gap-2">
        <p>
          In a bustling town, a dream took shape with a single old truck. The
          founders, Mark and Sarah, had a vision of building a reliable
          transport business. They faced hurdles initially—maintenance costs,
          competition, and long hours on the road.
        </p>
        <p>
          Undeterred, they persevered. With each successful delivery, their
          reputation grew. Word-of-mouth referrals brought in more clients. Mark
          and Sarah expanded their fleet and invested in modern logistics
          technology.
        </p>
        <p>
          Their dedication paid off. Today, their business thrives, connecting
          cities and industries, and their small startup has grown into a
          respected and reliable transport company. The road to success wasn't
          easy, but Mark and Sarah's hard work, unwavering commitment, and a
          touch of innovation transformed their dream into a reality, proving
          that determination and ambition can overcome any obstacle on the path
          to success.
        </p>
      </article>
    </Section>
  );
};

export default Story;
