import React from "react";
import SkillIcon from "./SkillIcon";
import Skills from "./Skills";

const About = () => {
  const skillIcons = [
    ["mdi:language-ruby-on-rails", "Ruby On Rails"],
    ["logos:react", "React"],
    ["logos:javascript", "Javascript"],
    ["logos:python", "Python"],
    ["logos:postgresql", "Postgres"],
    ["devicon:mysql", "Mysql"],
    ["logos:redux", "Redux"],
    ["vscode-icons:file-type-angular", "Angular"],
    ["logos:ruby", "Ruby Scripting"],
    ["devicon:mongodb", "MongoDB"],
    ["devicon:tailwindcss", "Tainwind CSS"],
  ];
  return (
    <section className="flex flex-col items-center">
      {/* <p className="mb-8 text-black">This portfolio website is made with two </p> */}
      <Skills />
    </section>
  );
};

export default About;
