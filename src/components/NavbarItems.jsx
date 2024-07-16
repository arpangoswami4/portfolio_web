import { NavLink } from "react-router-dom";

const NavbarItems = ({ items }) => {
  return (
    <div className="flex flex-row gap-8 text-lg">
      {items.map((item) => {
        return (
          <NavLink
            to={item[1]}
            key={item[0]}
            className={({ isActive }) => {
              const underlineStyle = "underline underline-offset-8 decoration-tertiary decoration-2"
              let navStyle = isActive ? underlineStyle : "";
              navStyle += " hover:" + underlineStyle;
              return navStyle;
            }}
            end
          >
            {item[0]}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavbarItems;
