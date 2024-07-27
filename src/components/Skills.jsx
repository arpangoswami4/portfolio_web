import React from "react";
import SkillIcon from "./SkillIcon";

const Skills = () => {
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
    <section>
      <h3 className="text-3xl text-black text-center mb-6">My Skills:</h3>
      <div className="flex flex-col sm:flex-row gap-4 w-full m-auto justify-center">
        {skillIcons.map((iconItem) => (
          <SkillIcon key={iconItem[1]} iconItem={iconItem} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
