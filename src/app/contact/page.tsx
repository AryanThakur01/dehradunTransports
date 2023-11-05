import ContactPage from "@/components/pages/contact/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact best balaji packers and movers",
  description:
    "Best Balaji Packers and Movers, your go-to solution for all your moving needs. We understand that moving can be a stressful and challenging experience. That's where we come in – to make your move smooth, efficient, and hassle-free. With years of experience and a dedicated team, we've built a reputation for being the best in the business. Our commitment to excellence and customer satisfaction sets us apart.",
};

const page = () => {
  return (
    <>
      <ContactPage />
    </>
  );
};
export default page;
