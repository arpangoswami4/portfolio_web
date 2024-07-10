import React from "react";
import SocialIcons from "./SocialIcons";
import Button from "./Button";
import selfImage from "../images/selfImage.jpg";

const Introduction = () => {
  return (
    <section className="flex flex-row">
      <div className="m-16 flex flex-col sm:w-3/5">
        <div className="text-black w-full">
          <h3 className="text-2xl">Hello, I am</h3>
          <h1 className="text-4xl">Arpan</h1>
          <h1 className="text-4xl">Goswami</h1>
          <p className="text-xl mt-4">
            Experienced software developer with two and a half years of industry
            experience with keen interest in Full Stack web devlopment.My
            passion for programming, eagerness to learn and clear technical
            concepts make me good at problem solving and crafting
            forward-thinking solutions.
          </p>
        </div>
        <SocialIcons />
        <div className="flex flex-row justify-center">
          <Button>Download CV</Button>
        </div>
      </div>
      <div className="sm:w-2/5 bg-secondary justify-center items-center flex rounded-l-full">
        <img src={selfImage} className="w-44 rounded-full border-2 border-orange-500" alt="self" />
      </div>
    </section>
  );
};

export default Introduction;
