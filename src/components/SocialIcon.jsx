import React from "react";
import { Icon } from "@iconify/react";

const SocialIcon = ({ link, icon }) => {
  return (
    <a href={link} target="blank">
      <Icon
        icon={icon}
        className="text-secondary bg-white hover:bg-secondary hover:text-white w-8 h-8"
      />
    </a>
  );
};

export default SocialIcon;
