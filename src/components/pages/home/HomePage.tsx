import { FC } from "react";
import Introduction from "./Introduction";
import Top from "./Top";
import Services from "./Services";
import AdditionalEyeCatchers from "./AdditionalEyeCatchers";

interface IHomePage {}

const HomePage: FC<IHomePage> = () => {
  return (
    <>
      <Top />
      <Introduction />
      <AdditionalEyeCatchers />
      <Services />
    </>
  );
};

export default HomePage;
