import Hero from "@/components/Hero";
import Section from "@/components/ui/section";
import AboutHero from "@/images/home-hero.jpg";

const Top = () => {
  return (
    <>
      <Hero heroImg={AboutHero} />
      <Section className="border min-h-[25rem] flex flex-col justify-center">
        <h1 className="font-bold text-4xl text-primary-foreground text-center">
          About
        </h1>
      </Section>
    </>
  );
};
export default Top;
