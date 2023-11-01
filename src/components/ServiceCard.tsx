import React, { FC, ReactNode } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface IServiceCard {
  title: string;
  image: string | StaticImport;
  detail: string;
}

const ServiceCard: FC<IServiceCard> = ({ title, image, detail }) => {
  return (
    <div className="border border-border flex flex-col bg-card rounded overflow-hidden shadow hover:rotate-1 transition-shadow">
      <Image src={image} alt="Experienced" className="w-32 self-center my-6" />

      <div className="container my-3">
        <h3 className="font-bold tracking-wide">{title}</h3>
        <p className="text-sm font-light text-muted-foreground">{detail}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
