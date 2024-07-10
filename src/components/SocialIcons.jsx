import React from "react";
import SocialIcon from "./SocialIcon";

const SocialIcons = () => {
  const iconComponents = [
    {
      link: "https://www.linkedin.com/in/coder-arpan-goswami/",
      icon: "pajamas:linkedin",
    },
    { link: "https://github.com/arpangoswami4", icon: "jam:github" },
    { link: "mailto:arpan.goswami21@gmail.com", icon: "mdi:gmail" },
  ];
  return (
    <div className="flex flex-row gap-4 my-3 justify-center">
      {iconComponents.map((component) => {
        return <SocialIcon key={component.link} link={component.link} icon={component.icon} />;
      })}
    </div>
  );
};

export default SocialIcons;
