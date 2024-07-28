import React from "react";
import Skills from "./Skills";
import WebsiteInfo from "./WebsiteInfo";

const About = () => {
  return (
    <section className="flex flex-col items-center">
      <WebsiteInfo />
      <Skills />
    </section>
  );
};

export default About;
