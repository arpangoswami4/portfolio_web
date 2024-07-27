import React from "react";

const Button = ({
  children,
  padding = "p-3",
  width = "w-48",
  styleProps = "",
  background = "bg-secondary",
  onClick,
  ...options
}) => {
  const style = `rounded-full ${background} ${padding} ${width} ${styleProps} hover:text-secondary hover:bg-white hover:border-secondary hover:border-2`;
  return (
    <button className={style} onClick={onClick} {...options}>
      {children}
    </button>
  );
};

export default Button;
