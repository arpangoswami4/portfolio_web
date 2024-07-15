import React from "react";

const Button = ({ children, padding = "p-3", width = "w-48", styleProps="", onClick }) => {
  return (
    <button
      className={`bg-secondary rounded-full ${padding} ${width} ${styleProps} hover:text-secondary hover:bg-white hover:border-secondary hover:border-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
