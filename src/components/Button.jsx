import React from "react";

const Button = ({ children, padding = "p-3", width = "w-48", extraProps="" }) => {
  return (
    <button
      className={`bg-secondary rounded-full ${padding} ${width} ${extraProps} hover:text-secondary hover:bg-white hover:border-secondary hover:border-2`}
    >
      {children}
    </button>
  );
};

export default Button;
