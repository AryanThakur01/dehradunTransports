import { FC } from "react";
import Introduction from "./Introduction";
import Top from "./Top";
import Services from "./Services";
import AdditionalEyeCatchers from "./AdditionalEyeCatchers";
import Footer from "@/components/Footer";

interface IHomePage {}

const HomePage: FC<IHomePage> = () => {
  return (
    <>
      <Top />
      <Introduction />
      <AdditionalEyeCatchers />
      <Services />
      <Footer classname="bg-secondary" />
    </>
  );
};

export default HomePage;
