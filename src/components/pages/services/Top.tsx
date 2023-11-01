import Hero from "@/components/Hero";
import Section from "@/components/ui/section";
import ServicesHero from "@/images/services-hero.jpg";

const Top = () => {
  return (
    <>
      <Hero heroImg={ServicesHero} />
      <Section className="min-h-[25rem] flex flex-col justify-center mb-10 h-[70vh]">
        <h1 className="font-bold text-4xl text-primary-foreground text-center">
          Services
        </h1>
      </Section>
    </>
  );
};
export default Top;
