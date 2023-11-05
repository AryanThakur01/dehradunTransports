import AboutPage from "@/components/pages/about/AboutPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About best balaji packers and movers",
  description:
    "Distinguished company with a vast network of branches, spanning across India, to serve our valued customers. With a commitment to simplifying the complexities of relocation, we have earned recognition for delivering top-quality services at the most competitive rates.",
};

const page = () => {
  return (
    <>
      <AboutPage />
    </>
  );
};

export default page;
