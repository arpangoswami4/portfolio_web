import React from "react";

const Footer = () => {
  const presentYear = new Date().getFullYear();
  return (
    <div className="bg-secondary h-12 flex justify-center items-center">
      <span>Copyright © {presentYear} Arpan Goswami. All rights reserved.</span>
    </div>
  );
};

export default Footer;
