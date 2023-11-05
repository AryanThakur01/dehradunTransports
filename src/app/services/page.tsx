import ServicesPage from "@/components/pages/services/ServicesPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best balaji packers and movers services",
  description:
    "Best Balaji Packers and Movers, we offer a comprehensive array of services, meticulously tailored to ensure your move is smooth, secure, and stress-free.",
};

const page = () => {
  return (
    <>
      <ServicesPage />
    </>
  );
};

export default page;
