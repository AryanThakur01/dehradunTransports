import React, { FC, ReactNode } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ICard {
  title: string;
  image: string | StaticImport;
  icon: ReactNode;
}

const Card: FC<ICard> = ({ title, icon, image }) => {
  return (
    <div className="border border-border flex flex-col bg-card rounded overflow-hidden shadow">
      <p className="p-2 bg-primary text-primary-foreground font-bold flex items-center gap-2 min-h-[4rem]">
        {icon}
        {title}
      </p>
      <Image
        src={image}
        alt="Experienced"
        className="w-40 self-center my-2 justify-self-center"
        sizes="(max-width: 768px) 70%, 80%"
      />
    </div>
  );
};

export default Card;
