import Hero from "@/components/Hero";
import Section from "@/components/ui/section";
import ContactHero from "@/images/home-hero.jpg";

const Top = () => {
  return (
    <>
      <Hero heroImg={ContactHero} />
      <Section className="min-h-[25rem] flex flex-col justify-center mb-10 h-[70vh]">
        <h1 className="font-bold text-4xl text-primary-foreground text-center">
          Contact
        </h1>
      </Section>
    </>
  );
};
export default Top;
