import { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: "best balaji packers and movers",
    short_name: "bbpm",
    description:
      "Welcome to Best Balaji Packers and Movers, your go-to solution for all your moving needs. We understand that moving can be a stressful and challenging experience. That's where we come in – to make your move smooth, efficient, and hassle-free. With years of experience and a dedicated team, we've built a reputation for being the best in the business. Our commitment to excellence and customer satisfaction sets us apart.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
};

export default manifest;
