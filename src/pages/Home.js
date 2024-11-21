import React from "react";
import AuroraHero from "../components/AuroraHero";
import { Globe } from "../components/Globe";
import BubbleText from "../components/BubbleText";
const Home = () => {
  return (
    <section className="h-full w-full relative select-none">
      <span className="z-[9000] fixed text-white top-40 text-xl  w-full text-center max-md:top-[30vh]">
        {" "}
        <BubbleText />
      </span>
      <AuroraHero />
      <Globe />
    </section>
  );
};

export default Home;
